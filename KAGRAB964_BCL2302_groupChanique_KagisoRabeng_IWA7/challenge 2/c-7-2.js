 const nickname= false;
 const firstname = "Timothy";

// console.log(`Good Morning, ${nickname || firstname}`)

const names = nickname + firstname
if (names) {
    console.log(`Good Morning, ${nickname || firstname}!`)
}