const mobNav = ()=>{
    const headerButton = document.querySelector('.menu__bars');
const mobNav =  document.querySelector('.mob-nav-menu');

let isMobNavOpen = false;
console.log(isMobNavOpen);

headerButton.addEventListener('click', ()=>{
    isMobNavOpen=!isMobNavOpen;
    if (isMobNavOpen) {mobNav.style.display = 'flex';}
    else {mobNav.style.display = 'none';}
    console.log(isMobNavOpen);   
});
}

export default mobNav;