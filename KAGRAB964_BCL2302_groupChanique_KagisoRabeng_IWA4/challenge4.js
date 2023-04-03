const date = 2050 //changed the date to the year
const status = 'parent' //changed the status from student to parent
let count = 0

if (date) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
    let date = 'April'
	console.log( date, 'Family Day')
	console.log( date, 'Freedom Day')
	count = + 4

    //changed the date to year, replaced the let keyword count 

	if (status === "student") {
	  console.log('June', 'Youth Day')
	  count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3

    //changed the date to year, replaced the let keyword count 

	if (status === "parent") {
	  console.log(date, 'Christmas Day')
	  count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)