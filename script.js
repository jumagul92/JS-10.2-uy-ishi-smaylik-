const eyeLeft = document.querySelector('.eye_left'); 
// console.log(eyeLeft);

const eyeIns = document.querySelectorAll('.eye_in');
const smile = document.querySelector('.smile');
// console.log(smile.offsetLeft);

window.addEventListener('mousemove', (e)=>{
// console.log(eyeLeft.clientHeight);
let y = eyeLeft.offsetTop
let x = smile.offsetLeft
// console.log(window.innerHeight);
// console.log(y);
// console.log(e.pageY);
eyeIns.forEach(el=>{
    if (e.pageY<y) {
           el.style.transform = `translateY(${-y/6}px)` 
           el.style.transition = '0.5s'
        }
    if(e.pageY>y && e.pageX<x){
         el.style.transform = `translate(${-x/15}px, ${y/12}px)` 
            el.style.transition = '0.5s'
            
        }
    if(e.pageY>y && e.pageX>x+smile.clientWidth){
            el.style.transform = `translate(${x/15}px, ${y/12}px)` 
               el.style.transition = '0.5s'  
           }
    /* if(e.pageY>y){
            el.style.transform = `translateY(${y/12}px)` 
               el.style.transition = '0.5s'
    
    } */
})

})




/* if (e.pageY<y) {
    
    eyeIns.forEach(el=>{
        // console.log(el);
       el.style.transform = `translateY(${-y/6}px)` 
       el.style.transition = '0.5s'
    })
 } else if(e.pageY>y){
    eyeIns.forEach(el=>{
     el.style.transform = `translate(${-x/15}px, ${y/12}px)` 
        el.style.transition = '0.5s'
        
    })
} else if(e.pageX>x+smile.clientWidth){
    // console.log(el.offsetLeft);
    eyeIns.forEach(el=>{
        el.style.transform = `translate(${x/15}px, ${y/12}px)` 
       el.style.transition = '0.5s'
    })
}

// console.log(e.pageX);
// console.log(x);

console.log(smile.offsetLeft);
console.log(smile.offsetRight);







})

img.forEach((el)=>{
    let dataSpeed = el.getAttribute('data-speed')
    let x = (window.innerWidth-e.pageX*dataSpeed)/40;
    let y = (window.innerHeight-e.pageY*dataSpeed)/20;
    el.style.transform = `translate(${x}px, ${y}px)`
}) */