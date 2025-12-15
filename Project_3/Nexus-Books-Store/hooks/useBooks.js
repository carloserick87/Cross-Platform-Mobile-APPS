import { useState, useEffect } from "react";
import { apiService } from "../services/api";

export const useBooks = (params = {}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log("🔍 [useBooks] Iniciando carga de libros...");
        setLoading(true);
        setError(null);
        const data = await apiService.getBooks(params);
        console.log("✅ [useBooks] Datos recibidos:", data?.length || 0, "libros");
        // Asegurar que siempre sea un array
        const booksArray = Array.isArray(data) ? data : [];
        setBooks(booksArray);
        console.log("✅ [useBooks] Libros establecidos:", booksArray.length);
      } catch (err) {
        console.error("❌ [useBooks] Error:", err.message);
        console.error("❌ [useBooks] Error completo:", err);
        setError(err.message || "Error al cargar los libros");
        setBooks([]); // Fallback a array vacío
      } finally {
        setLoading(false);
        console.log("🏁 [useBooks] Carga completada");
      }
    };

    fetchBooks();
  }, [JSON.stringify(params)]);

  return { books, loading, error, refetch: () => fetchBooks() };
};

export const useBookById = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchBook = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getBookById(id);
        setBook(data);
      } catch (err) {
        console.error("Error in useBookById:", err);
        setError(err.message || "Error al cargar el libro");
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return { book, loading, error };
};

export const useBooksByCategory = (category) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) {
      setLoading(false);
      return;
    }

    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getBooksByCategory(category);
        setBooks(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error in useBooksByCategory:", err);
        setError(err.message || "Error al cargar los libros");
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  return { books, loading, error };
};

export const useSearchBooks = (query) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.trim() === "") {
      setBooks([]);
      setLoading(false);
      return;
    }

    const searchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.searchBooks(query);
        setBooks(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error in useSearchBooks:", err);
        setError(err.message || "Error al buscar libros");
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce: esperar 500ms antes de buscar
    const timeoutId = setTimeout(() => {
      searchBooks();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { books, loading, error };
};

