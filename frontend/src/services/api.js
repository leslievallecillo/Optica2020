export const obtenerCatalogo = async () => {
    try {
        const respuesta = await fetch('http://localhost:3000/api/catalogo');
        if (!respuesta.ok) throw new Error('Error al conectar con el servidor');
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error pidiendo datos al servidor:", error);
        alert('Error al cargar el catálogo: ' + error.message);
        return [];
    }
};


