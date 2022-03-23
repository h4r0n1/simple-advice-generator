function getAdvices() {
  let API = "https://api.adviceslip.com/advice";
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      let result = data.slip;
      console.log("My advices", result);
      let id = document.querySelector("#advice__card__id");
      id.innerHTML = `Advice #${result.id}`;

      let text = document.querySelector("#advice__card__text");
      text.innerHTML = result.advice;
    });
}

getAdvices();
