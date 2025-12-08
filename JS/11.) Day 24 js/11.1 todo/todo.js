let input = document.querySelector("#inp");
let btn = document.querySelector("#buttonn");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");

  item.innerText = input.value;
  if (item.innerText.trim() == "") {
    alert("Enter some text");
  } else {
    ul.appendChild(item);
    input.value = "";
  }

  //code to delete li for new li element
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  item.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    item.remove();
  });
});

//code for exisitng li elemet
let deleteBtnOld = document.querySelectorAll(".deleteBtnOld");
for (let i = 0; i < deleteBtnOld.length; i++) {
  // console.log(deleteBtnOld[i]);

  deleteBtnOld[i].addEventListener("click", () => {
    let par = deleteBtnOld[i].parentElement;
    par.remove();
  });
}

//to add item after pressing enter button
input.addEventListener("keydown", (event) => {
  let item = document.createElement("li");

  if (event.code == "Enter" || event.code == "NumpadEnter") {
    item.innerText = input.value;

    if (item.innerText.trim() == "") {
      let emptyAlert = document.querySelector(".invalid");

      alert("Enter some text");
    } else {
      ul.appendChild(item);
      input.value = "";
    }
  }

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  item.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    item.remove();
  });
});
