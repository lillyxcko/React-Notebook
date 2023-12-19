
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

