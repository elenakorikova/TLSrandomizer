let phrases = [
  { text: 'Ксении Коноваловой', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'Анастасии Шмунк ', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'Юрия Сенашкина', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'Елены Кориковой', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'Александры Егоровой', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'Ольги Лежневой', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' }
 /* { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png'} */
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
let randomElement
let randomEx

button.addEventListener('click', function () {
  while (randomElement == randomEx){
  randomElement = getRandomElement(phrases)
}

randomEx = randomElement

  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
  
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
