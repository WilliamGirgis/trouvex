const mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://test:Samsam123@cluster0.pcin2.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {

  });

  
  const ObjectIdListSchema = new mongoose.Schema({
    id: [{
      type: String,
      required: true,
      minLength: 10,
      maxLength: 10,
      trim: true,
      unique: true,
    }]
  });

   ObjectIdListSchema.methods.add = function () {


   }

  router.post("/objectList", (req, res) => {
    let id = req.query.id
    let newObjectId = new ObjectList(id);
    newUser
      .save()
  });


const ObjectList = mongoose.model("ObjectList", ObjectIdListSchema);
module.exports = ObjectList;