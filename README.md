# contacs-nodejs

## The folder structure 🏢

```structure
├───src
│       app.ts         # App entry point
│   ├───config         # Environment variables and configuration related stuff
│   ├───helpers        # Helper methods
│   ├───loaders        # Split the startup process into modules
│   ├───middleware     # middleware functions
│   ├───models         # Database models
│   ├───routes         # Express route controllers for all the endpoints of the app
│   ├───services       # All the business logic is here
│   └───types          # Type declaration files (d.ts) for Typescript
├───tsconfig.json      # TypeScript setup
└───webpack.config.js  # Webpack setup
```

## Layer architecture

### Pre-requirements 📋

_Have installed NodeJS y npm_

[NodeJS](https://nodejs.org/)

[npm](https://www.npmjs.com/)

### Instalación 🔧

_1. Ir a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) y crear una cuenta para tener una base de datos noSQL en la nube de forma gratutita_

_2. Crear un archivo ``.env`` como se muestra en ``.env.example``_

_3. Reconstruir los modulos de Node, lo hacemos ejecuando el siguiente comando estando en la raiz del proyecto_

```install
npm install
```

_4. Raise the server, being at the root of the project_

`npm run dev` for a development environment

`npm run build` prepare the project for a production environment

`npm start` para un entorno de producción
