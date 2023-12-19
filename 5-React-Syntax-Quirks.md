## Table of Contents

[PascalCasing](#PascalCasing)  |   [className](#className)   |   [JSX: Javascript XML](#JSX-Javascript-XML)  |   [{} wrap](#--wrap-JS-expressions)  |   [Fragments](#fragments)  |   [State v. Props](#State-v-Props)  |   [<React.StrictMode>](#reactstrictmode)

:turtle: :herb: :golf: :seedling: :melon: :dragon:

<br>

## PascalCasing
- functions are variables are written in PascalCasing
- Capitalize the first letter of the word, and the first letter of each word that follows
```
NumberOfDonuts = 34

FavePhrase = "Hello World"
```
<br>

## className
Instead of HTML "class", classes are defined by "className". 
> Tip: If you're copy and pasting HTML code from documentation, you can replace all references to "class" by selecting the first instance of the word, then use [ctrl + d] to continually select the following instances. Now, you are able to multi-edit all the lines. 

<br>

## JSX: Javascript XML
> use JSX syntax within functions

> Pros of JSX: create dynamic content easily
```
function MessageHere(){
  const name = 'Lilly';
  return <h1> Hello {name}! </h1>
}
```


<br> 

## { } wrap JS expressions
Expressions are code that produces a value. Typically { } wraps data that you want to render dynamically. 

<br>

## Fragments
A component can only return one element. So, to have multiple elements in one component, wrap it all in a "Fragment".
Fragments are empty brackets `<> </>`. 
> Tip: to quickly wrap a body of code, go to view > command palette OR [shift + cmd + P]. Search for wrap with abbreviation. Select it, then type in the element you want to use to wrap the selected body of code in (e.g. `<div>`)

<br>

## State v. Props
| State                        | Props                           |
|------------------------------|---------------------------------|
| - managed within components  | - gets passed to the component  |
| - triggers re-render         | - triggers re-render            |
| - mutable                    | - immutable                     |

Takeaway: use states if the attribute may be altered at some point, and props if the attribute should not and will not change.

<br>

## <React.StrictMode>
Find it in main.tsx file. It is a built-in component in React that does not have visual representation. Used to identify potential problems.
Typically encapsules an <App /> component, which is the root component that organizes all other components in the React app.

