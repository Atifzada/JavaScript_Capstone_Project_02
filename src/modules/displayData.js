import itemsCounter from './counter.js';
import { likes, likesDisplay } from './likesCount.js';

const counter = document.getElementById('add-new-link');
const container = document.getElementById('smoothie-container');
const fetchData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=42');
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    const myArray = data.results;
    // console.log(myArray);
    const LoadMyArray = myArray.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      // console.log(data);
      const myCard = document.createElement('div');
      myCard.classList = 'myCard';
      myCard.id = `${data.id}`;
      // console.log(data.id);
      myCard.innerHTML = `<div class="cardContent"> 
    <img src="${data.sprites.back_default}" alt="${data.name}" class="cardImg">
    <div class="cardTitle">
    <h2>${data.name}</h2>
    </div>
    <div class="interation">
    <button class='likeBtn' id="likeBtn"><i class="fa-regular fa-thumbs-up"></i></button>
    <span class='likeCounter'>0</span>
    <button class="commentBtn" id="commentBtn">Comments</button>
    </div>
    `;
      container.appendChild(myCard);
    });
    await Promise.all(LoadMyArray);
    likes();
    likesDisplay();
    itemsCounter(myArray.length, counter);
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};
export default fetchData;
