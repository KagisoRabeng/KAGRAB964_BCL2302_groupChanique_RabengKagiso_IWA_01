const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || `ID ${futureId} not created yet`) //the console.log gives the output of checking where the futureId(9) is included in the holidays,
const copied= holidays[6].date
const update= { name: 'X-mas Day' ,date:(`25 December ${currentYear}`)}
correctDate = new Date(update.date)
correctDate.setHours(0)
correctDate.setMinutes(0)

//console.log(update)
isEarlier = copied.date !== correctDate || correctDate
console.log('New date is earlier:' ,isEarlier)
if(isEarlier) {copied.date !== correctDate}
console.log('ID change:' ,correctDate > holidays[6].date)
console.log('Name changed:' ,update.name)
console.log(`Date change: ${correctDate.getDate()}/${(correctDate.getMonth()+1)}/${correctDate.getFullYear()}`)

//Fixing a day of reconciliation
let dayOfReconciliation = new Date(holidays[0].date);

//console.log (dayOfReconciliation)
const firstHolidayTimestamp = Math.min(
    dayOfReconciliation,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,)

//console.log(firstHolidayTimestamp)
let minDate = new Date(firstHolidayTimestamp)
console.log('First Holiday:' ,minDate.toLocaleDateString("en-ZA"))
const lastHolidayTimestamp = Math.max(
    dayOfReconciliation,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,)

let maxDate= new Date(lastHolidayTimestamp)
console.log('lastHoliday:' ,maxDate.toLocaleDateString("en-ZA")) //

const randomHolidayIndex = Math.floor(Math.random() * 9)
const randomHoliday = holidays[randomHolidayIndex]
const randomHolidayDate = randomHoliday.date instanceof Date ?
  `${randomHoliday.date.getDate().toString().padStart(2, '0')}/` +
  `${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/` +
  `${randomHoliday.date.getFullYear()}` :
  randomHoliday.date
console.log (randomHolidayDate)