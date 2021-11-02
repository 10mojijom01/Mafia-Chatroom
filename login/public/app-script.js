 const container = document.querySelector(".App")
 const sign_in_btn = document.getElementById("sign-in-btn")
 const sign_up_btn = document.getElementById("sign-up-btn")

 sign_up_btn.addEventListener('click', (e)=>{
     container.classList.add("sign-up-mode")
     console.log(e.target)
 })


 sign_in_btn.addEventListener('click', (e)=>{
     container.classList.remove("sign-up-mode")
     console.log(e.target)
 })