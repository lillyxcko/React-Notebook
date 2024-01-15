## Table of Contents :whale:

<h5>Concepts:</h5> 

[MappingComponents](#MappingComponents)  |   [Pass: ObjectsAsProps](#pass-objects-as-props)   |   [Spread: ObjectsAsProps](#spread-objects-as-props)   |   [Passing State Around](#passing-state-around)     |     [Dynamic Styles](#dynamic-styles)


<hr>
<br>

## Mapping Components
- use JavaScript array map( ) method to render components efficently 

Documentation: [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Examples:
```javascript
const nums = [1, 2, 3, 4, 5]
const squared = nums.map(nums => nums * nums);

// ==> console.log(squared) returns [1, 4, 9, 16, 25]

-----------------------------------------------------------------------------------------------

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

// ==> console.log(paragraphs) returns ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
```

Using map( ) in Components:
```javascript
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
```
> The above example reads from an array of objects in a "jokesData" file. The objects in the file have "setup" and "punchline" properities. 

> For each object in "jokesData", a new Joke component is created with the "setup" and "punchline" properties as props.

> The result of the map operation, which is an array of Joke components, is stored in the jokeElements variable.

<br>

### Pass Objects as Props
- especially if the object has multiple properties it can become arduous to list out each one in the map( ) function.
  
Example:
```javascript
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke
            joke={joke}

            //--instead of--//
            //setup={joke.setup}
            //punchline={joke.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
```
But this also means when you access the prop in the Component you will need to have: `{props.joke.setup}` instead of `{props.setup}`. 

<br>

### Spread Objects as Props
- especially if the object has multiple properties it can become arduous to list out each one in the map( ) function.
- this is a shortcut to listing each property out, but using a different method than passing objects as props.
  
Example:
```javascript
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke
            {...joke}

            //--instead of--//
            //setup={joke.setup}
            //punchline={joke.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
```
When accessing the prop in the Component you can access properties by: `{props.setup}` as usual. 

(`setup` here is a property name)

<br>

<hr>

## Passing State around
![image](https://github.com/lillyxcko/React-Notebook/assets/79551113/3465de04-abd0-4060-bbd6-3260c616427c)

> Data from a State can only been passed down to children components, not between siblings or uncle/aunt components.

> Therefore if you want to pass the state data to another component which does not have access to it, you need to raise the State into a component higher than it.

> Alt. React solutions: "Context", third party state management systems "Redux" 

<br>

<hr>

## Dynamic Styles
```javascript
    props.darkMode //boolean prop passed onto this component from index.js
    
    const styles = {
        backgroundColor: props.darkMode? '#222222' : '#cccccc'
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
```
> Here, we are dynamically changing the style of the box dependent on the prop boolean "darkMode"

> The `{ }` in the `style={style}` part represents a javascript section in the code.

> The `const styles = { }` is an object that reads css properities (but in the camel case javascript syntax)
