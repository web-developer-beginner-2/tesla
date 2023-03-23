let buttons = document.querySelectorAll('.item button')
 let priceee = document.querySelector('.price')
let picture = document.querySelector('.teslapicture')
let power = document.querySelector('.power')
let change = {
    black:'img/image 10.png',
    white:"img/image 9.png",
    beige:'img/image 8.png'
}
let pric = {
  blackprice:'$89.990',
  whiteprice:'$92.000',
  beigeprice:'$95.000'
}


buttons.forEach(button => {
    button.onclick = () => {
      let keyprice = button.getAttribute('data-price')
      let key = button.getAttribute('data-color')
      picture.src = change[key]
     priceee.innerHTML = pric[keyprice]
    }
})