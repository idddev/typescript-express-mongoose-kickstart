# Descripción del proyecto

El proyecto es una plantilla para crear una aplicación web con Node.js y Express, usando TypeScript como lenguaje de programación y Mongoose como ORM para MongoDB. El objetivo de esta plantilla es ofrecer una base sólida para el desarrollo de aplicaciones web escalables y mantenibles.

## Estructura del proyecto

- `public/`: Contiene los archivos estáticos que se expondrán públicamente en el servidor.
- `src/controllers/`: Contiene los controladores de las rutas de Express.
- `src/libs/`: Contiene las librerías auxiliares, como por ejemplo las configuraciones de Express y Mongoose.
- `src/models/`: Contiene los modelos de Mongoose.
- `src/routes/`: Contiene los enrutadores de Express.
- `src/index.ts`: Es el punto de entrada de la aplicación.

## Tecnologías utilizadas

- Express: Framework web para Node.js.
- TypeScript: Lenguaje de programación tipado que se compila a JavaScript.
- Mongoose: ORM para MongoDB.
- Docker: Plataforma de contenedores que facilita la creación, el despliegue y la ejecución de aplicaciones en contenedores.

## Imagen de Docker

Se provee de una imagen de docker que dispone del servidor MongoDb, y genera una instancia productiva de la aplicacion.

Es necesario tener instalado Docker y Docker Compose de manera previa.

Para construir la imagen utilice el comando: 

```shell
docker-compose build
```

Para inicializar los servicios:

```shell
docker-compose up
```

Si desea ejecutar los servicios en segundo plano (modo demonio), ejecute:

```shell
docker-compose up -d
```

## Instalacion

Es necesario contar con una instancia de MongoDb a la cual conectarse. Puede iniciar el contenedor provisto por el proyecto, o conectarse
a algun servidor local/remoto.

Para arrancar a usar esta plantilla, siga los siguientes pasos:

1. Clone este repositorio:
```shell
git clone 
```

2. Instalar las dependencias:

```shell
npm install
```

3. Copiar el archivo de variables de entorno .env.example y renombrarlo como .env. Luego, se deben establecer las variables de entorno necesarias en el archivo.

4. Ejecutar en modo desarrollo:

```shell
npm run dev
```

## Contribuyendo

Si quieres contribuir a este proyecto, por favor crea un Pull Request o envía un issue. ¡Todas las contribuciones son bienvenidas!