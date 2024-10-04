const loadAllphones = async (status, searchText) => {
  console.log(searchText);
  document.getElementById("spinner").style.display = "none";

  // .then diye then
  // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  // .then(res => console.log(res))
  // .then(data => console.log(data))

  // smae kaj async await diye kora jai
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      searchText ? searchText : "iphone"
    }`
  );
  const data = await response.json();
  console.log(data);
  // console.log(data) // alla data pacchi
  //  console.log(data.data) // phone details pacchiu er por display all arekta fnc call kortachi
  //condition use for show All button

  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6)); // parameter diye data pacchi
  }
};

const displayAllPhones = (phones) => {
  //search dile sei data niye ashte hbe
  const phonesContainer = document.getElementById("phones-container");
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
          `;
          phonesContainer.appendChild(div)
  });
};

const handleShowAll = () => {
  // button theke call hoilo
  loadAllphones(true);
};

const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";
  const searchText = document.getElementById("search-box").value;

  setTimeout(function () {
    loadAllphones(false, searchText);
  }, 3000);
};
loadAllphones(false, "iphone");
