import {Modal} from './UI/Modal.js';
import {Map} from './UI/Map.js';
import {getcoordfromAddress, getAddressFromCoords} from './Utility/Location.js';

class PlaceFinder{
    constructor(){
        const addressForm=document.querySelector('form');
        const locateUsreBtn=document.getElementById('locate-btn');
        this.shareBtn=document.getElementById('share-btn');
        
        locateUsreBtn.addEventListener('click', this.locateUserHandler.bind(this));
        this.shareBtn.addEventListener('click',this.sharePlaceHandler);
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    }

    sharePlaceHandler(){
        const shareLinkInputEl=document.getElementById('share-link');
        shareLinkInputEl.select();
        if(!navigator.clipboard){
            alert('Your browser does not support this feature.');
        }
        navigator.clipboard.writeText(shareLinkInputEl).then(()=>{
            alert('Copied to clipboard!');
        }).catch(err=>{
            console.log(err);
        });

    }

    selectPlace(coordinates,address){
        if(this.map){
            this.map.render(coordinates);
        }else{
            this.map=new Map(coordinates);
        }

        fetch('http://localhost:3000/add-location',{
            method:'POST',
            body:JSON.stringify({
                address:address,
                lat:coordinates.lat,
                lng:coordinates.lng
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>{
            if(response.status===404){
                throw new Error('Could not find location');
            }
            response.json();
        }).then(data=>{
            const locationId=data.locId;
            this.shareBtn.disabled=false;
            const shareLinkInputEl=document.getElementById('share-link');
            shareLinkInputEl.value=`${location.origin}/my-place?location=${locationId}`;
        }).catch(err=>{
            alert(err.message);
        });

        
    }

    locateUserHandler(){
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