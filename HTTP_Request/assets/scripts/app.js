const listElement=document.querySelector('.posts');
const postTemplate=document.getElementById('single-post');

function sendHttpRequest(method,url){
    const promise=new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();

        xhr.open(method,url);

        xhr.responseType='json';

        xhr.onload=function (){
            resolve(xhr.response);
            // const listOfPost=JSON.parse(xhr.response);
            
        }
        xhr.send();
    });
    return promise;
}

function fetchPost(){
    sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts').then(
        responseData=>{
            const listOfPost=responseData;
            for(const post of listOfPost){
                const postEl=document.importNode(postTemplate.content,true);
                postEl.querySelector('h2').textContent=post.title.toUpperCase();
                postEl.querySelector('p').textContent=post.body;
                listElement.append(postEl);
            }
            
        }
    );
}

fetchPost();