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
    const { brand, image,slug} = phone
    console.log(phone)
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card m-2 bg-base-100 w-96 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src=${image}
              alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${brand}</h2>
            <p>${slug}</p>
            <div class="card-actions">
              <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Deatils</button>
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


const phoneDetails = async(slugs) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`);
    const data = await response.json();
    console.log(data.data);

    const {brand,image,slug} = data.data ;

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `

     <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">${brand}</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
    
    `
    my_modal_1.showModal()
} 








loadAllphones(false, "iphone");


// const phone ={
//   brand: 'Apple ',
//   phone_name: 'iPhone 12 Pro', 
//   slug: 'apple_iphone_12_pro-10508',
//   image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro.jpg'
//   }
    
//  const { brand, image,slug} = phone

//   console.log(slug)