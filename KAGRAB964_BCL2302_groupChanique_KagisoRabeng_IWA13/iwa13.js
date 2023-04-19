let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
  const isString = typeof calculated === 'string' //removed numerical
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated
  calculated = calculatedAsNumber + 1 
}

const calcUser = () => { //
  logCalc() 
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// function logCalc(){
//   isString = typeof calculated === 'numerical-string' 
//   calculatedAsNumber = isString ? calculated : parseNumber(calculated)
//   calculated = calculatedAsNumber + 1 
// }end execution of fun


// function calcUser(){
//   if(calculated < 2){
//     user = 'John';

//     state = 'requesting';


//   }else if(calculated > 3){

//     state = 'idle';

//   }
// }



// function checkUser(){
//   if(user && state === 'requesting'){

//     console.log(`User: ${user} (${calculated})`)
    
//   }
// }

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

