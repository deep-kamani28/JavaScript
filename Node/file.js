const fs=require('fs');

fs.readFile('User.txt',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(data.toString());
    }
});

fs.writeFile('User.txt','UserName=Deep',err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Wrote to file.');
    }
});