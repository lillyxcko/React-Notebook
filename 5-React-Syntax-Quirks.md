
### functions & variables are written in PascalCasing
- Capitalize the first letter of the word, and the first letter of each word that follows
```
NumberOfDonuts = 34

FavePhrase = "Hello World"
```
<br>

### className
Instead of HTML "class", classes are defined by "className". 
> Tip: If you're copy and pasting HTML code from documentation, you can replace all references to "class" by selecting the first instance of the word, then use [ctrl + d] to continually select the following instances. Now, you are able to multi-edit all the lines. 

<br>

### JSX: Javascript XML
> use JSX syntax within functions

> Pros of JSX: create dynamic content easily
```
function MessageHere(){
  const name = 'Lilly';
  return <h1> Hello {name}! </h1>
}
```


<br> 

### { } wrap JS expressions
expressions are code that produces a value.

<br>

### <React.StrictMode>
Find it in main.tsx file. It is a built-in component in React that does not have visual representation. Used to identify potential problems.
Typically encapsules an <App /> component, which is the root component that organizes all other components in the React app.

