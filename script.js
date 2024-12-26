const head = document.getElementById("head");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        head.style.background = "gray";
        head.style.width ="95%";
        head.style.height ="60px"
        head.style.borderRadius = "25px";
        head.style.marginLeft = "20px";
        head.style.marginRight = "20px";
        head.style.top ="0"
    }else{
        head.style.background = "white"
        head.style.width ="98%";
        head.style.height ="40px"
        head.style.borderRadius = "0px";
        head.style.marginLeft = "0px";
        head.style.marginRight = "0px";
        head.style.top ="60px"
    }
});

const data =[
    {
        image:"https://i.pinimg.com/564x/0b/33/fa/0b33fafd1c1f751f9bdffa3258fa85c8.jpg",
        name:"Santa Cap",
        prise:"150",
        oldprice:"   199",
        button:"ORDER"
    },

    {
        image:"https://img.freepik.com/free-photo/view-santa-claus-bag-with-presents-toys_23-2149660809.jpg",
        name:"Santa Bag",
        prise:"150",
        oldprice:"   199",
    },
    {
        image:"https://cdn.pixabay.com/photo/2023/11/14/18/48/christmas-stocking-8388301_1280.jpg",
        name:"Foot Gloves",
        prise:"150",
        oldprice:"   199",
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXtRjLBlw1tIApNSP8deqKPY-UCwCQzZFHw&s",
        name:"Door Decoration",
        prise:"60",
        oldprice:"   90",
    },
    {
        image:"https://www.imagella.com/cdn/shop/files/4ab43f6fb54804f491b0c40a97e2000f.jpg?v=1719005782",
        name:"Winne Bottel",
        prise:"190",
        oldprice:"   255",
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCG6RYxCnonvDUNfK5hmWMImNEBkVLMq_926uW5vqUf9uln21u-f7Vc4eoGirEg_QNBw&usqp=CAU",
        name:"decoration light",
        prise:"59",
        oldprice:"   80",
    },
    {
        image:"https://i.pinimg.com/736x/bf/9a/2a/bf9a2a5bfaa636b77211ecfb13893d53.jpg",
        name:"Candle",
        prise:"15",
        oldprice:"   25",
    },
    {
        image:"https://media.istockphoto.com/id/1092100738/photo/a-sweet-little-santa-clause-figure.jpg?s=612x612&w=0&k=20&c=59wRPd_W6nrwccNiwwnnSS6KppcEzLHp3qsespqCs-8=",
        name:"Santa Doll",
        prise:"35",
        oldprice:"   50",
    },

]

const cardsContainer = document.getElementById('cards-container');

data.forEach((item) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardName = document.createElement('h2');
    const price = document.createElement('span');
    const oldPrice = document.createElement('span');
    const orderButton = document.createElement('button');

    card.classList.add('card');

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(price);
    card.appendChild(oldPrice);
    cardsContainer.appendChild(card);
    orderButton.textContent = item.button;

    cardImage.src = item.image;
    cardName.textContent = item.name;
    price.textContent = item.prise +' $ ';
    oldPrice.textContent = item.oldprice +' $ ';
    orderButton.textContent = item.button;

});


document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    window.addEventListener("scroll", function () {
      if (window.pageYOffset && 300) {
        backToTop.style.display = "block";
      }else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });