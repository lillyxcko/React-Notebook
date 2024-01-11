## Table of Contents

<h5>Concepts:</h5> 

[MappingComponents](#MappingComponents)  |   [className](#className)   |  


:turtle: :herb: :golf: :seedling: :melon: :dragon:

<br>

## Mapping Components
- use JavaScript array mapping method to render components efficently 

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
<br>
