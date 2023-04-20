import itemsCounter from './counter.js';
import { likes, likesDisplay } from './likesCount.js';
import commentsPopup from './comments.js';
import { commentsDisplay } from './fetchComments.js';

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
    <button data-modal-target="#popup${data.id}" class="comments-btn" id='${data.id}'>Comments</button>
    </div>
    
    <dialog id='popup${data.id}' class='comments-popup'>
    <button type='button' data-close-button id='closeBtn' class='closeBtn' title='closeBtn'>
     <a> &times;</a>
    </button>
    <img src="${data.sprites.front_default}" alt="${data.name}" id="popup-img">
    <div class="comments-topic">
      <h3>${data.name}</h3>
    </div>
    <div class="popup-content">
      <div class="contents">
        <div class="first-contents" >
        <p>Order: ${data.order}</p>
        <p>Weight: ${data.weight}</p>
        </div>
        <div class="second-contents">       
          <p>Height: ${data.height}</p>
          <p>Base experience: ${data.base_experience}</p>
        </div>
      </div>
      <h3 class="comments-number" id="comments-number">Comments (0)</h3>
      <div class="comments-display" id="comments-display"></div>
    
    <div id = "add-comments">
      <form id = 'comments-form'>
      <h4>Add a comment</h4> 
        <input id="name" type="text" placeholder="Your Name" required>
        <textarea id="comment" name="your-insights" placeholder="your-insights"></textarea>
        <button class="submit" id="submit" type="submit">Comment</button>
      </form>
    </div>
  </div> 
  </dialog>
    `;
      container.appendChild(myCard);
    });
    await Promise.all(LoadMyArray);
    likes();
    likesDisplay();
    commentsPopup();
    commentsDisplay();
    itemsCounter(myArray.length, counter);
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};
export default fetchData;