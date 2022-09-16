var arr = ['one','two','three']

var aKeys = Array.from(arr.keys())
var aValues = Array.from(arr.values())
var aEntries = Array.from(arr.entries())

console.log(aKeys)
console.log(aValues)
console.log(aEntries)

for(const[idx,elements] of arr.entries()){
    console.log(idx)
    console.log(elements)
}