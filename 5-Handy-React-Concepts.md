## Table of Contents

<h5>Concepts:</h5> 

[MappingComponents](#MappingComponents)  |   [className](#className)   |  


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
        return <Joke setup={joke.setup} punchline={joke.punchline} />
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
