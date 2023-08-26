document.getElementById('card-1').addEventListener('click', function () {
    cardItemOne("K. Accessories")
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const total = parseFloat(totalPriceString);

    const firstTaka = document.getElementById('first-taka');
    const firstTakaString = firstTaka.innerText;
    const first = parseFloat(firstTakaString);

    const totalTaka = total + first;
    totalPrice.innerText = totalTaka;
})
document.getElementById('card-2').addEventListener('click', function () {
    cardItemOne("K. Accessories")
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const total = parseFloat(totalPriceString);

    const firstTaka = document.getElementById('second-taka');
    const firstTakaString = firstTaka.innerText;
    const first = parseFloat(firstTakaString);

    const totalTaka = total + first;
    totalPrice.innerText = totalTaka;
})
document.getElementById('card-3').addEventListener('click', function () {
    cardItemOne("Home Cooker")
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const total = parseFloat(totalPriceString);

    const firstTaka = document.getElementById('third-taka');
    const firstTakaString = firstTaka.innerText;
    const first = parseFloat(firstTakaString);

    const totalTaka = total + first;
    totalPrice.innerText = totalTaka;
})
document.getElementById('card-4').addEventListener('click', function () {
    cardItemOne("Single Relax Chair")
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const total = parseFloat(totalPriceString);

    const firstTaka = document.getElementById('fourth-taka');
    const firstTakaString = firstTaka.innerText;
    const first = parseFloat(firstTakaString);

    const totalTaka = total + first;
    totalPrice.innerText = totalTaka;
})
document.getElementById('card-5').addEventListener('click', function () {
    cardItemOne("Children play")
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const total = parseFloat(totalPriceString);

    const firstTaka = document.getElementById('fifth-taka');
    const firstTakaString = firstTaka.innerText;
    const first = parseFloat(firstTakaString);

    const totalTaka = total + first;
    totalPrice.innerText = totalTaka;
})
document.getElementById('card-6').addEventListener('click', function () {
    cardItemOne("Flexible Sofa")
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const total = parseFloat(totalPriceString);

    const firstTaka = document.getElementById('sixth-taka');
    const firstTakaString = firstTaka.innerText;
    const first = parseFloat(firstTakaString);

    const totalTaka = total + first;
    totalPrice.innerText = totalTaka;
})
function cardItemOne(areaType) {
    const accessoriesFirstItem = document.getElementById('accessories-1');
    const elementCount = accessoriesFirstItem.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${elementCount + 1}. ${areaType} `

    accessoriesFirstItem.appendChild(p);
}
document.getElementById('apply-btn').addEventListener('click', function(){
    const inputField = document.getElementById('apply-input');
    if(inputField.value === "SELL200"){
        const totalPrice = document.getElementById('total-price');
        const totalPriceString = totalPrice.innerText;
        const total = parseFloat(totalPriceString);

        const discountPrice = document.getElementById('discount-price');
        const discountPriceString = discountPrice.innerText;
        const discount = parseFloat(discountPriceString);

        const allTotalPrice = document.getElementById('all-total-price');
        const allTotalPriceString = allTotalPrice.innerText;
        const afterString = parseFloat(allTotalPriceString);

        const finalDiscountedAmount = total * (20/100);
        const afterDiscount = finalDiscountedAmount + discount;
        const twoDigit = afterDiscount.toFixed(2);
        discountPrice.innerText = twoDigit;

        const totalAmount = total - afterDiscount;
        const twoDigits = totalAmount.toFixed(2);
        allTotalPrice.innerText = twoDigits;
    }
    else{
        alert('please enter a valid coupon')
    }
    inputField.value = '';
})

document.getElementById('apply-input').addEventListener('input', 
        function (){
            const applybtn = document.getElementById('apply-btn')
            const inputField = document.getElementById('apply-input');
            
        const totalPrice = document.getElementById('total-price');
        const totalPriceString = totalPrice.innerText;
        const total = parseFloat(totalPriceString);
            if(total >= 200){
                applybtn.removeAttribute('disabled');
            }
            else{
                applybtn.setAttribute('disabled', true)
            }
        })

document.addEventListener('click', 
    function(){
        const makePurchase = document.getElementById('make-purchase');

        const totalPrice = document.getElementById('total-price');
        const totalPriceString = totalPrice.innerText;
        const total = parseFloat(totalPriceString);

        if(total > 0){
            makePurchase.removeAttribute('disabled');
        }else{
            makePurchase.setAttribute('disabled', true);
        }
})

document.getElementById('go-home').addEventListener('click', function(){
    window.location ='index.html';
})