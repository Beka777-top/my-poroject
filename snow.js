const NUMBER_OF_SNOWFLAKES = 250;
const MAX_SNOWFLAKE_SIZE = 3;
const MAX_SNOWFLAKE_SPEED = 0.3;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('scroll', () => {
  canvas.style.top = `${window.scrollY}px`;
});



// setInterval(animate, 15);
animate()










document.addEventListener("DOMContentLoaded", () => {
    const deadline = new Date("2024-12-31T23:59:59");
  
    const elDays = document.querySelector(".timer__days");
    const elHours = document.querySelector(".timer__hours");
    const elMinutes = document.querySelector(".timer__minutes");
    const elSeconds = document.querySelector(".timer__seconds");
  
    const declensionNum = (num, words) => {
      return words[
        num % 100 > 4 && num % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
      ];
    };
  
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, deadline - now);
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      elDays.textContent = String(days).padStart(2, "0");
      elHours.textContent = String(hours).padStart(2, "0");
      elMinutes.textContent = String(minutes).padStart(2, "0");
      elSeconds.textContent = String(seconds).padStart(2, "0");
  
      elDays.dataset.title = declensionNum(days, ["day", "days", "days"]);
      elHours.dataset.title = declensionNum(hours, ["hour", "hours", "hours"]);
      elMinutes.dataset.title = declensionNum(minutes, ["minute","minutes","minutes",]);
      elSeconds.dataset.title = declensionNum(seconds, ["second","seconds","seconds",]);
      if (diff === 0) {
        clearInterval(timerId);
      }
    };
  
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
  });





  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');
  const emailButton = document.getElementById('emailButton');

  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput.value.includes('@')) {
    emailInput.style.background = 'red';
    emailInput.placeholder = 'Email is folse use @';
    emailInput.style.color = 'black';
    emailButton.textContent = 'Try again';
    emailButton.style.color = 'red';
    emailButton.style.width = "90px"
    emailButton.style.fontSize = "15px";
    emailButton.style.marginLeft ="200px"
    emailButton.style.fontFamily = "creative"
    } else {
      emailInput.style.color = 'black';
      emailInput.placeholder = 'Email is true';
      emailInput.style.background = 'white';
      emailButton.textContent = 'Enter';
      emailButton.style.color = 'black';
      emailButton.style.width = "90px";
      emailButton.style.fontSize = "15px";
      emailButton.style.marginLeft ="200px"
      emailButton.style.fontFamily = "creative"
    }
  
    emailInput.value = ""
  })
emailForm.addEventListener("dblclick", (e) => {
  emailInput.style.background = "white";
  emailInput.placeholder = "Your email";
  emailInput.style.fontFamily = "creative"
})
emailButton.addEventListener("dblclick", (e) => { 
  emailButton.style.background = "white";
  emailButton.style.color = "black";
  emailButton.textContent = "Enter";
  emailButton.style.fontFamily = "creative"
})




  const texts = [
   "Hi my name is Bekarys ",
  "I study at Amjeltcyber school.I learned a lot here and made many friends",
  "In 3 months I learned about HTML CSS JS. I started making websites well and I really like it",
  "Happy New Year.  I wish you happiness and joy for the New Year, that you may have good health and hope."
    ];
        
        // Получаем элемент, в котором будет изменяться текст
        const textElement = document.getElementById("text");
        
        // Инициализируем индекс
        let index = 0;

        // Функция для смены текста
        function changeText() {
            index = (index + 1) % texts.length; // Сбрасываем индекс при достижении конца массива
            textElement.textContent = texts[index];
        }

        // Меняем текст каждые 5 секунд
        setInterval(changeText, 5000);