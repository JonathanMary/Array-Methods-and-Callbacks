import { fifaData } from './fifa.js';

/*
Stretch 1:
Create a function that takes country initials as a parameter and returns their total number of World Cup appearances.
*/
//console.log(fifaData[0]);

function countryCode(initials){
    const result = [];

    function findCode(value){
        let home = value["Home Team Initials"];
        let away = value["Away Team Initials"];
        return (home || away) === initials;
    }
    const allGames = fifaData.filter(findCode);

    function findYears(value){
        if(result[result.length-1] !== value["Year"]){
            result.push(value["Year"]);
        }
    }
    allGames.forEach(findYears);
    return result.length;
    //return total number of world cup appearances
}

//console.log(countryCode("MEX"));  //returns number of appearances (years) of MEXico in world cup.

