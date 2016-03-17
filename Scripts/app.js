// setup your IIFE (Immediately Invoked Function Expression)
/*(function () {
	
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

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../people.txt', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {
            var people = {};
            people = JSON.parse(request.responseText);

            // declare our address array
            var addressBook = []; /* var addressBook = new Array(); */

            // read in the data from person.txt file
            addressBook = people.addressBook;

            var addressBookLength = addressBook.length;

            // for each person in our addressbook....loop
            for (var person = 0; person < addressBookLength; person++) {
                // reset the string variable
                var output = "";
                // assign the sayHello method to each person object
                addressBook[person].sayHello = function() {
                    output += "<br><hr><br>" + addressBook[person].name + " says hello";
                }

                // for every key in the Person object, loop...
                for (var key in addressBook[person]) {

                    // check if the key is the familyNames array
                    if (key === "familyNames") {
                        output += "<br>Family Names: <br>";
                        output += "<hr><br>";
                        output += "<ul>";
                        for (var index = 0; index < addressBook[person].familyNames.length; index++) {
                            output += "<li>" + addressBook[person].familyNames[index] + "</li>";
                        } // for loop
                        output += "</ul>";
                    } // if statement
                    else if (key === "sayHello") {
                        addressBook[person].sayHello();
                    }

                    // for all other cases do the following...
                    else {

                        output += addressBook[person][key] + "<br>";
                    } // else statement

                } // for in
                
                var paragraphString = "paragraph" + (person + 1);
                console.log(paragraphString);
                
                var paragraph = document.getElementById(paragraphString)
                paragraph.innerHTML = output;


            } // outer for loop




        }


    });

    request.send();


})(); /* var Person = new Object();   */
/*
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