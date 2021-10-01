const BASE_URL = 'http://localhost:8000/api';
const ALL_URL = BASE_URL + '/shoes'
// const KIDS_URL = BASE_URL+'/category_id=1'
const searchbox = document.querySelector('.searcher');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {

    if (evt.keyCode == 13) {
      console.log(searchbox.value);
      getResults(searchbox.value);
    }
  }

  function getResults () {
    fetch(ALL_URL)
      .then(shoe => {
        return shoe.json();
    }).then(displayResults);
 }

 function displayResults (shoes) {
    let name = document.querySelector('.name');
    name.innerText = `${shoes.name}`;
   
    let brand= document.querySelector('.brand');
    brand.innerHTML = `${shoes.brand}`;
   
    let price = document.querySelector('.price');
    price.innerText = `${shoes.price}`;
   

   
    let path = document.querySelector('.path');
    path.innerHTML = `<img class="shoes path" src="${shoes.path}" alt="OFF-white Red Edition" draggable="false" />`;
    
  
  
  }


