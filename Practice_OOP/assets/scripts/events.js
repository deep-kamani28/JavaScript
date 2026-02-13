const buttons=document.querySelectorAll('button');

const buttonClickHandler = event => {
    event.target.disabled=true;
    console.log(event);
};

// button.addEventListener('click',buttonClickHandler);

// setTimeout(()=>{
//     button.removeEventListener('click',buttonClickHandler);
// }, 2000);

// buttons.forEach(btn=>btn.addEventListener('click',buttonClickHandler));

const form=document.querySelector('form');
form.addEventListener('click',event=>{
    event.preventDefault();
    console.log(event);
});