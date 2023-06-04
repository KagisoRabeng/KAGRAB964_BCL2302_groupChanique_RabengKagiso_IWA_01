// @ts-check

/**
* @type {boolean}
* Indicates whether the nickname is available or not
*/
 const nickname= false;

 /**
 * @type {string}
 * The person's first name
 */
 const firstname = "Timothy";

// console.log(`Good Morning, ${nickname || firstname}`)

const names = nickname + firstname
if (names) {
    console.log(`Good Morning, ${nickname || firstname}!`)
}