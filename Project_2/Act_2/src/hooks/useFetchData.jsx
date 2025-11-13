import { useEffect, useState } from "react";

/**
 * Custom Hook para obtener datos desde un JSON local o una API, con caché en sessionStorage.
 * @param {string} url - Ruta del archivo JSON o endpoint.
 * @param {function} transformFn - (opcional) Función para transformar los datos.
 * @returns {object} { data, loading, error }
 */
export const useFetchData = (url, transformFn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = `cache_${url}`; // clave única por cada JSON

    const fetchData = async () => {
      try {
        // Revisa si hay datos en sessionStorage
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
          const parsed = JSON.parse(cachedData);
          setData(parsed);
          setLoading(false);
          return;
        }

        // Si no hay caché, hace la petición
        const response = await fetch(url);
        if (!response.ok) throw new Error("No se pudo cargar el JSON");
        const json = await response.json();

        const result = transformFn ? transformFn(json) : json;

        // Guarda en caché
        sessionStorage.setItem(cacheKey, JSON.stringify(result));
        setData(result);
      } catch (err) {
        console.error("Error al obtener datos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, transformFn]);

  return { data, loading, error };
};
