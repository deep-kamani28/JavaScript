const storeBtn=document.getElementById('store-btn');
const retrieveBt=document.getElementById('retrieve-btn');

const userId='123';

const user={
    name:'A',
    age:'20',
    hobbies:['cricket', 'movie']
};

storeBtn.addEventListener('click',()=>{
    sessionStorage.setItem('uid',userId);   // when we close the tab session storage gets clear.
    localStorage.setItem('user',JSON.stringify(user));  // local storage does not get clear untill we clear it manuall or browser clear it due to full storage.
});

retrieveBt.addEventListener('click',()=>{
    const retrievedId=localStorage.getItem('uid');
    const retrieveduser=JSON.parse(localStorage.getItem('user'));

    console.log('Retrieved user - ', retrieveduser);
    console.log('Retrieved Id - ', retrievedId);
});