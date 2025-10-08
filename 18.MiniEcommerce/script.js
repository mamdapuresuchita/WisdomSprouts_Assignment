const watches =[{
    id:1,
    title:'Fastrack Tick Tock black',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:20,
    brand:'Titan',
    moreInfo:'View More',
},
{
    id:2,
    title:'Multi Function Grey ',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:10,
    brand:'Timex',
    moreInfo:'View More',
},
{
    id:3,
    title:'Edge Ceramic Quartz ',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:8,
    brand:'Titan',
    moreInfo:'View More',
},
{
    id:4,
    title:'boAt Wave Fury',
    description:'chsfvbadj hfugvbh',
    price:10838,
    stock:17,
    brand:'Boat',
    moreInfo:'View More',
},
{
    id:5,
    title:'Noise Colorfit Icon',
    description:'chsfvbadj hfugvbh',
    price:6838,
    stock:20,
    brand:'Noise',
    moreInfo:'View More',
},
{
    id:6,
    title:'THE MINIMA Analog ',
    description:'chsfvbadj hfugvbh',
    price:8838,
    stock:2,
    brand:'fossil',
    moreInfo:'View More',
}
]




renderCardElmt =document.querySelector("#renderCard")
searchElement =document.querySelector("#searchProducts")



function renderProducts(renderProd){

renderCardElmt.innerHTML = renderProd.map((w,i)=>`
      <div class="col-sm-8 col-md-6 col-lg-3 m-4 " >
        <div class="card" >
        <div class="card-body">
        <h5 class="card-title">${w.title}</h5>
        <p class="card-text">${w.description}</p>
        <p class="card-text">Price: ${w.price}</p>
        <p class="card-text">Stock: ${w.stock}</p>
        <p class="card-text">Brand: ${w.brand}</p>
        <a href="#" class="btn btn-warning">${w.moreInfo}</a>
      </div>
    </div>
  </div>`
  ).join('')
  }

  renderProducts(watches);

//search function

function searchProducts(){

  // console.log("clicked");
  let searchWord = searchElement.value;
  // console.log(searchWord)
  let filteredWatches = watches.filter((p)=> p.title.toLowerCase().includes(searchWord.toLowerCase()));
  renderProducts(filteredWatches);
  
}

//Filter by brand name

function renderByBrandName(brnd){
//  console.log(brnd)
 arrayByBrandName =watches.filter(p=>p.brand==brnd) //creates array of watch with specific brand name
 renderProducts(arrayByBrandName) //displays the watches of specific brand name
}


//brand render in dropdown
//new Set() is used to store unique brand names, removing duplicates

let brands =new Set(watches.map((w)=>w.brand))//extracting brand names and storing in set to avoid duplicates
b1 =Array.from(brands) //converting set to array
console.log(b1)

function renderBrand(){
  document.querySelector("#renderBrands").innerHTML =b1.map((b)=>`
  <li><button class="dropdown-item" onclick="renderByBrandName('${b}')">${b}</button></li>`).join('');
}

renderBrand();


//Add New product

function setWatchesToLocalStorage(data) {
  localStorage.setItem("watchesData", JSON.stringify(data)); //stringify to convert array to string
  console.log("Saved to local",data);
}

function getWatchesFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("watchesData"));
  console.log("Loaded from storage", data);
  return data || [];
}



titleElement = document.querySelector('#title');
descElement = document.querySelector('#desc');
brandElement = document.querySelector('#brand');
priceElement = document.querySelector('#price');
stockElement = document.querySelector('#stock');

function addNewProduct(){
  newWatch = {
    id:Date.now(),
    title:titleElement.value,
    description:descElement.value,
    price:priceElement.value,
    stock:stockElement.value,
    brand:brandElement.value,
    moreInfo:'View More',
  }


  console.log(newWatch);

  let watchesFromLocal = getWatchesFromLocalStorage();//always returns array
  watchesFromLocal.push(newWatch); //Add new product to collection
  setWatchesToLocalStorage(watchesFromLocal); //Save updated data

  console.log(" Final localStorage data:", getWatchesFromLocalStorage());

  window.location.href = './index.html';

  getWatchesFromLocalStorage(watches);
}










