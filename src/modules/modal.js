import fetchData from './displayData.js';

fetchData();

const createModal = (data) => {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
      <div class="modal-content">
        <img src="${data.sprites.back_default}" alt="${data.name}" class="cardImg">
        <span id = "close-btn">&times;</span>
        <div class="cardHeader">
        <h2>${data.name}</h2>
        </div>
        <div id = "modal-content">
        <p>Comments for ${data.name}.</p>
        
        <h2>Add a comment</h2>
        <form id = 'comments-form'>
        <input id="name" type="text" placeholder="Your Name" required>
        <textarea id="comment" name="your-insights" placeholder="your-insights"></textarea>
        <button id="submit" type="submit">Comment</button>
        </form>
        </div>
      </div>
      `;
  const closeButton = document.getElementById('close-btn');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.style.display = 'block';
};
const container = document.getElementById('smoothie-container');
// const displayModal = (e) => {
//   const card = e.target.closest('.myCard');
//   console.log(card);
//   if (card) {
//     const { id } = card;
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => createModal(data))
//       .catch((error) => console.error(error));
//   }
// };
container.addEventListener('click', (e) => {
  const displayModal = (e) => {
    const card = e.target.closest('.myCard');
    console.log(card);
    if (card) {
      const { id } = card;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => createModal(data))
        .catch((error) => console.error(error));
    }
  };
});

//       // Fetch more data about the Pokemon from the API
//       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//         .then((response) => response.json())
//         .then((data) => {
//           // Populate the modal content with the Pokemon's data
//           const pokemonData = document.createElement('div');
//           pokemonData.className = 'pokemon-data';
//           pokemonData.innerHTML = `
//             <h2>${data.name}</h2>
//             <img src="${data.sprites.front_default}">
//             <p>${data.species.name}</p>
//           `;
//           modal.insertBefore(pokemonData, commentsForm);
//         })
//         .catch((error) => console.error(error));
//       // Display the modal dialog
//       modal.style.display = 'block';
//     });
//     // Add the list item to the page
//     document.getElementById('pokemon-list').appendChild(listItem);
//   });
// })
// .catch((error) => console.error(error));
