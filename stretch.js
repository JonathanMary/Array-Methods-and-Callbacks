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


/* Stretch 2:
Account for ties in your 'finals' data set
!! Did it in the index.js, need to uncomment and the good worldcup winners will show.*/

/* Stretch 3:
Create a function that takes country initials as a parameter 
and determines how many goals that country has scored in World Cup games since 1930. */

function countryTotGoals(initials){
    //total goals counter.
    let total = 0;

    function findCode(value){
        let home = value["Home Team Initials"];
        let away = value["Away Team Initials"];

        //check for country initials, then add it to total;
        if (home === initials){
            total += value["Home Team Goals"];
        }else if (away === initials){
            total += value["Away Team Goals"];
        }
    }
    const allGames = fifaData.forEach(findCode);
    
    return total;
}

//console.log(countryTotGoals("FRA")); //returns total goals scored by FRA over all world cup games played.