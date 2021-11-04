//---COȘ DE CUMPĂRĂTURI---
var carts = document.querySelectorAll(".add-cart");
let products = [
    {
        name: 'Bucur',
        tag: 'bucur',
        price: 4,
        inCart: 0
    },
    {
        name: 'Clandestin',
        tag: 'clandestin',
        price: 7,
        inCart: 0
    },
    {
        name: 'Corona',
        tag: 'corona',
        price: 5,
        inCart: 0
    },
    {
        name: 'Sapte Coline',
        tag: 'saptecoline',
        price: 8,
        inCart: 0
    },
    {
        name: 'Nenea Iancu',
        tag: 'neneaiancu',
        price: 6,
        inCart: 0
    },
    {
        name: 'Zaganu',
        tag: 'zaganu',
        price: 9,
        inCart: 0
    }
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        costTotal(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function costTotal(product){
    //console.log("Pretul lor e", product.price);
    let costCos = localStorage.getItem('costTotal');

    if(costCos != null){
        costCos = parseInt(costCos);
        localStorage.setItem("costTotal", costCos + product.price);
    }
    else{
        localStorage.setItem("costTotal", product.price);
    }
}

function arataCos(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let produseFinale = document.querySelector(".produse");
    let costCos = localStorage.getItem('costTotal');

    if( cartItems && produseFinale){
        produseFinale.innerHTML = '';

        Object.values(cartItems).map(item => {
            produseFinale.innerHTML += `
            <div class="product">
                <img class = "card_image" src="./imagini/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price},00 RON</div>
            <div class="quantity">${item.inCart}</div>
            <div class="total">${item.inCart * item.price},00RON</div>
            `;
        });

        produseFinale.innerHTML += `
            <div class = "totalCumparaturiContainer">
                <h4 class="totalCumparaturiTitlu">
                    Total preț cumpărături
                </h4>
                <h4 class="totalCumparaturi">
                    ${costCos},00RON
                </h4>
        `;
    }
}

onLoadCartNumbers();
arataCos();

//---FORMULAR---
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let formOk = false;

const form = document.querySelector('form');
const multu = document.querySelector('.multumim');
const numeInput = document.querySelector('input[name="nume"]');
const emailInput = document.querySelector('input[name="email"]');
const telInput = document.querySelector('input[name="telefon"]');
const adresaInput = document.querySelector('input[name="adresa"]');

const inputs = [
    numeInput,
    emailInput,
    telInput,
    adresaInput
]

const resetElement = (element) => {
    element.classList.remove("invalid");
    element.nextElementSibling.classList.add("hidden");
};

const invalidateElement = (element) => {
    element.classList.add("invalid");
    element.nextElementSibling.classList.remove("hidden");
};

const validare = () => {
    inputs.forEach(resetElement);

    formOk = true;

    if(!numeInput.value){
        invalidateElement(numeInput);
        formOk = false;
    }
    if(! isValidEmail(emailInput.value)){
        invalidateElement(emailInput);
        formOk = false;
    }
    if(! isValidPhone(telInput.value)){
        invalidateElement(telInput);
        formOk = false;
    }
    if(!adresaInput.value){
        invalidateElement(adresaInput);
        formOk = false;
    }
};

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validare();

    if(formOk){
        form.remove();
        multu.classList.remove('hidden');
    }
});

inputs.forEach(input => {
    input.addEventListener("input",() => {
        validare();
    });
});
