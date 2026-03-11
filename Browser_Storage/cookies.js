const storeBtn=document.getElementById('store-btn');
const retrieveBt=document.getElementById('retrieve-btn');

storeBtn.addEventListener('click',()=>{
    const userId='123';
    const user={name:'A', age:20};
    document.cookie=`uid=${userId} max-age=60`;
    document.cookie=`user=${JSON.stringify(user)}`;
});

retrieveBt.addEventListener('click',()=>{
    const cookieData=document.cookie.split(';');
    const data=cookieData.map(i=>{
        return i.trim();
    });
    console.log(data);
});