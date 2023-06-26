<!DOCTYPE html>
<html lang="es">
    <head>
        <link rel="stylesheet" href="estilos.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">

        <!-- Fuentes obtenidas de Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&display=swap" rel="stylesheet">

        <!-- Iconos obtenidos de w3school -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <meta name="author" content="Suarez Ignacio">
        <title>Curriculum Vitae de Madok</title>
    </head>

    <body>
        <main class="contenido-principal"> <!-- Aca se forma el grid de 7 columnas de manera estandar, ademas añade un margen al CV -->

            <!-- Inicio de seccion izquierda -->
            <!-- Contenidos de la seccion izquierda: -->
            <!-- Imagen de perfil, contacto, habilidades y referencias -->
            <section class="seccion-izq"> <!-- Se define que debe utilizar 2 columnas de las 7 creadas en el grid del main-->
                <div class="contenedor-izq">
                    <div class="perfil">
                        <img id="imagen-perfil" class="imagen-perfil" src="madok-perfil.jpg" alt="Foto de un perro raza golden retriever">
                        <h2 class="nombre">Madok</h2>
                        <p class="raza">Golden Retriever</p>
                    </div>

                    <div class="contacto">
                        <h3 class="titulos-izq">Informacion de <br> contacto</h3>
                        <ul>
                            <li>
                                <i class="fa fa-phone"></i>
                                Llamen a mi mama
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                No tengo soy un perro
                            </li>
                            <li>
                                <i class="fa fa-globe"></i>
                                Cuando mi hermano se reciba de junior full-stack
                            </li>
                            <li>
                                <i class="fa fa-map-marker"></i>
                                A media cuadra de donde me compran la comida
                            </li>
                        </ul>
                    </div>

                    <div class="habilidades-secc">
                        <h3 class="titulos-izq">Habilidades</h3>
                        <ul>
                            <li>
                                <p class="titulo-habilidades">Dormir</p>
                                <div class="barra">
                                    <div class="nivel b1"></div>
                                </div>
                            </li>
                            <li>
                                <p class="titulo-habilidades">Jugar</p>
                                <div class="barra">
                                    <div class="nivel b2"></div>
                                </div>
                            </li>
                            <li>
                                <p class="titulo-habilidades">Sentarme</p>
                                <div class="barra">
                                    <div class="nivel b3"></div>
                                </div>
                            </li>
                            <li>
                                <p class="titulo-habilidades">Pasear</p>
                                <div class="barra">
                                    <div class="nivel b4"></div>
                                </div>
                            </li>
                            <li>
                                <p class="titulo-habilidades">Dar amor</p>
                                <div class="barra">
                                    <div class="nivel b5"></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="referencias-seccion">
                        <h3 class="titulos-izq">Referencias</h3>
                        <h6 class="subtitulo-izq">Nano</h6>
                        <p class="sub-ref">Jugamos a pelearnos, a tironear o le ladramos a algo</p>
                        <h6 class="subtitulo-izq">Mama</h6>
                        <p class="sub-ref">Me malcria y me hace comida rica ademas de mimos</p>
                        <h6 class="subtitulo-izq">Nacho</h6>
                        <p class="sub-ref">Lo molesto mientras estudia para que me tire la pelota</p>
                    </div>
                </div>
            </section>
            <!-- Fin de seccion izquierda -->

            <!-- Inicio de seccion derecha -->
            <!-- Contenidos de la seccion derecha: -->
            <!-- Sobre Mi, Experiencia y Formacion -->
            <section class="seccion-der"><!-- Se define que debe utilizar 5 columnas de las 7 creadas en el grid del main-->
                <div class="contenedor-der">

                    <!-- Inicio de seccion Sobre mi -->
                    <section class="sobre-mi sec">
                        <h2 class="titulos-der">Sobre Mi</h2>
                        <p class="parrafo">
                            Soy un Golden Retriever de 4 años,
                            soy un perro juguetón, cariñoso y un tanto celoso, pero lo que me destaca es mi inteligencia. <br>
                            Disfruto al máximo jugar con la pelota, comer y dormir plácidamente en mi cómoda cama abrazado a mis juguetes, me
                            dan
                            compañía y seguridad <br>
                            Tengo un mejor amigo llamado Nano, con quien comparto aventuras y diversión
                            y para mi cada día es una oportunidad para llenar de alegría y amor incondicional la vida de mi humano. <br>
                            ¡Soy el compañero perfecto para compartir momentos felices y memorables!
                        </p>
                    </section>
                    <!-- Fin de seccion Sobre Mi -->

                    <!-- Inicio de seccion Experiencia -->
                    <section class="experiencia sec">
                        <h2 class="titulos-der">Experiencia</h2>
                        <div class="timeline">
                            <div class="cont-tl-izq">
                                <h5 class="titulo-tl-izq">Mi Casita</h5>
                                <p class="parrafo">2019 - Actualidad</p>
                            </div>
                            <div class="cont-tl-der">
                                <div class="borde-tl">
                                    <h5 class="titulo-tl-der">Sereno</h5>
                                    <p class="parrafo">Trabajo todo el dia, excepto cuando duermo, cuidando la casa.</p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="cont-tl-izq">
                                <h5 class="titulo-tl-izq">20th Century Fox</h5>
                                <p class="parrafo">2021 - 2022</p>
                            </div>
                            <div class="cont-tl-der">
                                <div class="borde-tl"> <!-- El objetivo de esta clase es formar la linea divisora -->
                                    <h5 class="titulo-tl-der">Actor</h5> <!-- En esta clase ademas de definir el formato de las letras del titulo se forma el circulo que esta sobre la linea divisora-->
                                    <p class="parrafo">Me contrataron para hacer de Marley en el remake de la pelicula pero luego me reemplazaron por que no me sale hacerme el muertito.</p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="cont-tl-izq">
                                <h5 class="titulo-tl-izq">Nestlé Purina PetCare</h5>
                                <p class="parrafo">2018 - 2019</p>
                            </div>
                            <div class="cont-tl-der">
                                <div class="borde-tl">
                                    <h5 class="titulo-tl-der">Modelo de fotos</h5>
                                    <p class="parrafo">Posé para las fotos del empaquetado las bolsas de alimento.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Fin de seccion experiencia -->

                    <!-- Inicio de seccion Formacion -->
                    <section class="Formacion">
                        <h2 class="titulos-der">Formación</h2>
                        <div class="timeline">
                            <div class="cont-tl-izq">
                                <h5 class="titulo-tl-izq">Adiestramiento con Nacho</h5>
                                <p class="parrafo">2018 - Actualidad</p>
                            </div>
                            <div class="cont-tl-der">
                                <div class="borde-tl">
                                    <h5 class="titulo-tl-der">Entrenamiento canino</h5>
                                    <p class="parrafo">Me enseña cosas y a veces aprendo, la mayoria de las veces no.</p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="cont-tl-izq">
                                <h5 class="titulo-tl-izq">Autodidacta</h5>
                                <p class="parrafo">2018 - Actualidad</p>
                            </div>
                            <div class="cont-tl-der">
                                <div class="borde-tl">
                                    <h5 class="titulo-tl-der">Aprendizaje propio</h5>
                                    <p class="parrafo">Aprendo a abrir puertas o lo que sea necesario para conseguir mis objetivos.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Fin de seccion Formacion -->
                </div>
            </section>
            <!-- Fin de seccion derecha -->

        </main>
        <script src="programacion.js"></script>
    </body>


</html>
