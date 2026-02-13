const mongoose = require("mongoose");

main()
    .then((res) => {
        console.log("Connection Successfull!!");
    })
    .catch((e) => {
        console.log(e);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
}

// schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    auther: {
        type: String,
        uppercase: true,
    },
    price: {
        type: Number
    }
});

//Model
const Book = new mongoose.model("Book", bookSchema);


const Book1 = new Book({

    title: "moNitor booK servicE",
    auther: "Anil Kumar",
    price: 3233,
})

Book1.save().then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})