
var links = document.querySelectorAll('a');

links.forEach((link)=>{
    link.addEventListener('click', (e)=>{

        e.preventDefault();

        history.pushState(null, '', e.target.innerHTML);
    })
})