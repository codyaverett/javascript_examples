
/**
 * Write a function that, given two strings (s and t), 
 * returns true IF t is an anagram of s and false otherwise.
 * 
 * Definition of Anagram: An Anagram is a word that can be formed
 * by rearranging the letters of a different word.
 * 
 * Example: Given the input "heart" and "earth", the function 
 * should return true because the letters of "earth" can be rearranged to form "heart".
 */

function isAnagram(s: string, t: string): boolean {

    if(s.length != t.length) {
        return false;
    }

    // Is sorted string equivilant
    return t.split('').sort().join() === s.split('').sort().join();
}
    // const reducer = (prev, current) => {
    //     return {
    //         ...prev, 
    //         [current]: prev[current] ? prev[current] + 1 : 1 
    //     };
    // };

    // const sVals: Record<string, number> = s.split('').reduce(reducer, {});
    // const tVals: Record<string, number> = t.split('').reduce(reducer, {}); 

    // Object.entries(sVals).forEach(([key, value]) => {
    //     if(!(tVals[key] === value)) {
    //         return false;
    //     }
    // });
}

isAnagram("e", "e"); //? 
isAnagram("wwa", "waw"); //?
isAnagram("dog", "god"); //?
isAnagram("woopo", "werererrrr"); //?
isAnagram("efarthhf", "hearthhd"); //? 
isAnagram("efarthhh", "hearthhasdfdf"); //?

