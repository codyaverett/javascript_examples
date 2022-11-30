/*
 *  1. Write a function which takes an array of objects containing user information,
 *    and returns an object mapping the 'id' to the object containing the user information.
 */

const INPUT = [
    {id: 2, first_name: 'Aanya', last_name: 'Shaw'},
    {id: 1, first_name: 'Hayleigh', last_name: 'Terry'},
    {id: 3, first_name: 'Veronica', last_name: 'Phillips'},
    {id: 6, first_name: 'Bert', last_name: 'Phillips'},
    {id: 4, first_name: 'Drew', last_name: 'Shaw'},
    {id: 5, first_name: 'Autumn', last_name: 'Finnegan'}
];

const EXPECTED_OUTPUT_1 = {
    1: {id: 1, first_name: 'Hayleigh', last_name: 'Terry'},
    2: {id: 2, first_name: 'Aanya', last_name: 'Shaw'},
    3: {id: 3, first_name: 'Veronica', last_name: 'Phillips'},
    4: {id: 4, first_name: 'Drew', last_name: 'Shaw'},
    8: {id: 8, first_name: 'Autumn', last_name: 'Finnegan'},
    6: {id: 6, first_name: 'Bert', last_name: 'Phillips'}
};


// Function goes here



// Array<{id: number; first_name: string; last_name: string;}>
function getMappedUsers(users: typeof INPUT) {
  
  return users.reduce((acc, current) => {
		
    return {
			...acc,
      [current.id]: current
      // [current.id]: {
      //   //...current
      //   first: current.first_name,
      //   last: current.last_name
      // }
    };
    
  }, {});
  
}















/*
 * 2. Using the same INPUT as above, write a function that returns the user information with the 'id' removed.
 */

const INPUT = [
    {id: 2, first_name: 'Aanya', last_name: 'Shaw'},
    {id: 1, first_name: 'Hayleigh', last_name: 'Terry'},
    {id: 3, first_name: 'Veronica', last_name: 'Phillips'},
    {id: 6, first_name: 'Bert', last_name: 'Phillips'},
    {id: 4, first_name: 'Drew', last_name: 'Shaw'},
    {id: 5, first_name: 'Autumn', last_name: 'Finnegan'}
];

const EXPECTED_OUTPUT_2 = {
    1: {first_name: 'Hayleigh', last_name: 'Terry'},
    2: {first_name: 'Aanya', last_name: 'Shaw'},
    3: {first_name: 'Veronica', last_name: 'Phillips'},
    4: {first_name: 'Drew', last_name: 'Shaw'},
    5: {first_name: 'Autumn', last_name: 'Finnegan'},
    6: {first_name: 'Bert', last_name: 'Phillips'}
};

// Function goes here

