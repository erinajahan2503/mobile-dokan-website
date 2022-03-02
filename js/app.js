const main = document.getElementById("main");
const allphones = () => {
    document.getElementById("phone-container").innerHTML = "";
    const error = document.getElementById("error");
    const searchValue = document.getElementById("search-box").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => showphoneDetails(data.data));

};
const showphoneDetails = (phones) => {

    console.log(phones);
    for (const phone of phones) {
        console.log(phone);
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img class="w-50" src="${phone.image}"class="card-img-top w-50" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.slug}</p>
                    <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">See Details</button>
                </div>
            </div>
        `
        main.appendChild(div)
    }
}
const phoneDetails = (slug) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => {
            const phoneShow = data.data;
            const singlephone = phoneShow.find(phone => phone.slug === slug)
            const div = document.createElement("div");
            main.innerHTML = "";
            div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.mainFeatures}</h5>
                        <p class="card-text">${phone.slug}</p>
                        <p class="card-text">${phone.phone_name}</p>
                    </div>
                </div>
            `
            main.appendChild(div)
        })
};