const vibes = [
    ' You are amazing!',
    ' You can handle today!',
    ' Have a wonderful day!',
    ' Wish you nothing but the best!',
    ' Work hard!'
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
