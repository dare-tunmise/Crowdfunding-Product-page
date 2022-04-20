const open = document.querySelector('.firstbutton');
const modal = document.querySelector('.popup-wrapper');
const close = document.querySelector(".popup-close");

open.addEventListener('click', ()=>{
    modal.style.display ="block";
});

close.addEventListener('click', ()=>{
    modal.style.display ="none";
});

const pledges = document.querySelectorAll('.modalbtn');

for (let i = 0; i < pledges.length; i++) {
    let pledge = pledges[i];
    pledge.addEventListener('click', ()=>{
        modal.style.display= "block";
    }) 
}

// const callers = document.querySelectorAll('.term');

// console.log (callers)

// callers.forEach(function(caller){
//     const btn = caller.querySelector('.activator')
//     console.log(btn)
//     btn.addEventListener('click', ()=> {
//         callers.forEach(function(item) {
//             if (item !== caller) {
//                 item.classList.remove('unbox-text')
//             } 
//         })
//         caller.classList.toggle('unbox-text')
//     })
// });

const btns = document.querySelectorAll('.activator');

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener('click', e =>{
        const styl = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
        styl.classList.toggle('unbox-text');
        if ('unbox-text' === true){
            styl.style.borderColor = 'hsl(176, 50%, 47%)';  
        }
        
    })
}


const success = document.querySelector(".success-wrapper");
const submit = document.querySelector("#submit");
const clos = document.querySelector(".close-btn")

submit.addEventListener('click', () => {
    success.style.display = "block";
});

submit.addEventListener('click', () => {
    pledge.style.display = "none";
});

submit.addEventListener('click', () => {
    modal.style.display = "none";
});



clos.addEventListener('click', ()=>{
    success.style.display = "none";
});


let navMenu = document.querySelector(".nav"),
 toggleMenu = document.getElementById("toggle-menu"),
 closeMenu = document.getElementById("close-menu")


 console.log(toggleMenu)

 toggleMenu.addEventListener('click', ()=>{
     navMenu.classList.toggle('show');
     if (navMenu.classList.contains('show')){
         toggleMenu.src = "./images/icon-close-menu.svg"
     } else {
         toggleMenu.src = "./images/icon-hamburger.svg"
     }
 })

