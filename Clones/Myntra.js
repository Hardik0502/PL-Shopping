// const bar = document.querySelector('#bar');
// const nav = document.querySelector('#nav');
const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
