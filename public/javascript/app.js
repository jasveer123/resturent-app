
import axios from 'axios';
const addtocart = document.querySelectorAll('.button_card')

function updatecart(item) {

    axios.post("/updatecart",item).then(res=>{
        console(res)
    })
}

addtocart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       const item = JSON.parse(btn.dataset.food)
       console.log(item)

    })

    updatecart(item);
    
})

