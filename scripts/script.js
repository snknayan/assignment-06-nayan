loadCategories = () => {};
fetch("https://openapi.programming-hero.com/api/categories")
  .then((res) => res.json())
  .then((json) => displayCategory(json.categories));

const loadFrontCards = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayFrontCards(json.plants));
};

const displayFrontCards = (fCateCards) => {
  const frontContainer = document.getElementById("card-container");
  frontContainer.innerHTML = "";
  fCateCards.forEach((fCateCard) => {
    if (fCateCard.id <= 6) {
      const fCard = document.createElement("div");
      fCard.innerHTML = `
        <div id="front-card-1" class="card">
            <div class="card shadow-xl rounded-xl w-[250px] min-h-[190px]">
              <img
                class="w-[250px] h-[190px] p-2 rounded-2xl"
                src="${fCateCard.image}"
                alt=""
              />
              <h2 class="text-xl font-semibold p-2">${fCateCard.name}</h2>
              <p class="text-[10px] text-gray-600 px-2 h-14">
                ${fCateCard.description}
              </p>
              <div class="card-inner flex justify-between px-2 mt-3">
                <button
                  class="w-28 pb-1 border-none rounded-full bg-[#DCFCE7] text-green-800 text-sm font-semibold"
                >
                  ${fCateCard.category}
                </button>
                <p class="font-bold">
                  <i class="fa-solid fa-dollar-sign font-bold"></i
                  ><span>${fCateCard.price}</span>
                </p>
              </div>
              <div class="p-2">
                <button
                  class="btn my-2 w-full text-md font-semibold h-9 border-none rounded-full bg-green-700 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
  `;
      frontContainer.append(fCard);
    } else {
      return;
    }
  });
};

loadFrontCards();

const removeActive = () => {
  const rButtons = document.querySelectorAll(".ctgRBtn");
  rButtons.forEach((btn) => btn.classList.remove("active"));
};

const loadAllPlants = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      removeActive();
      const clickBtn = document.getElementById(`category-btn-${id}`);

      clickBtn.classList.add("active");

      displayCatCard(json.plants);
    });
};
const displayCatCard = (cateCards) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  cateCards.forEach((cateCard) => {
    const card = document.createElement("div");
    card.innerHTML = `
    
    <div class="card">
            <div
              class=" shadow-xl rounded-xl w-[250px] h-[190 gap-3"
            >
              <img
                class="w-[250px] h-[190px] p-2 rounded-2xl"
                src="${cateCard.image}"
                alt=""
              />
              <h2 class="text-xl font-semibold p-2">${cateCard.name}</h2>
              <p class="text-[10px] text-gray-600 px-2 h-14">${cateCard.description}</p>
              <div class="card-inner flex justify-between px-2">
                <button
                  class="w-28 h-7 pb-1 border-none rounded-full bg-[#DCFCE7] text-green-800 text-sm font-semibold"
                >
                  ${cateCard.category}
                </button>
                <p class="font-bold">
                  <i class="fa-solid fa-dollar-sign font-bold"></i
                  ><span>${cateCard.price}</span>
                </p>
              </div>
              <div class="p-2">
                <button
                  class="btn my-2 w-full text-md font-semibold h-9 border-none rounded-full bg-green-700 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

    `;
    cardContainer.append(card);
  });
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  for (let category of categories) {
    const categoryDiv = document.createElement("div");
    // const cateName = trim(category.category_name);

    categoryDiv.innerHTML = `
    
             
          <div class="">
            <button id="category-btn-${category.id}" onclick="loadAllPlants(${category.id})" class=" p-1 my-2 ml-1 text-sm font-semibold w-[95%] text-left mx-auto rounded-md shadow-md ctgRBtn ">
              ${category.category_name}
            </button>
          </div>
    
    `;
    categoryContainer.append(categoryDiv);
  }
};

loadCategories();
