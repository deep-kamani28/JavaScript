// const listElement=document.querySelector('.posts');
// const postTemplate=document.getElementById('single-post');

// function sendHttpRequest(method,url){
//     const promise=new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();

//         xhr.open(method,url);

//         xhr.responseType='json';

//         xhr.onload=function (){
//             resolve(xhr.response);
//             // const listOfPost=JSON.parse(xhr.response);
            
//         }
//         xhr.send();
//     });
//     return promise;
// }

// function fetchPost(){
//     sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts').then(
//         responseData=>{
//             const listOfPost=responseData;
//             for(const post of listOfPost){
//                 const postEl=document.importNode(postTemplate.content,true);
//                 postEl.querySelector('h2').textContent=post.title.toUpperCase();
//                 postEl.querySelector('p').textContent=post.body;
//                 listElement.append(postEl);
//             }
            
//         }
//     );
// }

// fetchPost();

const listElement=document.querySelector('.posts');
const postTemplate=document.getElementById('single-post');
const form=document.querySelector('#new-post form');
const fetchButton=document.querySelector('#available-posts button');
const postList=document.querySelector('ul');

function sendHttpRequest(method,url,data){
    // const promise=new Promise((resolve,reject)=>{

    //     const xhr=new XMLHttpRequest();

    //     xhr.setRequestHeader('Content-Type','application/json');

    //     xhr.open(method,url);

    //     xhr.responseType='json';

    //     xhr.onload=function (){
    //         if(xhr.status >= 200 && xhr.status<300){
    //             resolve(xhr.response);
    //         }else{
    //             reject(new Error('Something went wrong !'));
    //         }
    //     }

    //     xhr.onerror=function(){
    //         reject(new Error('Failed to send request'));
    //     }
    //     xhr.send(JSON.stringify(data));
    // });
    // return promise;

    return fetch(url,{
        method:method,
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>{
        if(response.status>=200 && response.status<300){
            return response.json();
        }else{
            throw new Error('Somthing went wrong - server-side.');
        }
    }).catch(error=>{
        console.log(error);
        throw new Error('Somthing went wrong!');
    });
}

async function fetchPost(){
    try{
        const responseData=await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/pos');
        const listOfPost=responseData;
        for(const post of listOfPost){
            const postEl=document.importNode(postTemplate.content,true);
            postEl.querySelector('h2').textContent=post.title.toUpperCase();
            postEl.querySelector('p').textContent=post.body;
            postEl.querySelector('li').id=post.id;
            listElement.append(postEl);
        }
    }catch(err){
        alert(err.message);
    }
    
}

async function createPost(title,content) {
    const UserId=Math.random();
    const post={
        title:title,
        body:content,
        userId:UserId
    };
    sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts',post);
    fetchPost();
}

fetchButton.addEventListener('click',fetchPost);
form.addEventListener('submit',event=>{
    event.preventDefault();
    const enteredTitle=event.currentTarget.querySelector('#title');
    const enteredContent=event.currentTarget.querySelector('#content');

    createPost(enteredTitle,enteredContent);
});

postList.addEventListener('click', event=>{
    if(event.target.tagName==='BUTTON'){
        const postId=event.target.closest('li').id;
        sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})