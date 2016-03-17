// setup your IIFE (Immediately Invoked Function Expression)
(function () {
	
"use strict";
/*
var myVariable = "hello";
console.log("myVariable "+ myVariable);*/
/*
var myArray =[
	"my fiirst greeting",
	"my second greeting"
];*/
 
/*
var myArray =[];

myArray.push("my fiirst greeting");
myArray.push("my second greeting");


console.log(myArray[1]);*/
/*
var myArray =[
	"Hanvinder",
	"360 DUCKWORTH",
	"Barrie",
	"Ontario",
	20,
	true
];
//shift,unshift,pop, spliice

console.log(myArray.splice(4, 0,'705-970-0412')+ "\n");
console.log('name')

myArray[4] ="705-970-0412"

for (var index=0; index < myArray.length; index++){
	console.log(myArray[index]);
}*/
/*
var person ={}; /*var Person = new Objedct(); 
person.age = 40;

console.log(person.age);*/
 var output = "";
    var firstParagraph = document.getElementById("firstParagraph");

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../person.txt', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {
            var Person = {}; /* var Person = new Object();   */

            Person = JSON.parse(request.responseText);
            
            Person.sayHello = function() {
                output += "<br><hr><br>" + Person.name + " says hello";
            }

            // for every key in the Person object, loop...
            for (var key in Person) {

                // check if the key is the familyNames array
                if (key === "familyNames") {
                    output += "<br>Family Names: <br>";
                    output += "<hr><br>";
                    output += "<ul>";
                    for (var index = 0; index < Person.familyNames.length; index++) {
                        output += "<li>" + Person.familyNames[index] + "</li>";
                    } // for loop
                    output += "</ul>";
                } // if statement
                else if (key === "sayHello") {
                    Person.sayHello();
                }
                
                // for all other cases do the following...
                else {

                    output += Person[key] + "<br>";
                } // else statement

            } // for in

            firstParagraph.innerHTML = output;
        }
    });

    request.send();


})();