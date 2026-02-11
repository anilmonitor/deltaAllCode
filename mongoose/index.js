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

// Find()
/*
User.find({})
    .then((res) => {
        console.log(res); //print all the documents
    })

    .catch((e) => {

        console.log(e);
    }) */

/*
//lets apply some condition
User.find({ age: { $gt: 20 } })
    .then((res) => {
        console.log(`His age is ${res[5].age} `); //we want age
    })
    .catch((e) => {
        console.log(e);
    })

*/

/*
//FindOne()
User.findOne({ age: { $gt: 30 } })
    .then((res) => {
        console.log(res.name);
    })
    .catch((e) => {
        console.log(e);
    })
*/

/*
// findbyId() -->  Commonly used
User.findById(("698b8f17e1a77d4969f148ba")) //this will give the matched document
    .then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    }) */

/*
//Model.updateOne()
User.updateOne({ age: { $lt: 20 } }, { age: 100 }) //jiska age 20 se kam h usko update kr do
.then((res) => {
console.log(res);
}).catch((e) => {
console.log(e);
}) */

/*
//Model.updateMany()
User.updateMany({age: {$eq: 22}} ,{age: 522})
.then((res)=>{
console.log(res);
})
.catch((e)=> {
console.log(e);
})
*/

// User.updateOne({_id: "698cdfe02b974eaabf3a5865"}, {age: 72})
// .then((res)=>{
//     console.log(res);
// }) .catch((e)=>{
//     console.log(e)
// })

/*
//To display the actual update
User.findOneAndUpdate({ age: 72 }, { name: "Sharma JI" }, { new: true })
    .then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })

*/

/*
//Model.findByIdAndUpdate()
User.findByIdAndUpdate(("698cdfe02b974eaabf3a5865"), { name: "Adiya bhai" }, {new:true})
    .then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })
*/
//delete from database
// i. Model.deleteOne()
// ii.  Model.deleteMany()
// iii.  Model.findByIdAndDelete()
// iv. Model.findOneAndDelete()

/*
// i. Model.deleteOne()
User.deleteOne({ name: "Sonali Kumari" })
    .then((res) => {
        console.log(res);
    })
*/


// ii.  Model.deleteMany()
User.deleteMany({ gender: "Male" }).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})
