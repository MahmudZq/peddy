// tailwind script 
    tailwind.config = {
      theme: {
        extend: {
            screens:{
                custom: '360px',
                customSm: '600px',
            },
          colors: {
            clifford: '#da373d',
            primary: '#0E7A81',
          }
        }
      }
    }

const loadCategory = async () =>{
    const url = "https://openapi.programming-hero.com/api/peddy/categories";
    const res = await fetch(url);
    const data = await res.json();
    const categories = data.categories;
    displayCategory(categories);
}

const displayCategory = (data) =>{
    const petCategoryNav = document.getElementById('petCategory');
    data.forEach( (items) => {
        const petCategory = document.createElement('div');
        const categoryId = items.id;
        const categoryName = items.category;
        const photo = items.category_icon;

        petCategory.innerHTML =
        `
        <div id=${categoryId} onclick="loadByCategory('${categoryName}')" class="w-[300px] h-[75px] flex flex-row space-x-5 justify-center items-center py-2 border-2 hover:border-[#0E7A81] hover:bg-[#68d5dd] hover:bg-opacity-20 cursor-pointer rounded-xl">
        <img src=${photo} alt=${categoryName}>
        <h1 class="text-3xl font-semibold">${categoryName}</h1>
        </div>
        `
        petCategoryNav.appendChild(petCategory)

    });
}

const loadCards = async () => {
    const url = "https://openapi.programming-hero.com/api/peddy/pets";
    
    const res = await fetch(url);
    const data = await res.json();
    const pets = data.pets;

    displayCards(pets);

    document.getElementById("sortButton")
    .addEventListener("click", ()=> loadSortedData(pets));
}

const displayCards = (pets) => { 
    
    const petCards =document.getElementById('petCards');
    petCards.innerHTML = "";

    pets.forEach((pet) =>{
        const petId     =pet.petId;
        const petPhoto  =pet.image;
        // console.log(petPhoto);
        const petName   =pet.pet_name;
        const petBreed  =pet.breed  ?? "Unavailable";
        const petBOD    =pet.date_of_birth ?? "Unavailable";
        const petGender =pet.gender  ?? "Unavailable";
        const petPrice  =pet.price  ?? "Unavailable";
        const petVaccin =pet.vaccinated_status ?? "Unavailable";

        const petCard = document.createElement('div');
        petCard.innerHTML =
        ` <div class="petCard w-3/4 ">
                <div id=${petId} class="border-2 w-[300px] h-[500px] rounded-xl   ">
                    <img id="${petId}-photo" src=${petPhoto} class="rounded-3xl p-4" alt="">
                    
                    <div class="space-y-2 mt-5 mb-3 pl-3 border-b-[2px] border-[#111111]   border-opacity-30  pb-4 mx-3">
                        <h1 class="h1 font-bold text-2xl ">${petName}</h1>
                        <div class="flex flex-row gap-2 items-center">
                            <i class="fa-regular fa-square-minus"></i>
                            <p class="text-base text-[#111111] opacity-80">Breed: ${petBreed}</p>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <i class="fa-regular fa-calendar"></i>
                            <p class="text-base text-[#111111] opacity-80">Birth: ${petBOD}</p>
                        </div>
                        <div class="flex flex-row gap-2  items-center">
                            <i class="fa-solid fa-mercury"></i>
                            <p class="text-base text-[#111111] opacity-80">Gender: ${petGender}</p>
                        </div>
                        <div class="flex flex-row gap-2  items-center">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <p class="text-base text-[#111111] opacity-80">Price:  ${petPrice}</p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mt-4 px-4">
                        <button id=${petId}lk onclick="likedPets('${petPhoto}','${petId}lk','${petName}')" class="btn bg-white text-primary hover:bg-primary hover:text-white border-[1px] border-[#111111] border-opacity-20">
                            <i class="fa-regular fa-thumbs-up fa-xl "></i>
                        </button>
                        <button id=${petId}bt onclick="accepted('${petId}bt')" class="btn bg-white text-primary hover:bg-primary hover:text-white  border-[1px] border-[#111111] border-opacity-20">
                            Accept
                        </button>
                        <button onclick="modal('${petId}')" class="btn bg-white text-primary hover:bg-primary hover:text-white  border-[1px] border-[#111111] border-opacity-20">
                            Details
                        </button>

                    </div>
                </div>

            </div>

        `
    petCards.appendChild(petCard);
    })
}

const modal = async (id) => {

        const modalContent = document.getElementById('modalContent')
        console.log(modalContent);
        console.log(id);
        const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`
        
        const res = await fetch(url);
        const data = await res.json();
        const pet = data.petData;
        console.log(pet);
        // const petId     =pet.petId;
        const petPhoto  =pet.image;
        console.log(petPhoto);
        const petName   =pet.pet_name;
        const petBreed  =pet.breed  ?? "Unavailable";
        const petBOD    =pet.date_of_birth ?? "Unavailable";
        const petGender =pet.gender  ?? "Unavailable";
        const petPrice  =pet.price  ?? "Unavailable";
        const petDetails  =pet.pet_details  ?? "Unavailable";
        const petVaccin =pet.vaccinated_status ?? "Unavailable";
        modalContent.innerHTML = 
        `
        <div class="">
        <img src=${petPhoto} class="rounded-3xl w-full  object-cover mx-auto" alt="">
    </div>
    <h1 class="text-xl lg:text-4xl font-bold mt-6 mb-3  border-b-[2px] border-[#111111]   border-opacity-30  pb-4 mx-3">
        ${petName}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="space-y-4">
            <div class="flex flex-row gap-2 items-center">
                <i class="fa-regular fa-square-minus"></i>
                <p class="text-xs md:text-base text-[#111111] opacity-80">Breed: ${petBreed}</p>
            </div>
            
            <div class="flex flex-row gap-2  items-center">
                <i class="fa-solid fa-mercury"></i>
                <p class="text-xs md:text-base text-[#111111] opacity-80">Gender: ${petGender}</p>
            </div>

            <div class="flex flex-row gap-2  items-center">
                <i class="fa-solid fa-mercury"></i>
                <p class="text-xs md:text-base text-[#111111] opacity-80">Vaccinated Status: ${petVaccin}</p>
            </div>

            
        </div>
        <div class="space-y-4">
            <div class="flex flex-row gap-2 items-center">
                <i class="fa-regular fa-calendar"></i>
                <p class="text-xs md:text-base text-[#111111] opacity-80">Birth: ${petBOD}</p>
            </div>
            <div class="flex flex-row gap-2  items-center">
                <i class="fa-solid fa-dollar-sign"></i>
                <p class="text-xs md:text-base text-[#111111] opacity-80">Price:  ${petPrice}</p>
            </div>

        </div>

    </div>
    <div>
        <h1 class="text-base md:text-xl font-bold mt-3 mb-2 text-[#000000]">Details Information</h1>
        <p class="text-xs  md:text-base text-wrap  opacity-80">
        ${petDetails}
        </p>
    </div>

        `
        my_modal_5.showModal();
}

const likedPets = (photo,id,name) =>{
    // console.log(photo);

    const likedPetContainer = document.getElementById("likedPets");
    const bt = document.getElementById(id);
    // console.log(bt);
    if(!bt.classList.contains("text-white"))
    {
    const div = document.createElement("div");
    div.id = `${id}sl`;
    div.classList.add("w-[175px]", "h-[225px]", "mx-auto", "mt-0", "flex", "flex-row", "justify-center", "items-center", "border-0" , "border-[#444444]")
    div.innerHTML = ` 
                        <img  src="${photo}" class="rounded-3xl w-[150px] h-[150px] object-cover " alt=${name}${id}>
    
                    `
    bt.classList.remove("text-primary","bg-white")
    bt.classList.add("text-white", "bg-primary")
    likedPetContainer.classList.add("border-2")
    likedPetContainer.appendChild(div);
    // console.log(div);
    console.log(likedPetContainer.children.length);
    }
    else{
        bt.classList.add("text-primary","bg-white")
        bt.classList.remove("text-white", "bg-primary")
        // console.log(`${id}sl`);
        const div = document.getElementById(`${id}sl`);
        // console.log(div);
        likedPetContainer.removeChild(div);
        const count = likedPetContainer.children.length;
        if(count === 0){
            likedPetContainer.classList.remove("border-2");
        }
    }
}

const showActiveButton = async (name) =>{

    const petCategoryUrl = "https://openapi.programming-hero.com/api/peddy/categories";
    const response = await fetch(petCategoryUrl);
    const category = await response.json();
    const categData = category.categories;
    // console.log(categData);

    categData.forEach( (item) => {
                                    {
                                        // console.log(item);
                                        const category = document.getElementById(item.id);
                                        category.classList.remove("border-[#0E7A81]","bg-[#68d5dd]", "bg-opacity-20", "rounded-[36px]");
                                        if(name === item.category)
                                        {    
                                            category.classList.add("border-[#0E7A81]","bg-[#68d5dd]", "bg-opacity-20", "rounded-[36px]");
                                        }
                                    }
                                })
}

const showSpinner = async () =>{
    const spinner = document.getElementById("spinner");
    const petCards = document.getElementById('petCards');
    const noInfo = document.getElementById('noInfo');
    spinner.style.display="flex";
    petCards.style.display= "none";
    noInfo.classList.add("hidden");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    spinner.style.display = "none"
}

const loadByCategory = async (name) =>{
    
    showActiveButton(name);


    const petCards = document.getElementById('petCards');
    const noInfo = document.getElementById('noInfo');

    await showSpinner();

    const urlKey = name.toLowerCase();
    const url =`https://openapi.programming-hero.com/api/peddy/category/${urlKey}`;

    let res = await fetch(url);
    let pets = await res.json();
    data = pets.data;
    displayCards(data);

    if(data.length === 0){

        console.log(data.length);
        noInfo.classList.remove("hidden");
    }
    else{
        petCards.style.display = "flex";
    }

    document.getElementById("sortButton").addEventListener("click", () => loadSortedData(data));
}


const loadSortedData = async (data) =>{

        const sortedPets = data.sort((a, b) => {

            const priceA = a.price ?? 0; 
            const priceB = b.price ?? 0; 
    
            return priceB - priceA; 
        });
    
        displayCards(sortedPets);
    };

const accepted = (id) => {
    const accepted = document.getElementById(adoptModal);
    const modalCounter = document.getElementById('modalCount');
    modalCounter.innerHTML = 3;
    const bt = `${id}_accpt`;
    console.log(bt);
    const button  =  document.getElementById(id);
    console.log(button);
    button.innerText="Accepted";
    button.disabled = true;
    button.classList.remove("hover:bg-primary", "text-primary");
    button.classList.add("text-[#ffffff]", "bg-[#cccccc]");
    counter(modalCounter);
} 

const counter = (modalCounter) =>{
    let i = 3;
    const btnClose = document.getElementById('btnClose');
    adoptModal.showModal();
    const counting = setInterval( () =>{  
    modalCounter.innerHTML = i;
    console.log(i);
    i--;    
    if(i < 0)
    {
    clearInterval(counting)
    btnClose.click(); 
    }
    },700)
}

loadCards();
loadCategory();