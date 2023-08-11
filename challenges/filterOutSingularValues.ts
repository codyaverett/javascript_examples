
const list = [1,1,2,3,4,3,4,5,4];
const expected = [1,1,3,4,3,4,4];

function xyz(list: Array<number>): Array<number> {
    
    const numberMap: Record<number,number> = list.reduce((acc, curr) => {

        // count the number of times each number appears in the list
        return {
            ...acc,
            [curr]: acc[curr] ? acc[curr] + 1 : 1
        } 

    }, {});
    
    // filter out the numbers that appear more than once
    return list.filter((item) => numberMap[item] !== 1);
    
}


console.log(xyz(list));



// function xyz2(list: Array<number>): Array<number> {
    
//     const uniqueNumbers: Set<number> = new Set();

//     for(let i = 0; i < list.length; i++) {
            
//         for(let j = list.length; j > i; j--) {
//             list.splice
//             if(list[i] === list[j]) {
//                 uniqueNumbers.add(list[i]);
//             }
//         }
//     }
    
// }

// console.log(xyz(list));
