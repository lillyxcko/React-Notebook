## Table of Contents

[Install Node.js](#install-nodejs)  |   [Create React App](#create-a-react-app)   | [Importing Libraries](#example-importing-bootstrap5-library) | [Useful IDE Extensions](#useful-ide-extensions)  

:maple_leaf: :basketball: :pizza: :tangerine: :boat: :small_orange_diamond:

How to get a React app started for development.

<br>


# Install Node.js
1. Open your command prompt or terminal window 
2. Run `node -v`
3. If you don't have Node.js installed on your computer, [download the latest version here](https://nodejs.org/en).

<br> 

# Create a React App
> using Vite
1. Open your command prompt or terminal window
2. `npm create vite@latest`
3. Specify project name (is `vite-project` by default)
4. Select a framework (arrow key down to React)


<img src="https://github.com/lillyxcko/React-Notebook/assets/79551113/43009b50-2058-48f5-bc95-c8e6e2db5f98" alt="image" width="400"/>

<br>

5. Navigate to the project folder you just created (`vite-project` or your custom name)
6. Run `npm install`
7. Open the project in VS Code (hint: shortcut `code .`)
8. Open a terminal in VS Code
9. Run `npm run dev` in the IDE terminal
10. Vist the local host url it gives you to see your React & Vite App running on your local computer.

<br>

<img src="https://github.com/lillyxcko/React-Notebook/assets/79551113/0b993e00-3c58-40cf-9a08-e4ba0dc16927" alt="image" width="300"/>

<br> <br>


## Example: Importing Bootstrap5 library

1. Open a terminal and navigate to your react app folder.
2. `npm install boostrap@latest`
3. src > App.css => [remove] the contents of the entire App.css file
4. src > index.css => [delete] the file entirely 
5. src > main.tsx => [remove] the `./index.css` import
6. add to main.tsx
   ```
   import 'bootstrap/dist/css/bootstrap.css'
   ```

<br>


# Useful IDE Extensions 
> on VS Code

### Prettier - Code format
    - helps you format your code
    
    Tip: To in VS Code go to: Preferences > Settings => Search: "format on save" => check the box under "Editor: Format On Save"
    This allows Prettier to format the code every time the file is saved. 

    
