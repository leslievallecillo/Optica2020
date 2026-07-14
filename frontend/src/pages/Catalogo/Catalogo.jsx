import React, { useState, useEffect, useRef } from 'react';
// IMPORTACIÓN APAGADA TEMPORALMENTE PARA QUITAR EL ERROR ROJO:
// import { obtenerCatalogo } from '../../services/api'; 
import styles from './Catalogo.module.css';

export default function Catalogo() {
    // ESTADOS
    const [destacados, setDestacados] = useState([]);
    const [promociones, setPromociones] = useState([]);
    const [otros, setOtros] = useState([]);
    
    // ESTADOS DEL MODAL
    const [modalAbierto, setModalAbierto] = useState(false);
    const [imagenModal, setImagenModal] = useState('');

    // REFERENCIAS PARA EL SCROLL DEL CARRUSEL
    const scrollDestacados = useRef(null);
    const scrollPromociones = useRef(null);
    const scrollOtros = useRef(null);

    // Cargar datos al iniciar la página
    useEffect(() => {
        // DATOS DE PRUEBA DE EMERGENCIA PARA VER EL DISEÑO
        const datosFalsos = [
            { seccion: 'Destacados', titulo: 'Armazón Aviador', descripcion: 'Estilo clásico y ligero', precio: '$120', urlimagen: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop' },
            { seccion: 'Destacados', titulo: 'Lentes de Sol Polarizados', descripcion: 'Protección UV400', precio: '$85', urlimagen: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop' },
            { seccion: 'Destacados', titulo: 'Armazón Transparente', descripcion: 'Tendencia minimalista', precio: '$95', urlimagen: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop' },
            { seccion: 'Promociones', titulo: 'Gafas de Lectura', descripcion: 'Antireflejo incluido', precio: '$45', urlimagen: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop' },
            { seccion: 'Promociones', titulo: 'Lentes Deportivos', descripcion: 'Resistentes a impactos', precio: '$60', urlimagen: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=800&auto=format&fit=crop' },
            { seccion: 'Otros', titulo: 'Estuche Premium', descripcion: 'Cuero sintético', precio: '$15', urlimagen: 'https://images.unsplash.com/photo-1559825389-91823bb35422?q=80&w=800&auto=format&fit=crop' },
            { seccion: 'Otros', titulo: 'Kit de Limpieza', descripcion: 'Microfibra y spray', precio: '$10', urlimagen: 'https://images.unsplash.com/photo-1625591340237-77567794fc77?q=80&w=800&auto=format&fit=crop' }
        ];

        // Filtramos los datos de prueba igual que lo haríamos con la base de datos
        setDestacados(datosFalsos.filter(p => p.seccion === 'Destacados'));
        setPromociones(datosFalsos.filter(p => p.seccion === 'Promociones'));
        setOtros(datosFalsos.filter(p => p.seccion === 'Otros'));
    }, []);

    // Funciones del Carrusel
    const desplazar = (ref, direccion) => {
        if (ref.current) {
            ref.current.scrollBy({ left: direccion * 330, behavior: 'smooth' });
        }
    };

    // Funciones del Modal
    const abrirModal = (url) => {
        setImagenModal(url);
        setModalAbierto(true);
    };

    return (
        <div>
            {/* INICIO - BANNER */}
            <section id="inicio" className={styles.bannerBienvenida}>
                <div className="contenedor">
                    <h1>Bienvenidos a la Óptica 20/20</h1>
                    <p>Tu visión es nuestra prioridad</p>
                </div>
            </section>

            {/* SECCIÓN DESTACADOS */}
            <section id="productos" className={styles.seccionProductos}>
                <div className="contenedor">
                    <h2 className={styles.tituloSeccion}>Los más destacados</h2>
                    <div className={styles.contenedorCarrusel}>
                        <button className={`${styles.botonCarrusel} ${styles.botonAnterior}`} onClick={() => desplazar(scrollDestacados, -1)}>‹</button>
                        
                        <div className={styles.carrusel} ref={scrollDestacados}>
                            {destacados.map((item, index) => (
                                <div key={index} className={styles.itemCarrusel} onClick={() => abrirModal(item.urlimagen)}>
                                    <img src={item.urlimagen} alt={item.titulo} className={styles.imagenProducto} />
                                    <div className={styles.infoProducto}>
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descripcion}</p>
                                        <p className={styles.precioProducto}>{item.precio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className={`${styles.botonCarrusel} ${styles.botonSiguiente}`} onClick={() => desplazar(scrollDestacados, 1)}>›</button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN PROMOCIONES */}
            <section id="promociones" className={styles.seccionProductos}>
                <div className="contenedor">
                    <h2 className={styles.tituloSeccion}>Promociones Especiales</h2>
                    <div className={styles.contenedorCarrusel}>
                        <button className={`${styles.botonCarrusel} ${styles.botonAnterior}`} onClick={() => desplazar(scrollPromociones, -1)}>‹</button>
                        
                        <div className={styles.carrusel} ref={scrollPromociones}>
                            {promociones.map((item, index) => (
                                <div key={index} className={styles.itemCarrusel} onClick={() => abrirModal(item.urlimagen)}>
                                    <img src={item.urlimagen} alt={item.titulo} className={styles.imagenProducto} />
                                    <div className={styles.infoProducto}>
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descripcion}</p>
                                        <p className={styles.precioProducto}>{item.precio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className={`${styles.botonCarrusel} ${styles.botonSiguiente}`} onClick={() => desplazar(scrollPromociones, 1)}>›</button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN OTROS */}
            <section id="otros-productos" className={styles.seccionProductos}>
                <div className="contenedor">
                    <h2 className={styles.tituloSeccion}>Otros Productos</h2>
                    <div className={styles.contenedorCarrusel}>
                        <button className={`${styles.botonCarrusel} ${styles.botonAnterior}`} onClick={() => desplazar(scrollOtros, -1)}>‹</button>
                        
                        <div className={styles.carrusel} ref={scrollOtros}>
                            {otros.map((item, index) => (
                                <div key={index} className={styles.itemCarrusel} onClick={() => abrirModal(item.urlimagen)}>
                                    <img src={item.urlimagen} alt={item.titulo} className={styles.imagenProducto} />
                                    <div className={styles.infoProducto}>
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descripcion}</p>
                                        <p className={styles.precioProducto}>{item.precio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className={`${styles.botonCarrusel} ${styles.botonSiguiente}`} onClick={() => desplazar(scrollOtros, 1)}>›</button>
                    </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" className={styles.seccionServicios}>
                <div className="contenedor">
                    <h2 className={styles.tituloSeccion}>Nuestros Servicios</h2>
                    <div className={styles.contenedorServicios}>
                        <div className={styles.itemServicio}>
                            <h3>Exámenes de Cortesía</h3>
                            <p>Evaluaciones visuales completas sin costo adicional con cualquier compra.</p>
                        </div>
                        <div className={styles.itemServicio}>
                            <h3>Garantías Extendidas</h3>
                            <p>Todos nuestros productos incluyen garantía contra defectos de fabricación.</p>
                        </div>
                        <div className={styles.itemServicio}>
                            <h3>Reparaciones Especializadas</h3>
                            <p>Servicio técnico para reparación de armazones, cambio de cristales y ajustes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOSOTROS */}
            <section id="nosotros" className={styles.seccionNosotros}>
                <div className="contenedor">
                    <h2 className={styles.tituloSeccion} style={{ color: 'var(--color-acento)' }}>Sobre Nosotros</h2>
                    <div className={styles.contenedorNosotros}>
                        <div className={styles.itemNosotros}>
                            <h3 style={{ color: 'var(--color-acento)' }}>Misión</h3>
                            <p>Mejorar la calidad de vida mediante soluciones visuales integrales.</p>
                        </div>
                        <div className={styles.itemNosotros}>
                            <h3 style={{ color: 'var(--color-acento)' }}>Visión</h3>
                            <p>Ser líderes en innovación óptica y servicio excepcional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className={styles.seccionContacto}>
                <div className={`contenedor ${styles.contenedorContacto}`}>
                    <div>
                        <h3>Contacto</h3>
                        <p>Teléfono: (505) 2233-4455</p>
                        <p>WhatsApp: (505) 8877-6655</p>
                    </div>
                    <div>
                        <h3>Dirección</h3>
                        <p>Av. Principal #123, Managua, Nicaragua</p>
                    </div>
                    <div>
                        <h3>Horarios</h3>
                        <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </section>

            {/* MODAL DE IMAGENES */}
            {modalAbierto && (
                <div className={styles.modalImagen} onClick={() => setModalAbierto(false)}>
                    <div className={styles.modalContenido} onClick={e => e.stopPropagation()}>
                        <button className={styles.cerrarModal} onClick={() => setModalAbierto(false)}>&times;</button>
                        <img src={imagenModal} className={styles.modalImagenAmpliada} alt="Ampliada" />
                    </div>
                </div>
            )}

            {/* BOTÓN WHATSAPP */}
            <a 
                href="https://wa.me/50588776655?text=Hola,%20me%20gustaría%20agendar%20una%20cita." 
                target="_blank" 
                rel="noreferrer" 
                className={styles.botonWhatsapp}
            >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.179-3.495-8.428"/>
                </svg>
            </a>
        </div>
    );
}