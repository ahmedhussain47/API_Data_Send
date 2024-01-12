const btn = document.querySelector("#btn")

btn.addEventListener("click",function(event){
   
//    console.log("adfd") 
   event.preventDefault();


    fetch("dataa.txt")
    .then((data)=>data.text())
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>console.error("error",error))
})