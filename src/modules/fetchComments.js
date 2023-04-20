const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sExEVU49eBfzgZOnwbX2/comments';

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
  const myCard = document.querySelectorAll('.myCard');
  myCard.forEach((card) => {
    const displayPopup = card.querySelectorAll('[data-modal-target]');
    displayPopup.forEach((button) => {
      button.addEventListener('click', async () => {
        const details = JSON.stringify({
          item_id: `${button.id}`,
          username: card.querySelector('#name').value,
          comment: card.querySelector('#comment').value,
        });
        card.querySelector('#name').value = '';
        card.querySelector('#comment').value = '';
        await comments(details);
        /* Reload comments */
        const response = await fetch(`${involvementApi}?item_id=${button.id}`);
        const data = await response.json();
        const commentsDisplay = card.querySelector('.comments-display');
        // commentsDisplay.innerHTML = '';
        data.forEach((cmnt) => {
          const list = document.createElement('li');
          list.id = 'list';
          list.innerHTML = `${cmnt.creation_date} ${cmnt.username} : ${cmnt.comment}`;
          commentsDisplay.insertAdjacentElement('beforeend', list);
        });
      });
    });
  });
};

export { comments, commentsDisplay };