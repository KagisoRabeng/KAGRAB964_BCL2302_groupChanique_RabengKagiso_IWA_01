const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0' 
let location = 'RSA'
let customers = '1'
let currency = null 
let shipping = null

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED


if (location === 'RSA') {
    currency = 'R'
    shipping = 400
  } else if (location === 'NAM') {
    currency = '$'
    shipping = 600
  } else if (location === 'NK') {
    shipping = null  
    currency = null
    console.log(BANNED_WARNING);
  } else {
    currency = '$'
    shipping = 800
  }


const totalPrice = toys + shoes + batteries + pens + shirts
const totalCost = totalPrice + shipping
if (totalPrice >= 1000 && (location === 'RSA' || location === 'NAM')) {  //added the value of 1000
        if(customers === 1) {
            shipping = 0
        } else {
            console.log(FREE_WARNING)
        }
}
console.log('price', currency,totalCost)

