const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection successfull!!!");
    })
    .catch((e) => {
        console.log(e);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//Making new Schema
const userSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
});

//Making new Model
const User = mongoose.model("User", userSchema);
// const Emoployee = mongoose.model("Emoployee", userSchema);

/*
//inserting data to database
const user1 = new User({ name: "Anil", gender: "Male", age: 22 });
const user2 = new User({ name: "Anil", gender: "Male", age: 22 });

user1.save(); // it return promise
user2
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });

    */

// inserting multiple document at the same time (NOT much use)
/*
User.insertMany([
    {
        name: "Neha Kumari",
        gender: "Female",
        age: 20,
    },
    { name: "Ritu Kumari", gender: "Female", age: 19 },
    { name: "Rahul Kumar", gender: "Male", age: 23 },
    {
        name: "Anil Kumar",
        gender: "Male",
        age: 22,
    },

    { name: "Suman Kumari", gender: "Female", age: 22 },
    { name: "Nitish Kumar", gender: "Male", age: 23 },
])

    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });
 */

User.insertOne({ name: "Sonali Kumari", age: 25, gender: "Female" });