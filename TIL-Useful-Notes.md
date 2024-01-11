## Conditional Rendering
```
true && 'Snoopy'
> Snoopy

false && 'Snoopy'
> false
```
You can use this syntax to display information if something is true/false. 
It is a short and sweet alternative to 

`{ items.length === 0 ? <p> Nothing here. </p> : null }`

`{ items.length === 0 && <p> Nothing here. </p> }`

