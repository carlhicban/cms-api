
# NestJS Application

This is a NestJS application. Follow the instructions below to run the app locally.

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (version >= 20.x)
- **npm** (Node Package Manager)
- **NestJS CLI** (if not installed, you can install it globally using `npm install -g @nestjs/cli`)

## Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/carlhicban/cms-api.git
cd cms-api
```

## Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

## Environment Variable

Create a .env file in the root directory of the project (same level as package.json). Add the following environment variables to the file:

```bash
MONGO_URI=<your-mongodb-uri-here>
JWT_SECRET=<your-secret-token>
```


## Running the Development Server

Once the dependencies are installed, you can start the development server with:

```bash
npm run start:dev
```

This will start the server at `http://localhost:3000/`. Open the browser and visit this URL to see the app in action.

## Building the Application

To create a production build, run:

```bash
npm run build
```

This will generate the build files in the `dist/` directory.

## Running Tests

To run unit tests, use:

```bash
npm run test
```

To run e2e tests, use:

```bash
npm run test:e2e
```

## Additional Commands

- **Start the server with a different port**:
    ```bash
    npm run start:dev -- --port 4000
    ```

- **Generate Modules, Services, Controllers, etc.**:
    ```bash
    nest g module module-name
    nest g service service-name
    nest g controller controller-name
    ```

## Troubleshooting

- If you encounter any issues during setup, try clearing npm's cache with:
    ```bash
    npm cache clean --force
    ```

- For more help with NestJS commands, you can refer to the official documentation: [NestJS Docs](https://docs.nestjs.com).
