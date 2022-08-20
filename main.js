const cardsContainer = document.querySelector('.cards-container');
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');

const mobileMenu  = document.querySelector('.mobile-menu');
const menuButtonMobile  = document.querySelector('.menu');

const  menuOrden = document.querySelector('.navbar-shopping-cart');
const ordenMenu  = document.querySelector('.product-detail');

menuOrden.addEventListener('click',toggleDesktopOrden)
menuButtonMobile.addEventListener('click',toggleDesktopMenuMobile)
menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
    if(!ordenMenu.classList.contains('inactive')){
        ordenMenu.classList.toggle('inactive')
    }
}

function toggleDesktopMenuMobile(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
    if(!ordenMenu.classList.contains('inactive')){
        ordenMenu.classList.toggle('inactive')
    }
    
}
function toggleDesktopOrden(){
    
    ordenMenu.classList.toggle('inactive');
    
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive')
    }
    
}



const productList=[];

productList.push({
    name: 'bike',
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'pantalla',
    price: 220,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'mause',
    price: 30,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'phone',
    price: 80,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'computer',
    price: 500,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'bike',
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'pantalla',
    price: 220,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'mause',
    price: 30,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'phone',
    price: 80,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'computer',
    price: 500,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

//insertar en HTML 

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
        <p>$120,00</p>
        <p>Bike</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/ 
for (product of productList){
    const porductCard=document.createElement('div');
    porductCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.img);

    const porductInfo = document.createElement('div');
    porductInfo.classList.add('product-info');

    const porductDiv = document.createElement('div');
    const priceProduct = document.createElement('p');
    priceProduct.innerText = `$ ${product.price}`;
    const nameProduct = document.createElement('p');
    nameProduct.innerText = product.name;
    porductDiv.appendChild(priceProduct);
    porductDiv.appendChild(nameProduct);

    const porductFig = document.createElement('figure');
    const porductFigImg = document.createElement('img');
    porductFigImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    porductFig.appendChild(porductFigImg);
    

    porductInfo.appendChild(porductDiv);
    porductInfo.appendChild(porductFig);

    porductCard.appendChild(img);
    porductCard.appendChild(porductInfo);

    cardsContainer.appendChild(porductCard);

}

