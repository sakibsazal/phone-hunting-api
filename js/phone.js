const loadPhone = async (searchText) =>{
const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data = await res.json();
const phones = data.data;
displayPhones(phones);
}

const displayPhones = phones =>{
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
// clear phone container

phoneContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phones);
    // create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card p-8 bg-orange-100 shadow-xl`;
    // inner html
    phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>`;

//   append child
phoneContainer.appendChild(phoneCard);
    });
}

const handleSearch = () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText);
}


