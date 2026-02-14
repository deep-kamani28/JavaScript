const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData=>{
    setTimeout(()=>{
      console.log(posData);
    },2000)
  }, error=>{
    console.log(error)
  });
  setTimeout(()=>{console.log('Timer done!!');})
  console.log('Getting Position...');
}

button.addEventListener('click', trackUserHandler);