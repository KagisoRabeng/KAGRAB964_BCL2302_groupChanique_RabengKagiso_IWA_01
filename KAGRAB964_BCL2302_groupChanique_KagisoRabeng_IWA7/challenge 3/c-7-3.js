const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(-1* leoBalance) + parseFloat(-1* sarahBalance)
const leo = `${leoName}\t${(leoSurname).trim()} (Owed :R ${-1* parseFloat(leoBalance).toFixed(2)})`
const sarah = `\n${(sarahName).trim()}\t${sarahSurname}\t(Owed:R ${-1* parseFloat(sarahBalance).toFixed(2)})\n`
const total = `\n\tTotal amount owed: R ${(owed).toFixed(2)}`
const result = leo + sarah + divider + total + `\n${divider}`

console.log(result)