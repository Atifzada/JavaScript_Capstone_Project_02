import itemsCounter from './counter.js';

const counter = document.getElementById('add-new-link');
const container = document.getElementById('smoothie-container');
const fetchData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=60');
  const data = await response.json();
  const myArray = data.results;
  // console.log(myArray);
  myArray.map(async (i) => {
    const response = await fetch(i.url);
    const data = await response.json();
    // console.log(data);
    const myCard = document.createElement('div');
    myCard.classList = 'myCard';
    myCard.id = `${data.id}`;
    myCard.innerHTML = `<div class="cardContent"> 
    <img src="${data.sprites.back_default}" alt="${data.name}" class="cardImg">
    <div class="cardHeader">
    <h2>${data.name}</h2>
    </div>
    <div class="interation">
    <button class='likeBtn' id="likeBtn"><i class="fa-regular fa-thumbs-up"></i></button>
    <span class='counter'>0</span>
    <button class="commentBtn" id="commentBtn">Comments</button>
    </div>
    `;
    container.appendChild(myCard);
  });
  itemsCounter(myArray.length, counter);
};
export default fetchData;
