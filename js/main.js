const ham = document.querySelector('.ham');
const headerLinks = document.querySelectorAll('.header-link');
const header = document.querySelector('header');
const hambar2 = document.querySelector('.ham-bar2');

let isHamOpen = false;

const hamToggle = (e) => {
    if(isHamOpen){
        header.classList.remove('header-open');
        headerLinks.forEach(link => link.classList.remove('header-link-open'));
        hambar2.classList.remove('ham-bar2-open');
        isHamOpen = false;
    }else{
        header.classList.add('header-open');
        headerLinks.forEach(link => link.classList.add('header-link-open'));
        hambar2.classList.add('ham-bar2-open');
        isHamOpen = true;
    }
}

window.onload = function(){
    document.querySelector('.loader').style.display = 'none';
}

ham.addEventListener('click',hamToggle);