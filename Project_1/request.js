// Peticiones de ejemplo para la API de la libreria Nexus.
// Este archivo contiene las peticiones HTTP para probar todos los endpoints de la API.


     const { error } = require("console");
     console.info('=== PETICIONES A LA API DE LA LIBREIRA NEXUS ===\n');


// Función auxiliar para mostrar de forma organizada.
    function showResponse (title, response){
       console.log(`\n---${title}---`);
       console.log(JSON.stringify(response,null,2));
       console.log('---\n');
    }


// Obtener información de Nexus Bookstore.
    async function getLibreriaData(){
       try{
          const response = await fetch('https://mock.apidog.com/m1/1088805-1078197-default/information');
          const data = await response.json();
          showResponse('Información de la Libreria Nexus',data);
        }
       catch{
          console.error('Error al obtener información de la Libreria', error);
        }
    }

// Obtener lista completa de llibros.
    async function getAllBooks(){
       try{
          const response = await fetch('https://mock.apidog.com/m1/1088805-1078197-default/books');
          const data = await response.json();
          showResponse('Lista completa de Libros',data);
        }
        catch(error){
          console.error('Error al obtener la lista de libros');
        }
    }

// Obtener un libro especifico mediante por la categoria de la lista de libros.
    async function getBookById(id,category){
       try{
        const response = await fetch(`https://mock.apidog.com/m1/1088805-1078197-default/books?id=${id}&category=${category}`);
        const data = await response.json();
        showResponse(` Libro ID ${id} con la categoria ${category} `,data);
       }
       catch(error){
        console.log(`Error al obtener el libro ${id} en la categoria ${category}`,error);
       }
    }

// Lista de miembros de la Libreria Nexus.
    async function getMembers(){
      try{
        const response = await fetch(`https://mock.apidog.com/m1/1088805-1078197-default/list_members`);
        const data = await response.json();
        showResponse('Lista de Miembros',data);

      }
      catch{
        console.error('Error al encontrar lista de usuarios',error);
      }
    }

// Agregar un nuevo miembro a la Libreria Nexus.
   async function addMember (){
    try{
      const response = await fetch('https://mock.apidog.com/m1/1088805-1078197-default/members',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          id: 3,
          name: 'John Doe',
          email: 'john.doe@example.com',
          membership_date: '2025-10-11',
          borrowed_books: [103, 106]
        })
      });

        if(!response.ok){
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        showResponse('Miembro agregado correctamente a la Libreria Nexus',data);
    }
    catch(error){
      console.log('Error al agregar el miembro a la Libreira Nexus',error);
    }
   }

// Eliminar un miembro de la Libreria Nexus.

// Función principal que ejecuta todas las peticiones
    async function executeAllRequests(){
       console.log('Iniciando peticiones a la API...\n');

         // Ejecutar las peticiones
               await getLibreriaData();
               await getAllBooks();
               await getBookById(1,'Fiction');
               await getMembers();
               await addMember ()

       console.log('=== FIN DE LAS PETICIONES ===');
}

// Ejecutar las peticiones
    executeAllRequests().catch(error=>{
        console.error('Error general:',error);
    });

   