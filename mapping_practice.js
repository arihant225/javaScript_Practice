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
