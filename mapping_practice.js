const sum=(a,b)=>{
return a+b
}


//maping
sum_to_do=[[1,2],[3,4],[5,6],[7,8],[9,10]]
sum_to_do.map(ele=>{
console.log(ele[0]+ele[1])
})

//sorting
console.log('ascending')
data=sum_to_do.sort((a,b)=>(a[0]>b[0]?1:-1))
console.log(data)
console.log('descending')
data=sum_to_do.sort((a,b)=>(a[0]>b[0]?-1:1))
console.log(data)


//string function

var string='arihant jain'

console.log(string.includes('rihan'))
console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(string.slice(3,7))


var dictionary={name:'arihant',city:'Gwalior',phone_no:'7024857237'}

console.log('getting dictionary')
console.log(dictionary)
console.log('getting_Number')
console.log(dictionary.phone_no)
console.log('updating_Number')
dictionary.phone_no='7899873677'
console.log(dictionary.phone_no)



//building triangles
var n=10
for(var i=0;i<=n;i++){
    arr=new Array()
    for (var j=i;j<=n;j++)
    {
    arr.push('*')
    }
    var result=arr.join('')
    console.log(result) 
}

var mobileno='70249857237'
console.log('your mobile number is       ',mobileno)
var tail=mobileno.slice(5,10)
// 
console.log(typeof tail) 
