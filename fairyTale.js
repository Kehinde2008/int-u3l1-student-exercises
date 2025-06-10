// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let favoritePlace; 
favoritePlace = "beach";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let favoriteCreatureName;
favoriteCreatureName = "turtle";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let favoriteColor;
favoriteColor = "brown";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let favoriteColor2;
favoritecolor2 = "lightpink";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let favoriteEmotion;
favoriteEmotion = "energetic";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let favoriteCharacter;
favoriteCharacter ="GwanSik";
// 7. Create a variable named `number` and set the value to a number greater than 1.
let favoriteNumber;
favoriteNumber = "24";
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let favoriteItem;
favoriteItem = "henna";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let favoriteItem2;
favoriteItem2 = "lotion";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let favoriteVerb;
favoriteVrb = "sleep";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let favoriteAdverb;
favoriteAdverb = "slowly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let favoriteNumber2;
favoriteNumber2 = "18";





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = favoritePlace;
    document.querySelector(".creature-name").innerHTML = favoriteCreatureName;
    document.querySelector(".color").innerHTML = favoriteColor;
    document.querySelector(".color-2").innerHTML = favoriteColor2;
    document.querySelector(".emotion").innerHTML = favoriteEmotion;
    document.querySelector(".character").innerHTML = favoriteCharacter;
    document.querySelector(".creature-name-again").innerHTML = favoriteCreatureName;
    document.querySelector(".number").innerHTML = favoriteNumber;
    document.querySelector(".item").innerHTML = favoriteItem;
    document.querySelector(".character-again").innerHTML = favoriteCharacter;
    document.querySelector(".item-2").innerHTML = favoriteItem2;
    document.querySelector(".verb").innerHTML = favoriteVerb;
    document.querySelector(".adverb").innerHTML = favoriteAdverb;
    document.querySelector(".number-2").innerHTML = favoriteNumber2;
    document.querySelector(".story-container").style = "display:block";
});
