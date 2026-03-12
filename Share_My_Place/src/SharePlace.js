class PlaceFinder{
    constructor(){
        const addressForm=document.querySelector('form');
        const locateUsreBtn=document.querySelector('locate-btn');

        locateUsreBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    locateUserHandler(){
        if(!navigator.geolocation){
            alert('Location feature is not available in your browser.');
            return;
        }
        navigator.geolocation.getCurrentPosition(successResult=>{
            const coordinate={
                lat:successResult.coords.latitude,
                lng:successResult.coords.longitude
            };
            console.log(coordinate);
        },error=>{
            alert('Could not locate you.');
        });
    }

    findAddressHandler(){

    }
}

new PlaceFinder();