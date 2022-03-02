const allphones = () => {
    document.getElementById("phone-container").innerHTML = "";
    // document.getElementById("spinner").style.display = "block";
    const searchValue = document.getElementById("search-box").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => showphoneDetails(data.data));

};
const showphoneDetails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById("phone-container");

        const div = document.createElement("div");
        div.innerHTML = `<div class="card border p-5">
            <div class="pro-pic w-25 ">
                  <img class="w-50" src="${phone.image}"class="card-img-top w-50" alt="...">
              <div class="card-body">
              <h2 class="phone-title">${phone.phone_name}</h2>
              <h5>${phone.slug}</h5>
              <p class="card-text">${phone.brand}</p>
                 <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
                
              </div>
              </div>
          </div>`;
        parent.appendChild(div);
        // console.log(phone);
    }
};
// ${phone.mainFeatures}
const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data.data));

};