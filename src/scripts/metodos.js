const arr =['a','b','c','d','e','f','k'];


function newmap (array,callback){
    let novoarr =[]
    for (let i = 0; i < array.length; i++) {
        let resultcall= callback(array[i],i,array)
        novoarr.push(resultcall)
    }
    return novoarr
}
function callback(elemento) {
    return elemento + 2
}
console.log(newmap(arr,callback));





function newfilter(array,callback2) {
    let novoarrfilter =[]
    for (let i = 0; i < array.length; i++) {
    let result = callback2(array[i],i,array)
    if(result != undefined){
    novoarrfilter.push(result)        
    }
}
    return novoarrfilter
}
function callback2(elemento) {
    if (elemento ==='a'|| elemento === 'b') {
        return elemento        
    }
}  
console.log(newfilter(arr,callback2));





function newfind (array,callback3){
for (let i = 0; i < array.length; i++) {
   let result = callback3(array[i],i,array)
    if (result != undefined) {
       return result         
    }
    }
}
function callback3(elemento){
    if (elemento ==='c') {
        return elemento        
    }
}
console.log(newfind(arr,callback3))





function newreduce (array,callback4){
    let valorfinal= ''
    for (let i = 0; i < array.length; i++) {
        let valor= callback4(valorfinal,array[i],i,array)
        valorfinal=valor       
            }
            return valorfinal
}
function callback4(prev,elemento,indice,array){
    let acumulador = prev
   return acumulador+elemento
}
console.log(newreduce(arr,callback4));





function newincludes(array,elemento,index=0){
    if (index < 0) {
        index = array.length-(index*(-1))
    }
    for (let i = index; i < array.length; i++) {
        if (array[i] === elemento) {
            return true    
        }
            }
            return false
}
console.log(newincludes(arr,'f',-2));





function newindexof(array,elemento,index=0) {
    if (index < 0) {
        index = array.length-(index*(-1))        
    }
    for (let i = index; i < array.length; i++) {
        if (array[i] === elemento) {
            return i
        }
    }
    return -1
}
console.log(newindexof(arr,'c'));
