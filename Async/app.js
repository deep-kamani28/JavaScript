const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer=(duration)=>{
  const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData=>{
    setTimer(2000).then(data=>{
      console.log(data,posData);
    });
  }, error=>{
    console.log(error)
  });
  setTimer(1000).then(data=>{
    console.log(data,'timer done!');
  });
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);