// магазин и карточки
const productList = [
  { name: "The Elder Scrolls V: Skyrim", img: "TES_Skyrim.png", count: 0 },
  { name: "Warhammer 40 000: Space Marine 2", img: "Warhammer.png", count: 0 },
  { name: "Elden Ring", img: "EldenRing.png", count: 0 },
  { name: "The Witcher 3: Wild Hunt", img: "TheWitcher.png", count: 0 },
  { name: "Stardew Valley", img: "StardewValley.png", count: 0 },
  { name: "Genshin Impact", img: "Genshin.png", count: 0 }
];


const container = document.getElementById("products");

if (container) {
  

  productList.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>

      <div class="counter">
          <button class="minus">-</button>
          <span class="count">0</span>
          <button class="plus">+</button>
      </div>
    `;

    const minus = card.querySelector(".minus");
    const plus = card.querySelector(".plus");
    const countSpan = card.querySelector(".count");

    minus.addEventListener("click", () => {
      if (product.count > 0) product.count--;
      countSpan.textContent = product.count;
    });

    plus.addEventListener("click", () => {
      product.count++;
      countSpan.textContent = product.count;
    });

    container.appendChild(card);
  });

  document.getElementById("buyBtn").addEventListener("click", () => {
    const selected = productList.filter(p => p.count > 0);

    if (selected.length === 0) {
      alert("Вы не выбрали ни одного товара!");
      return;
    }

    const form = document.getElementById("orderForm");
    form.innerHTML = ""; // очистка данных

    selected.forEach((product, index) => {
      const inputName = document.createElement("input");
      inputName.type = "hidden";
      inputName.name = `product${index + 1}`;
      inputName.value = product.name;
      form.appendChild(inputName);

      const inputCount = document.createElement("input");
      inputCount.type = "hidden";
      inputCount.name = `count${index + 1}`;
      inputCount.value = product.count;
      form.appendChild(inputCount);
    });

    form.submit();
  });
}

// бургер
const burgerBtn = document.querySelector('.burger-btn');
const mainNav = document.querySelector('.main-nav');


if (burgerBtn && mainNav) {
  burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      mainNav.classList.toggle('active');
  });

  mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          burgerBtn.classList.remove('active');
          mainNav.classList.remove('active');
      });
  });
}
