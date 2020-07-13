const serverRoutes = require("./server");
const constructorMethod = app => { 

  app.use("/", serverRoutes);  
 
  app.use("*", (req, res) => {
    res.render("error");
  });
};

module.exports = constructorMethod;
