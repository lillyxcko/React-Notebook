## Table of Contents

<h5>Concepts:</h5> 

[MappingComponents](#MappingComponents)  |   [Pass: ObjectsAsProps](#pass-objects-as-props)   |   [Spread: ObjectsAsProps](#spread-objects-as-props)   |   


:ocean: :whale: :milky_way: :postbox: :gem: :oncoming_automobile:

<br>

## Mapping Components
- use JavaScript array map( ) method to render components efficently 

Documentation: [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Examples:
```
const nums = [1, 2, 3, 4, 5]
const squared = nums.map(nums => nums * nums);

==> console.log(squared) returns [1, 4, 9, 16, 25]

-----------------------------------------------------------------------------------------------

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

==> console.log(paragraphs) returns ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
```

Using map( ) in Components:
```
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
  
Alternative:
```
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
But this also means when you access the prop in the Component you will need to have: `{props.joke.setup}` instead of `{props.setup}`

<br>

### Spread Objects as Props
- especially if the object has multiple properties it can become arduous to list out each one in the map( ) function.
- this is a shortcut to listing each property out, but using a different method than passing objects as props.
  
Alternative:
```
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

