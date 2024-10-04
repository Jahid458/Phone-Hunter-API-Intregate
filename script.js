const loadAllphones = async(status,searchText) =>{
  console.log(searchText);
  document.getElementById("spinner").style.display = "none";

  // .then diye then
  // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  // .then(res => console.log(res))
  // .then(data => console.log(data))

  // smae kaj async await diye kora jai 
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`);
  const data = await response.json()
  console.log(data)
   // console.log(data) // alla data pacchi 
  //  console.log(data.data) // phone details pacchiu er por display all arekta fnc call kortachi
  //condition use for show All button

  if(status){
    displayAllPhones(data.data)
  }else{
    displayAllPhones(data.data.slice(0,6)) // parameter diye data pacchi 
  }
}

const displayAllPhones = (phones) => {
  //search dile sei data niye ashte hbe 

}

const handleShowAll = () => { // button theke call hoilo
  loadAllphones(true)
}




const handleSearch =  () =>{
  document.getElementById("spinner").style.display = "block";
  const searchText = document.getElementById('search-box').value;


    setTimeout(function(){
      loadAllphones(false,searchText)
    },3000)

}
loadAllphones(false,"iphone")