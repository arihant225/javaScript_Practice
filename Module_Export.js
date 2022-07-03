const fun=()=>
{
console.log('my first Module')
}

function greet(name)
{
console.log('hey ',name,'How are you')
}

module.exports={
    greet:greet,
    fun:fun
}