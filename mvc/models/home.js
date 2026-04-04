const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtil')
const { error } = require('console')



module.exports = class Home{
    constructor(houseName,location,pricePerNight,imageUrl,rating){
        this.houseName = houseName;
        this.location = location;
        this.pricePerNight = pricePerNight;
        this.imageUrl = imageUrl;
        this.rating = rating;
    }
save(){//save after fetching the previous
    Home.fetchAll((registeredHomes)=>{
          registeredHomes.push(this);
          //write in file
    const homeData = path.join(rootDir , 'data' ,'home.json')
    fs.writeFile(homeData , JSON.stringify(registeredHomes),error=>{
        console.log(error)
    })

    })
   
}
//return the list
static fetchAll(callback){
    const homeData = path.join(rootDir , 'data' , 'home.json')
    fs.readFile(homeData,(err,data)=>{
        console.log("file read : " , err,data);
        if(err){
             callback([]);
        }else{
            callback(JSON.parse(data))
        }
    })
}
}
