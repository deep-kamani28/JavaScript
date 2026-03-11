const storeBtn=document.getElementById('store-btn');
const retrieveBtn=document.getElementById('retrieve-btn');

const dbRequest=indexedDB.open('DummyStorage',1);

dbRequest.onupgradeneeded=function(event){
    const db=event.target.result;

    const objStore=db.createObjectStore('products', {keyPath:'id'});

    objStore.transaction.oncomplete=function(event){
        const productStore=db.transaction('products','readwrite').objectStore('products');
        productStore.add({
            id:'p1',
            title:'First Product',
            price:10000,
            tags:['Luxury','Expensive']
        });
    };
};

dbRequest.onerror=function(event){
    console.log('Error!');
};

storeBtn.addEventListener('click',()=>{
    
});

retrieveBtn.addEventListener('click',()=>{
    
});