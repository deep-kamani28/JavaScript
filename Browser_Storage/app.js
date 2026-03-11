const storeBtn=document.getElementById('store-btn');
const retrieveBtn=document.getElementById('retrieve-btn');

const dbRequest=indexedDB.open('DummyStorage',1);

let db;

dbRequest.onsuccess=function(event){
    db=event.target.result;
};

dbRequest.onupgradeneeded=function(event){
    db=event.target.result;

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
    const productStore=db.transaction('products','readwrite').objectStore('products');
    productStore.add({
        id:'p2',
        title:'Second Product',
        price:100000,
        tags:['Luxury','Expensive']
    });
});

retrieveBtn.addEventListener('click',()=>{
    const productStore=db.transaction('products','readwrite').objectStore('products');
    const retrieve=productStore.get('p2');
    retrieve.onsuccess=function(){
        console.log(retrieve.result);
    };
});