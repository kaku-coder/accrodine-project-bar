let accodineitem=document.querySelectorAll('.accordine-item')
// let accodinecontentbox=document.querySelectorAll(".accodine-content")
 
 

accodineitem.forEach(item=>{
    const titel=document.querySelector(".accordine-tite")
    const content=document.querySelector(".accodine-content")

    item.addEventListener("click",function(){
         for(var i=0 ;i < accodineitem.length ; i++){
             if(accodineitem[i] != item){
                accodineitem[i].classList.remove("active")
                }else{
                item.classList.toggle("active");
            }
         }
       
    })
})