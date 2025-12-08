let url = "http://universities.hipolabs.com/search?name=";

//To select country
let select = document.querySelector("select");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let ol = document.querySelector("ol");
  ol.innerHTML = "";
  getCollege(select.value);
});

//to fetch all college
async function collegeData(country) {
  let datat = await axios.get(url + country);
  
  return datat.data;
}

//append all college
async function getCollege(country) {
  let college = await collegeData(country);
  for (allColl of college) {
    let ol = document.querySelector("ol");
    let li = document.createElement("li");
    li.innerText = allColl.name;
    ol.appendChild(li);
  }
}

//to fetch country
let countryAPI = "https://countriesnow.space/api/v0.1/countries";
async function con() {
  let connn = await axios.get(countryAPI);
  finalData = connn.data.data;
  for (let i = 0; i < finalData.length; i++) {
    let dropdown = document.querySelector("select");
    let option = document.createElement("option");
    dropdown.appendChild(option);
    option.innerText = finalData[i].country;
  }
}
con();
