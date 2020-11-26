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
│   └───types          # Type declaration files for Typescript
├───tsconfig.json      # TypeScript setup
└───webpack.config.js  # Webpack setup
```

## Layer architecture
![layer architecture](https://user-images.githubusercontent.com/50475272/99424149-5be4e180-28cf-11eb-9ca0-a3a1e085e8d5.png)

### Pre-requirements 📋

_Have installed NodeJS y npm_

[NodeJS](https://nodejs.org/)

[npm](https://www.npmjs.com/)

### Instalationn 🔧

_1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account to have a noSQL database in the cloud for free_

_2. Create a file ``.env`` as it is shown in ``.env.example``_

_3. Rebuild Node modules, you can do it by executing the following command being at the project root_

```install
npm install
```

_4. Raise the server, being at the root of the project_

`npm run dev` for a development environment

`npm run build` prepare the project for a production environment

`npm start` for a production environment
