console.log('hi')

const addtocart = document.querySelectorAll('.button_card')
console.log(addtocart)

addtocart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e)
    })
    
})