const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pagetitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pagetitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pagetitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};
exports.postAddHome = async (req, res, next) => {
  try {
    const { houseName, price, location, rating, imageUrl, description } = req.body;

    const home = new Home(
      houseName,
      price,
      location,
      rating,
      imageUrl,
      description
    );

    await home.save();
    res.redirect("host/host-home-list");
  } catch (err) {
    console.error("ADD HOME ERROR 👉", err);
    res.status(500).send("Database error");
  }
};


exports.postEditHome = async (req, res, next) => {
  try {
    const { id, houseName, price, location, rating, imageUrl, description } = req.body;

    const home = new Home(
      houseName,
      price,
      location,
      rating,
      imageUrl,
      description,
      id
    );

    await home.save();
    res.redirect("host/host-home-list");
  } catch (err) {
    console.error("EDIT HOME ERROR 👉", err);
    res.status(500).send("Database error");
  }
  res.redirect("host/host-home-list");
  
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId).then(()=>{
    res.redirect("host/host-home-list");
  }).catch(error => {
    console.log("Error while detecting",error)
  })
};