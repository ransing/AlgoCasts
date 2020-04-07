// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // aMap = buildCharMap(a);
    // bMap = buildCharMap(b)

    // if(Object.keys(aMap).length !== Object.keys(bMap)){
    //     return false 
    // }

    // for (let char in aMap){
    //     if (aMap(char) !== bMap(char)){
    //         return false 
    //     }
    //  return true 
    // }
    // }

    // function buildCharMap(str){
    //     const charMap = {}
    //     for (let char of str){
    //         charMa[char] = charMap + 1 || 1;
    //     }
    //     return charMap;
    //     }

    // let a = buildCharMap(stringA.replace(/[^\w]/g, "").lowercase())
    // let b = buildCharMap(stringB.replace(/[^\w]/g, "").lowercase())

    // aMap = buildCharMap(stringA);
    // bMap = buildCharMap(stringB)

    // if(Object.keys(aMap).length !== Object.keys(bMap).length){
    //     return false 
    // }
    // for (let char in aMap){
    //     if(aMap[char] !== bMap[char]){
    //         return false 
    //     }
    // }
    // return true 

    // }

    // function buildCharMap(str){
    //     const charMap = {};
    //     for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
    //         charMap[char]= charMap[char] + 1 || 1
    //      }
    //      return charMap

    return cleanStr(stringA) === cleanStr(stringB)
    

    }

    function cleanStr(str){
        return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    }






module.exports = anagrams;
