let totalPrice = 0;

//Spinner
const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("spinner").classList.add("flex");

    document.getElementById("card-section").classList.add("hidden");
  } else {
    document.getElementById("card-section").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("spinner").classList.remove("flex");
  }
};

loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

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
        <div id="front-card-1" class="card ml-24 md:ml-0">
            <div class="card shadow-xl rounded-xl w-[250px] min-h-[190px]">
              <img
                class="w-[250px] h-[190px] p-2 rounded-2xl"
                src="${fCateCard.image}"
                alt=""
              />
              <h2 onclick="loadPlantDetails(${fCateCard.id})" class=" text-xl font-semibold p-2">${fCateCard.name}</h2>
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
                <button onclick="addToCarts(${fCateCard.id})"
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

const addToCarts = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const carts = await res.json();
  displayToCarts(carts.plants);
};

displayToCarts = (cart) => {
  const cartBoxContainer = document.getElementById("cartBox-container");
  const newCart = document.createElement("div");
  alert(`${cart.name} has been added to the cart!`);
  totalPrice = totalPrice + cart.price;

  newCart.innerHTML = `
   <div>
              <div
                class="flex justify-between items-center w-[98%] mx-auto bg-[#F0FDF4] rounded-md mt-3 p-1"
              >
                <div>
                  <h2 class="text-sm font-bold pb-1">${cart.name}</h2>
                  <p class="text-[12px] text-gray-600">$ <span>${cart.price}</span></p>
                </div>

                <div><i id="removeCartPrice" onclick="removeCart(event)" class="fa-solid fa-xmark text-red-700"></i></div>
              </div>
              
            </div>
   
   `;
  cartBoxContainer.append(newCart);
  document.getElementById("tPrice").innerText = totalPrice;
};

const removeCart = (event) => {
  const targetedDel = event.target.parentElement.parentElement;
  targetedDel.remove();
  const removePrice = parseFloat(targetedDel.querySelector("span").innerText);
  totalPrice = totalPrice - removePrice;
  document.getElementById("tPrice").innerText = totalPrice;
};

const loadPlantDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlantDetails(details.plants);
};
const displayPlantDetails = (plant) => {
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div id="modal-card">
            <h2 class="text-xl font-semibold p-2 ml-6">${plant.name}</h2>
            <img
              class="w-[90%] mx-auto h-[220px] p-2 rounded-2xl"
              src="${plant.image}"
              alt=""
            />
            <p class="text-[12px] ml-7 my-3">
              <span class="font-bold">Category:</span> ${plant.category}
            </p>

            <p class="text-[12px] ml-7">
              <span class="font-bold">price: </span
              ><i class="fa-solid fa-dollar-sign"></i>${plant.price}
            </p>

            <p class="text-[12px] h-14 ml-7 my-3">
              <span class="font-bold text-[12px]">Descriptions:</span> ${plant.description}
            </p>
          </div>
  `;
  document.getElementById("plant_modal").showModal();
};

const removeActive = () => {
  const rButtons = document.querySelectorAll(".ctgRBtn");
  rButtons.forEach((btn) => btn.classList.remove("active"));
};

const loadAllPlants = (id) => {
  manageSpinner(true);

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
    
    <div class="card ml-24 md:ml-0">
            <div
              class=" shadow-xl rounded-xl w-[250px] min-h-[190px] gap-3"
            >
              <img
                class="w-[250px] h-[190px] p-2 rounded-2xl"
                src="${cateCard.image}"
                alt=""
              />
              <h2 onclick="loadPlantDetails(${cateCard.id})" class="text-xl font-semibold p-2">${cateCard.name}</h2>
              <p class="text-[10px] text-gray-600 px-2 h-18">${cateCard.description}</p>
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
                <button onclick="addToCarts(${cateCard.id})"
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
  manageSpinner(false);
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  for (let category of categories) {
    const categoryDiv = document.createElement("div");
    // const cateName = trim(category.category_name);

    categoryDiv.innerHTML = `
    
             
          <div class="">
            <button id="category-btn-${category.id}" onclick="loadAllPlants(${category.id})" class=" p-1 my-2 ml-1 text-sm font-semibold w-[95%] text-left mx-auto rounded-md h-9 shadow-md hover:bg-[#15803d] hover:text-white ctgRBtn ">
              ${category.category_name}
            </button>
          </div>
    
    `;
    categoryContainer.append(categoryDiv);
  }
};

loadCategories();
