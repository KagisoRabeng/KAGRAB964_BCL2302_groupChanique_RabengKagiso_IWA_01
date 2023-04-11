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
		shipping = 400
		currency = 'R'
	} 
	else {
		shipping = location === 'NAM'? 600 : 800
		currency = '$'
	}
 
			
		if (shipping = 0 && customers !== 1) { console.log(FREE_WARNING) }
		location = 'NK'

		if (location) {console.log(BANNED_WARNING)}

console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)
