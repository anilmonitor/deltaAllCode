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
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            lowercase: true,
            minlength: 3,
        },
        auther: {
            type: String,
            uppercase: true,
            maxlength: 5,
        },
        price: {
            type: Number,
            // default: 5,
            enum: [500, 1000],
        },
        cat: {
            type: String,
            enum: ["redColor", "blueColor"],
        },
        list: [String],
    },
    { timestamps: true },

);

//Model
const Book = new mongoose.model("Book", bookSchema);

const Book1 = new Book({
    title: "mon",
    auther: "AnilK",
    cat: "redColor",
    list: ["Anil", "Rahul", "Manjeet"],
    price: 1000,
});

// Book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((e) => {
//         console.log(e);
//     });


Book.findByIdAndUpdate(("698f1495249db64f6aa859b1"), { title: "lm" }, { runValidators: true })
    .then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })