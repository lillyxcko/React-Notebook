## Table of Contents

<h5>Basics:</h5> [PascalCasing](#PascalCasing)  |   [className](#className)   |   [JSX: Javascript XML](#JSX-Javascript-XML)  |   [{} wrap](#--wrap-JS-expressions)  |   [Fragments](#fragments)  |

<h5>Dynamic Handling:</h5> [Conditional Rendering](#conditional-rendering)  |   [Props](#props)  |  [State v. Props](#State-v-Props)  |   

<h5>Other:</h5> [<React.StrictMode>](#reactstrictmode)

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

`<p> {2 + 2} </p>`
> outputs 4 

<br>

## Fragments
A component can only return one element. So, to have multiple elements in one component, wrap it all in a "Fragment".
Fragments are empty brackets `<> </>`. 
> Tip: to quickly wrap a body of code, go to view > command palette OR [shift + cmd + P]. Search for wrap with abbreviation. Select it, then type in the element you want to use to wrap the selected body of code in (e.g. `<div>`)

<br>

## Conditional Rendering
```
const App = () => {
  const name = "Snoopy"
  const isDay = false

  return (
    <div className ="App">
      <h1>Hello, {name} </h1>
      {isDay ? (
        <>
          Good Morning!
        </>
      ) : (
        <>
        Good Night!
        </>
      )}
    </div>
  )
}
```
> This code displays "Good Morning" if const isDay is set true and "Good Night" if isday is set false.
> Basic breakdown of if/else statement: `{ statement ? ( run-if-true ) : ( run-else ) }`

<br>

## Props

```
const Person = (props) => {
  return (
    <>
      <h1> Name: {props.name}</h1>
      <h2> Last Name: Brown </h2>
      <h2> Age: {props.age} </h2>
    </>
  )
}

const App = () => {

  return (
    <div className ="App">
      <Person name={'Charlie'} age={'2'}/>
      <Person name={'Snoopy'} age={'13'}/>
      <Person />
    </div>
  )
}
```
> Props are used to pass immutable data to components.

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
Find it in main.tsx file (or equivalent). It is a built-in component in React that does not have visual representation. Used to identify potential problems.
Typically encapsules an <App /> component, which is the root component that organizes all other components in the React app.

