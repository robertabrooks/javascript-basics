/* this is our application coe */
"use strict";

var name = 'Bobby';

var fruits = ['apple', 'banana', 'pear', 'kiwi', 'pineapple', 'orange'];
fruits.push('mango');

for (var i = 0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}

function sayHello(name) {
    alert('Hello ' + name);
}

function onReady() {
    var elem = document.getElementById('message');
    elem.innerHTML = 'Hello ' + name;

    var nameInput = document.getElementById('name-input');
    nameInput.value = name;

    nameInput.addEventListener('keyup', function() {
        elem.innerHTML = 'Hello ' + nameInput.value;
    });

    var fruitsList = document.getElementById('fruits-list');
    fruits.forEach(function(fruit) {
        var fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruit;
        fruitsList.appendChild(fruitLi);
    });

    var animalPic = document.getElementById('animal-pic');
    animalPic.addEventListener('click', function() {
        var animalSound = document.getElementById('animal-sound');
        animalSound.play();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
});




























