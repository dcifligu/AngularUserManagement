# AngularUserManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Install Angular Material and Angular CDK:

1. Add angular Material to your project
   `ng add @angular/material`

2. Import Angular Material Modules:

Open your src/app/app.module.ts file and import the necessary Angular Material modules. You can import modules for components you plan to use, such as MatButtonModule, MatInputModule, MatCardModule, etc. Here's an example of how to import a few common modules:

```
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
```

## Backend Setup with JSON Server

This project uses a simple JSON-based backend powered by [JSON Server](https://github.com/typicode/json-server). To set up the backend, follow these steps:

1. Install JSON Server globally if you haven't already:

   `npm install -g json-server`

2. Create a db.json file in the root of your project directory. This file will serve as your database.

```
{
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "phone": "1234567890",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "phone": "9876543210",
      "email": "jane@example.com"
    }
    // Add more user data as needed
  ]
}
```

3.Start the JSON Server with the db.json file:

`json-server --watch db.json`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
