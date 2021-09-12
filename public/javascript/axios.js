
const addtocart = document.querySelectorAll('.button_card')
const counter = document.querySelector('#countermsg')
function updatecart(item) {

    axios.post("/updatecart",item).then(res=>{
    
        counter.innerHTML=res.data.totalqty;


    
    })

   
}



addtocart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       let item = JSON.parse(btn.dataset.food)
       console.log(item)
       updatecart(item);
       
    })

   
    
})

