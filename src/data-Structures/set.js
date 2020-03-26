let setFunc=()=>{
      /*-----------------------------------   Set  --------------------------------------
        -> A Set is a special type collection.
        -> It is a array like data structure.
        -> it's allows you to create a collection of unique values(each value can occur only once).
    */
        //-> new Set() – creates the set, and if an iterable object is provided 
        //   (usually an array), copies values from it into the set.
        let set = new Set();

        let john = { name: "John" };
        let pete = { name: "Pete" };
        let mary = { name: "Mary" };

        // visits, some users come multiple times
        set.add(john);
        set.add(pete);
        set.add(mary);
        set.add(john);
        set.add(mary);
        //Itration on set data structure
        for (let user of set) {
            console.log(user.name)
        }

        //Default methods provided with sets data structure
        //-> set.add(value) – adds a value, returns the set itself.
        console.log("Value added")
        console.log( set.add(john)) 
        //-> set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
        console.log("delete value")
        console.log(set.delete(mary))
        // -> set.has(value) – returns true if the value exists in the set, otherwise false.
        console.log('It has ?')
        console.log( set.has(john))
        //set.size – is the elements count.
        console.log('Size of the set')
        console.log(set.size)
        //set.clear() – removes everything from the set.
        console.log('Clear the set')
        set.clear()
        console.log(set)
}
export default setFunc;