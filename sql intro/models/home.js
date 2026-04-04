const  db = require("../utils/databaseUtil");
const { deleteById } = require("./favourite");

module.exports = class Home{
    constructor(houseName,price,location,rating,imageUrl,description,id){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.description = description;
        this.id = id;
    }
save() {
  return db.execute(
    `INSERT INTO homes 
    (houseName, price, location, rating, imageUrl, description)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      this.houseName,
      this.price,
      this.location,
      this.rating,
      this.imageUrl,
      this.description
    ]
  );
}

//return the list
static fetchAll(){
    return db.execute('SELECT * FROM homes')
}

static findById(homeId){
  return db.execute('SELECT * FROM homes WHERE id = ?',[
    homeId
  ])

}
static deleteById(homeId){
  return db.execute('DELETE * FROM homes WHERE id = ?',[
    homeId
  ])
}

  
}
