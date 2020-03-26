const callback=()=>{
    console.log('-------------------    CallBack    ------------------------');
    /*---------------------------------Introducction----------------------------------------
        -> A callback is a function that is to be executed after another function has finished executing.
        -> We passed callback function as an argument to another function that is called high-order function.
        -> Most of the time we are creating programs and applications that operate in a synchronous manner.
    */
        //setTimeout is highorder function
        // Arrow function is ccallback funcction
        setTimeout(()=>
        {
           console.log('I am from callback start')
        },5000);
           console.log('I am from callback end !')
        
        //Its a simple example of asynchronus javasccript
        
}
export default callback;