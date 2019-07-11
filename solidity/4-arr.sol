struct Person {
  uint age;
  string name;
}

Person[] public people;


// create a New Person:
Person satoshi = Person(172, "Satoshi");

// Add that person to the Array:
people.push(satoshi);


// SIMPLY PUT
people.push(Person(172, "satoshi"))