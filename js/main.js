let elBTN1 = document.querySelector('.btn1');
let elCount = document.querySelector('.item-counter')
let elBTN2 = document.querySelector('.btn2')
let elItemPrice = document.querySelector('.money');
let elFullPrice = document.querySelector('.fullprice');
let elAddBtn = document.querySelector('.addBTN')


//////// add item

elBTN1.addEventListener ( 'click', () => {

    console.log ('тик');
    
    const b = elCount.innerText;
    elCount.innerText = ++elCount.innerText ;

    
    const d = elItemPrice.innerText;

    elFullPrice.innerHTML =  b*d;
});

elBTN1.addEventListener ( 'click', () => {

    console.log ('тик');
    
    const b = elCount.innerText;
    

    
    const d = elItemPrice.innerText;

    elFullPrice.innerHTML =  b*d;
});

//////// add item


/////// delete item

elBTN2.addEventListener ( 'click', () => {

    console.log ('тик');
    
    const b = elCount.innerText;
    if (parseInt(elCount.innerText) > 0 ){
        elCount.innerText = --elCount.innerText ;
    }
});


elBTN2.addEventListener ( 'click', () => {

    console.log ('тик');
    
    const b = elCount.innerText;
    const d = elItemPrice.innerText;

    elFullPrice.innerHTML =  b*d;
});

/////// delete item



/// add to card

window.addEventListener('click', function(event)
{
    if (event.target.hasAttribute('addbtn')){

        console.log('тиць у кошик')
    }
});

/// add to card


