const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sExEVU49eBfzgZOnwbX2/likes';

const comments = async () => {
  const commentsCount = document.querySelectorAll('.comments-number');
  const cards = document.querySelectorAll('.myCard');
  await fetch(involvementApi)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const cardsArray = Array.from(cards);
      // console.log(cardsArray);
      cardsArray.forEach((myCard, index) => {
        data.map((item) => {
          if (item.item_id === myCard.id) {
            commentsCount[index].innerHTML = item.comments;
          }
          return commentsCount[index].innerHTML;
        });
      });
    });
};

const commentsDisplay = async () => {
  const submitBtns = document.getElementById('.submit');
  // const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
  const commentsCount = document.querySelectorAll('.comments-number');
  const cards = document.querySelectorAll('.myCard');
  // console.log(submitBtns);
  submitBtns.forEach((button, index) => {
    button.addEventListener('click', async () => {
      commentsCount[index].innerHTML = Number(commentsCount[index].innerHTML) + 1;
      await fetch(involvementApi, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};

export { comments, commentsDisplay };