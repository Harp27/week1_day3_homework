////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++){
    console.log(i);
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
    console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
} else if (i % 3 === 0) {
    console.log("fizz");
} else if (i % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(i);
}
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++
console.log(plantee);

wolfy[3] = "Gotham City";
console.log(wolfy);

dart.push("Hawkins");
console.log(dart);

wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);

favMovies.sort();
console.log(favMovies);

favMovies.pop();
console.log(favMovies);

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

//unshift adds a specified elements to the array and returns the new length of the array

const index = favMovies.indexOf("Django Unchained");
favMovies.splice(index, 1, "Avatar");
console.log(favMovies);

const halfIndex = Math.floor(favMovies.length / 2);
const lastHalf = favMovies.slice(halfIndex);
console.log(lastHalf);

console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));

// Was able to get Fast and furious, not sure where I missed it?
// supposed to return -1

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);


////////////////////////////////
//  Excited Kitten
////////////////////////////////
const catPhrase = "Love me, pet me! HSSSSS!";
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSS!");
    if (i % 2 === 0) {
        let randomIndex = Math.floor(Math.random() * kittyTalk.length);
        console.log(kittyTalk[randomIndex]);
    }
    }

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort(function(a, b) {
    return a - b;
});
const middleIndex = Math.floor(nums.length / 2);

if (nums.length % 2 === 0) {
    const median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
    console.log(median);
} else {
    console.log(nums[middleIndex]);
}
