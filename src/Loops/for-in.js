const forIn=()=>{
    // For in loopp makes easy to itrate object,
    // It return the keys in case of object an return index in case of array or string

    //Example 1 :Itrate Objet using forin loop
    //we have the following object
    let ob={
        name:'Athar',
        age:20
    }
    // For in loop give us all the keys one by one
    // and if we know about keys of the object we can itrate that object 
    for (let key in ob)
    {
        console.log(ob[key])
    }
    //Example 2 : Itrate String 
    //forIn behave with this string as array
    //It return index one by one and we can itrate on this string through index 
    let name="Athar laique";
    for (let index in name)
    {
        //get chracter
        let char=name[index]
        console.log(char)
    }
    //Working with array using forIn same as working with string
    //because forIn treat string as array

    //# Conclusion
    //Use forIn just to itrate Object not array or string.
    //Because in case of object we need to work with keys not index
}
export default forIn;