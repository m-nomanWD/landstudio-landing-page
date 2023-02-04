const linksContainer = document.querySelector('.links-container')
const hamburger = document.querySelector('.hamburger')
const closer = document.querySelector('.closer')
hamburger.addEventListener('click', ()=>{
    linksContainer.classList.add('sidebar-show')
})
closer.addEventListener('click', ()=>{
    linksContainer.classList.remove('sidebar-show')
})