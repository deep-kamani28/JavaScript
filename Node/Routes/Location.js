const express=require('express');

const router=express.Router();

const locationStorage={
    location:[]
};


router.post('add-location',(req,res,next)=>{
    const id=Math.random();
    locationStorage.location.push({id:id,address:req.body.address,coords:{lat:req.body.lat,lng:req.body.lng}});
    res.json({message:'Stored location!',locId:id});
});

router.get('/Location/:lid',(req,res,next)=>{
    const locationId=+req.params.lid;
    const location=locationStorage.location.find(loc=>{
        return loc.id===locationId;
    });
    if(!location){
        res.status(404).json({message:'Not found'});
    }
    res.json({address:location.address,coords:location.coords});
});

module.exports=router;