const mongoose = require("mongoose");

const configure = () => {
  mongoose
    .connect("mongodb+srv://roshni:kYRWodE9eC4rUtR6@cluster0.qv20t.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error conenction with db", err);
    });
};

module.exports = configure;