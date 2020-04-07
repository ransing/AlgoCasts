// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //? first solution 
    // const arr = str.split("")
    // arr.reverse();
    // const newArr = arr.join("")
    // return newArr

    // const arr = str.split("")
    // arr.reverse();
    // const newArr = arr.join("")
    // return newArr


    //! short solution 
    // return str.split("").reverse().join("")
    // return str.split("").reverse().join()

    //! another possible solution 
    // let reversed = "";
    // for (let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed 

    //!last solution 
    str.split("").reduce((reversed, character)=>{
        return character + reversed; 
    }, '');
}


module.exports = reverse;
