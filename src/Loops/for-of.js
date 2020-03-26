const forOf=()=>{
    console.log('----------------------- for of ------------------------');

    // for-of  loopp makes easy to itrate array or object,
    // because he return the value on each itration

    //Example 1 :Itrate Array using for-of loop
    //we have the following array
    let array=['1','2','3']
    // for-of loop give us all values one by one
    //no need to dealing through index 
    for (let value in array)
    {
        console.log(value)
    }
    //Example 2 : Itrate Object
    //we can itrate on object usiing for of , but we can't play with keys of object
    let ob={
        name:'Athar',
        age:20
    }
    for (let value in ob)
    {
        console.log(value)
    }

    //# Conclusion
    //for-of is best to work with array or string 
}
export default forOf;