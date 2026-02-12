const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("Connection Successfull!!");
    })
    .catch((e) => {
        console.log(e);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// schema
const Valid = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
});

//Model
const Val = new mongoose.model("Val", Valid);

// const newVal = new Val({ name: "Sonali Kumar", gender: "Female", age: 20 });
// newVal.save().then((res) => {
//     console.log(res);
// });

// Schema Validation 
