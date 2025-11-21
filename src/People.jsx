function People() {
    const people = [
        {name: "Belle", age: 13},
        {name: "Chloe", age: 11},
        {name: "Sage", age: 6}
    ];


    /*return (
        <>
          {people.map(person => {
            return (<>
              <h1>{person.name}</h1>
              <p>Age: {person.age}</p>
            </>)
          })}  
        </>
    )
} */

/* Above is how it was initially written out with return and curly braces.  
However, for JSX, it is cleaner/more readable to separate the logic 
from the return statement. */

const peopleCards = people.map((person) => {
    return (
        <>
            <h1>{person.name}</h1>
            <p>{person.age}</p>
        </>
    );

});

return <>{peopleCards}</>;

}



export default People;