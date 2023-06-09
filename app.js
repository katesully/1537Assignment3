

const express = require('express');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.use(express.static("public"));

// //connecting to our MongoDB Atlas cluster...
// mongoose.connect("mongodb://0.0.0.0:27017/journalDB");



// app.get("/", function(req, res){
//   res.send("Hello");
// });

// app.listen(3000, function(){
//   console.log("Server started on port 3000.");
// });





// const express = require('express');

// const app = express();

const unicornSchema = new mongoose.Schema({
});

const unicornModel = mongoose.model('unicorns', unicornSchema);

app.post('/search', async function (req, res) {
  console.log(req.body);

  // NAME SEARCH
  if (req.body.type === "nameSearch") {
 
    if (req.body.name) 
      selectionArgument = {
        name: req.body.name,
       }
    var projectionArgument = {}
    if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == false) {
      projectionArgument = { "name": 1, "_id": 0 }
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    } else if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == true) {
      projectionArgument = { "name": 1, "weight": 1, "_id": 0 }
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == true) {
      projectionArgument = { "weight": 1, "_id": 0 }
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == false) {
      projectionArgument = {}
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    }
  }

  // WEIGHT SEARCH

  else if (req.body.type === "weightSearch") {
    if (req.body.weightmin && req.body.weightmax) {
      selectionArgument = { $and: [{ "weight": { $gte: Number(req.body.weightmin) } }, { "weight": { $lte: Number(req.body.weightmax) } }] }
    }
    var projectionArgument = {};
    if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == false) {
      projectionArgument = { "name": 1, "_id": 0 }
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    } else if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == true) {
      projectionArgument = { "name": 1, "weight": 1, "_id": 0 }
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == true) {
      projectionArgument = { "weight": 1, "_id": 0 }
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == false) {
      projectionArgument = {}
      const result = await unicornModel.find(selectionArgument, projectionArgument);
      res.json(result);
    }
  }




  // /// Search by food

  else if (req.body.type === "foodSearch") {
    if (req.body.yesApple == true && req.body.yesCarrot == true) {
      selectionArgument = {
        $and: [
          { loves: { $in: ["apple"] } },
          { loves: { $in: ["carrot"] } }
        ]
    };
      var projectionArgument = {};
      if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == false) {
        projectionArgument = { "name": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == true) {
        projectionArgument = { "name": 1, "weight": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == true) {
        projectionArgument = { "weight": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == false) {
        projectionArgument = {}
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      }
    }
     else if (req.body.yesApple == true && req.body.yesCarrot == false) {
        selectionArgument = {
            loves: { $in: ["apple"] }        
      };
    //  else if (req.body.yesApple == true && req.body.yesCarrot == false) {
    //   selectionArgument = {
    //     $and: [
    //       { loves: { $in: ["apple"] } },
    //       { loves: { $in: ["apple"] } }
    //     ]
    // }};
      var projectionArgument = {};
      if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == false) {
        projectionArgument = { "name": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == true) {
        projectionArgument = { "name": 1, "weight": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == true) {
        projectionArgument = { "weight": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      // } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == false) {
      //   projectionArgument = {}
      //   const result = await unicornModel.find(selectionArgument, projectionArgument);
      //   res.json(result);
      //   return
      }}
     else if (req.body.yesApple == false && req.body.yesCarrot == true) {
      selectionArgument = {
        loves: { $in: ["carrot"] }
    };
      var projectionArgument = {};
      if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == false) {
        projectionArgument = { "name": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == true) {
        projectionArgument = { "name": 1, "weight": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == true) {
        projectionArgument = { "weight": 1, "_id": 0 }
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
      } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == false) {
        projectionArgument = {}
        const result = await unicornModel.find(selectionArgument, projectionArgument);
        res.json(result);
        return
      }}}})
    
    // } else if (req.body.projectionfilters.yesApple == false && req.body.pprojectionfilters.yesCarrot == false) {
    //   selectionArgument = {
    //     weight: { $gte: 0 }
    // };
    //   var projectionArgument = {};
    //   if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == false) {
    //     projectionArgument = { "name": 1, "_id": 0 }
    //     const result = await unicornModel.find(selectionArgument, projectionArgument);
    //     // res.json(result);
    //   } else if (req.body.projectionfilters.name == true && req.body.projectionfilters.weight == true) {
    //     projectionArgument = { "name": 1, "weight": 1, "_id": 0 }
    //     const result = await unicornModel.find(selectionArgument, projectionArgument);
    //     res.json(result);
    //   } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == true) {
    //     projectionArgument = { "weight": 1, "_id": 0 }
    //     const result = await unicornModel.find(selectionArgument, projectionArgument);
    //     res.json(result);
    //   } else if (req.body.projectionfilters.name == false && req.body.projectionfilters.weight == false) {
    //     projectionArgument = {}
    //     const result = await unicornModel.find(selectionArgument, projectionArgument);
    //     res.json(result);
    //   }
    // }


    // const result = await unicornModel.find(selectionArgument, projectionArgument);
    // res.json(result);
  



// app.get()('/search', (req, res) => {
//   res.send('Hello World');
// });



module.exports = app;



