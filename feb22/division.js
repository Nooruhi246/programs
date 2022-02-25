const division = (a,b) =>{
    if(b === 0 || (typeof(a)!=="number" || typeof(b)!== "number")){
        return "invalid"
    }
    return a/b;
}

module.exports ={division}
