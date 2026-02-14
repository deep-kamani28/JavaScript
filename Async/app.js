const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition=opts=>{
  const promise=new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(
      success=>{
        resolve(success);
      },
      error=>{

      },opts
    );
  });
  return promise;
}

const setTimer=(duration)=>{
  const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;

  getPosition().then(posData=>{
    positionData=posData;
    return setTimer(2000);
  }).then(data=>{
    console.log(data,positionData);
  });

  setTimer(0).then(data=>{
    console.log(data,'timer done!');
  });

  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);