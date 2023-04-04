const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0' 
let location = 'RSA'
let customers = '1'
let currency = 'R' || '$' 
let shipping = null



if (location) { shipping === 400 && currency === 'R' }

if (location = 'NAM') {
	shipping = 600
} 
else {
(shipping = 800)
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

if (shoes + batteries + pens + shirts + toys > 1000) {
	shipping = 0
} 
else {
	shipping = shipping + 400
}

	if (location = 'NAM' && customers < 2) {
		shipping = null
		currency = '$'
		}
		else {
			shipping = 600
		}
			if (location = 'RSA') {
				currency = 'R'
				shipping = 0
		}
		


if (shipping = 0 && customers !== 1) { console.log(FREE_WARNING) }
location = 'NK'
if (location) {BANNED_WARNING}

console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)
