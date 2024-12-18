# Tarea 2

El objetivo de este documento es proporcionar una guía para los desarrolladores para que puedan levantar el proyecto en sus máquinas locales.

## Herrmaientas 

- VScode (opcional)
- Angular 18
- Node.js
- Tailwind
- Flowbite

## Clonar el repositorio

Para clonar un repositorio debes acceder a la direccion de github donde esta alojado el repositorio. 

Apretar en el boton verde que dice codigo, y copiar el enlace https.

Ahora, es necesario crear una carpeta en cualquier direccion que deseas almacenar el proyecto.

Despues, haz click derecho sobre la carpeta  y selecciona abrir en terminal. 

> [!NOTE]
> Presiona enter, y espera a que termine de clonar el repositorio.

Luego, ingresa el comando "code ." para abrir Visual Studio Code.

```
code .
```
Para clonar el repositorio en la carpeta que creaste, en la terminal ingresa el comando "git clone" seguido de un espacio y la direccion del repositorio (La cual copiaste anteriormente).

```
git clone https://github.com/jhonelpro/Portfolio.git
```

## Instalar dependencias

Abrir una terminal en vscode, presionando las teclas "Ctrl + Shift + `", o tambien puedes ir a la parte superior de vscode, seleccionar los 3 puntitos "...", luego "Terminal", y "New Terminal".

Ahora en la terminal accede a la raiz del proyecto con el siguiente comando:

```
cd Portfolio
```

Para restaurar las dependencias del proyecto, ingresa el siguiente comando en la terminal:

```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.