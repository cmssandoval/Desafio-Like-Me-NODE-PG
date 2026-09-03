# Desafío 3 - Like Me - Carlos Macías Sandoval

- Hola, esta es mi entrega para el desafío Like Me, el cual consiste en la creación de una aplicación backend para procesar consultas http. Sumando la conexión a una base de datos, y el almacenamiento y la lectura de datos en la misma.

- El frontend fue entregado por Desafío Latam y no es de mi propiedad.

- El backend lo desarrollé utilizando Express Js y pg (es necesario tener instalado postgres para correr esta acplicación).

## Cómo usar la aplicación
1. Descargar el proyecto

2. Instalar las dependencias ejecutando el siguiente comando en una terminal para cada ruta (backend-app, frontend-app):

    ```bash
    $ npm install
    ```
3. Con las dependencias instaladas y la base de datos likeme creada con la tabla posts, levantar el servidor en ambas terminales con:

    ```bash
    $ npm run dev
    ```
4. Abrir el enlace entregadp por vite en el frontend, normalmente es **http://localhost:5173/**

5. Crear y enviar un post.

## Consideraciones para la evaluación

1. **MUY IMPORTANTE**: Por alguna razón no pude levantar el frontend de manera normal, tuve errores ejecutando npm install e incluso intenté seguir algunas recomendaciones marcadas por eslint. La única solución, al menos para mí, fue ejecutar el comando:
    ```Node
    $ npm audit fix --force
    ```

2. Las propiedades del objeto de configuración de la instancia pool están fijadas mediante variables de entorno, siguiendo el método de las guías de este módulo, por lo que hago uso del paquete dotenv por buenas practicas, aunque de todas formas, usé el usuario por defecto de postgres.

3. Así mismo, hice uso del patrón MVC, manejando las funciones que ejecutan las consultas sql en un archivo aparte.

<h4 style="color: lime; font-style: italic;">> Saludos!</h4>