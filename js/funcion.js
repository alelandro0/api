

const getData=async(URL)=>{
   await fetch(URL)
   .then(res=>res.json())
   .then(data=> data)
}
const showInfo= async()=>{
    let data1= await getData()
    let data2= await getData()
    console.log();
    
}
window.addEventListener('DOMContentLoaded',async()=>{
    let productos= await getData(getproduct)
    productos.array.forEach(product => {
        const itemP=document.createElement('li')
        itemP.textContent=product.title
        ul.appen
    });
})