const BASE_URL = 'http://localhost:8000/api/shoes';

getShoes(BASE_URL);

function getShoes(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
    })
}