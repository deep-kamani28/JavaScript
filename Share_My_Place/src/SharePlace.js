import {Modal} from './UI/Modal.js';
import {Map} from './UI/Map.js';
import {getcoordfromAddress, getAddressFromCoords} from './Utility/Location.js';

class PlaceFinder{
    constructor(){
        const addressForm=document.querySelector('form');
        const locateUsreBtn=document.getElementById('locate-btn');
        
        locateUsreBtn.addEventListener('click', this.locateUserHandler.bind(this));
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    }

    selectPlace(coordinates,address){
        if(this.map){
            this.map.render(coordinates);
        }else{
            this.map=new Map(coordinates);
        }
        
        
    }

    async locateUserHandler(){
        if(!navigator.geolocation){
            alert('Location feature is not available in your browser.');
            return;
        }

        const modal=new Modal('loading-modal-content',"Getting your location - Please wait");
        modal.show();
        navigator.geolocation.getCurrentPosition(async successResult=>{
            
            const coordinate={
                lat:successResult.coords.latitude,
                lng:successResult.coords.longitude
            };
            const address=await getAddressFromCoords(coordinate);
            modal.hide();
            // console.log(coordinate);
            this.selectPlace(coordinate,address);
        },error=>{
            modal.hide();
            alert('Could not locate you.');
        });
    }

    async findAddressHandler(event){
        event.preventDefault();
        const address=event.target.querySelector('input');
        if(!address || address.trim().length===0){
            alert('Invalid address');
            return;
        }

        const modal=new Modal('loading-modal-content',"Getting your location - Please wait");
        modal.show();
        try{
            const coordinates=await getcoordfromAddress(address);
            this.selectPlace(coordinates,address);
        }catch(err){
            alert(err.message);
        }
        modal.hide();
    }
}

new PlaceFinder();