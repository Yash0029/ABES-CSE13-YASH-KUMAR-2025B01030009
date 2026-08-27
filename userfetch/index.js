const conatainer=document.getElementById("container")

console.log(container);

const button=document.getElementById("btn");
console.log(button);
const h2=document.getElementById('data');
const loader=document.getElementById('loader');
async function fetchData(){
    try{
        loader.innerHTML='fetching data..'
    const serverData=await fetch('https://fakestoreapi.com/products')
       const JSONData=await serverData.json();  

       // console.log(JSONData[0].title)
    h2.innerHTML=(JSONData[1].title);
    }catch(e){
        console.log("Error is:"+e)
        loader.innerHTML='Error is'+e;
    }
    finally{
   loader.innerHTML='';
    }
}
button.addEventListener("click",fetchData);