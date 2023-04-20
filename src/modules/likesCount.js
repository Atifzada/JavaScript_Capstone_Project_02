const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sExEVU49eBfzgZOnwbX2/likes';

const likes = async () => {
  const likeCount = document.querySelectorAll('.likeCounter');
  const cards = document.querySelectorAll('.myCard');
  await fetch(involvementApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cardsArray = Array.from(cards);
      console.log(cardsArray);
      cardsArray.forEach((myCard, index) => {
        data.map((item) => {
          if (item.item_id === myCard.id) {
            likeCount[index].innerHTML = item.likes;
          }
          return likeCount[index].innerHTML;
        });
      });
    });
};

const likesDisplay = async () => {
  const likeBtns = document.querySelectorAll('.likeBtn');
  const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
  const likesCounter = document.querySelectorAll('.likeCounter');
  const cards = document.querySelectorAll('.myCard');
  // console.log(likeBtns);
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      thumbsUp[index].classList.remove('fa-regular');
      thumbsUp[index].classList.add('fa-solid');
      likesCounter[index].innerHTML = Number(likesCounter[index].innerHTML) + 1;
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

export { likes, likesDisplay };