//declaring avatar with generic string
let avatar = 'generic';
//declaring skill to use in one of the functions below
let skill = 1.0;
//declaring variable to hold points per level
let pointsPerLevel = 1000;
//declaring variable to store user points
let userPoints = 2008;

//random function to get points and return random string
function getAvatar(points) {
    //declaring variable--to calculate level and store level
    let level = points / pointsPerLevel;
    console.log("This is 2nd: " + level);

    //check level and return following string pertaining to level
    if (level == 0) {
        return "Teddy Bear";
    } else if (level == 1) {
        return "Cat";
    } else if (level >= 2) {
        return "Gorilla";
        
    }
}

//random function to update points
function updatePoints(bonus, newPoints) {
    let i = 0;
    while (i < bonus) {
        newPoints = newPoints + skill * bonus;
        i = i + 1;
    }
    return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
console.log ("This is 1st: " + userPoints);
avatar = getAvatar(2112);
console.log ("This is 3rd: " + avatar);
