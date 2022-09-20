const express = require("express");
const router = express.Router();
const User = require("./user.model");
const multer = require("multer");

// Get the user with its object list
/*const verify = (req, res, next) => {
  let refreshToken = req.header("x-refresh-token");
  let _id = req.header("_id");
  User.findByIdAndToken(_id, refreshToken)
    .then((user) => {
      if (!user) {
        return Promise.reject({
          error: "USER NOT FOUND with :" + refreshToken + " \n " + _id,
        });
      } 
      // If this code is reach, the user was found therefor the session is valid
      req.userObject = user;
      req.refreshToken = refreshToken;
      let isSessionValid = false;
      user.session.forEach((session) => {
        if (User.hasRefreshTokenExpired(session.expireAt) === false) {
          isSessionValid = true;
        }
      });
      if (isSessionValid) {
        console.log("session still valid")
        next();
      } else {
        console.log("session not valid anymore")
        return Promise.reject({
          error: "The session token has expired or is invalid",
        });
      }
    })
    .catch((e) => {
      res.status(401).send(e);
    });
};*/

const noObjectIdDuplicate = (req, res, next) => {


  
}


characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
   let result = ' ';
   const charactersLength = this.characters.length;
   for ( let i = 0; i < length; i++ ) {
       result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   return result;
} 

 let add = router.post("/object/add", (req, res) => {
  let object= req.body
  console.log("Object = "+ JSON.stringify(object))
  let code = generateString(10)
      User.updateOne(
        { id: object.ownerId },
        { $push: { possesions: {ownerId:object.ownerId,lost:object.lost,name:object.name,code:code,image:object.image}} }
      ).then(() => {
        return res.send("OK").status(200);
      }).catch((e) => {return res.send(e)}) ;
  });


  let get = router.get("/object", (req, res) => {
  
    let userId = req.headers._id
   let objList = []
    User.find(
      { _id: userId }, ).then((user) => {
        user.forEach((object => objList.push(object.possesions)))
      return res.send(objList).status(200);
    }); 

});

  module.exports = router;