## About

This repo is a playground to experiment with different frontend frameworks.

The project featured (FontApp) has a lot of ingredients a framework should be able to provide:

- State management
- Components
- CSS management
- Use of existing components from the frameworks eco system (eg a color picker)



## Run the app

### 1. React
- `cd frameworks/react`
- `npm install`
- `yarn start`

### 2. Vue
- `cd frameworks/vue`
- `npm install`
- `npm run serve`
- open `http://localhost:8080`

### 3. Svelte
- `cd frameworks/svelte`
- `npm install`
- `npm run dev`
- open `http://localhost:5000`

### 4. Angular
- `cd frameworks/angular`
- (`npm install -g @angular/cli`)
- `ng serve`
- open `localhost:4200`

Note: Most or all projects are using the `shared` folder at the root of this repo. To fix the issue 
of frameworks not able to reach code outside of its own scope, I have created a symlink 
inside the `src` folder of the framework folder:

`ln -s path-to-shared shared`
