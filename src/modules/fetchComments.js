const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sExEVU49eBfzgZOnwbX2/comments';

// const comments = async () => {
//   const commentsCount = document.getElementById('comments-number');
//   const displaySection = document.querySelectorAll('.display-section');
//   await fetch(involvementApi)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       const cardsArray = Array.from(displaySection);
//       // console.log(cardsArray);

//       cardsArray.forEach((myCard, index) => {
//         const filterData = data.filter((item) => item.item_id === myCard.id);
//         const count = filterData.length;
//         commentsCount[index].innerHTML = count;
//       });
//     });
// };

// const commentsDisplay = async () => {
//   const submitBtns = document.querySelectorAll('.submit');
//   // const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
//   const commentsCount = document.getElementById('comments-number');
//   const cards = document.querySelectorAll('.myCard');
//   // console.log(submitBtns);
//   if (submitBtns) {
//     submitBtns.forEach((button, index) => {
//       button.addEventListener('click', async () => {
//         commentsCount.innerHTML = Number(commentsCount.innerHTML) + 1;
//         await fetch(involvementApi, {
//           method: 'POST',
//           body: JSON.stringify({
//             item_id: cards[index].id,
//           }),
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         });
//       });
//     });
//   }
// };

const comments = async (info) => {
  const commentsHeader = new Headers();
  commentsHeader.append('Content-Type', 'application/json');
  const sendRequest = {
    method: 'POST',
    headers: commentsHeader,
    body: info,
    redirect: 'follow',
  };
  const request = new Request(involvementApi);
  await fetch(request, sendRequest);
};

const commentsDisplay = async () => {
  const cards = document.querySelectorAll('.myCard');
  cards.forEach((card) => {
    const displayPopup = card.querySelectorAll('[data-modal-target]');
    displayPopup.forEach((button) => {
      button.addEventListener('click', async () => {
        const details = JSON.stringify({
          item_id: `${button.id}`,
          username: card.getElementById('name').value,
          comment: card.getElementById('comment').value,
        });
        card.querySelector('name').value = '';
        card.querySelector('comment').value = '';
        await comments(details);
        /* Reload comments */
        const response = await fetch(`${involvementApi}?item_id=${button.id}`);
        const data = await response.json();
        const commentsCount = card.getElementById('comments-number');
        commentsCount.innerHTML = '';
        data.forEach((comment) => {
          const list = ` <li> ${comment.comment} - $
{comment.creation_date} by ${comment.username}`;
          commentsCount.appendChild(list);
        });
      });
    });
  });
};

export { comments, commentsDisplay };