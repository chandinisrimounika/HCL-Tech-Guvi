function add(num){
    return new Promise((reslove,reject)=>{
        reslove(num+2)
    })
}
add(2).then(res=>{
    return res*2
}).then(res=>{
    console.log(res)
})