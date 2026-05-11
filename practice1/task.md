<!-- Step 1
In this workshop, you will build a simple wildlife tracker using JavaScript objects.

Here is an example of an object:

Example Code
const animal = {}; // empty object
This creates an empty object.

Now create a variable named tiger and assign it an empty object. -->

<!-- Step 2
For this wildlife tracker, you will update an object with new properties.

Here is an example of creating an object with a property:

Example Code
const animal = {
  name: "Lion" // property: value
};
Now update the tiger object so it includes a property called species.

Set its value to "Tiger". -->

<!-- Step 3
Now update your tiger object by adding a new property called age.

Set the age property to the value 5. -->

<!-- Step 4
Now add another property to the tiger object called isEndangered.

Set the isEndangered property to true. -->

<!-- Step 5
Now create a second object called elephant.

Add the following properties:

species with the value "Elephant"
age with the value 10
isEndangered with the value true -->

<!-- Step 6
In this step, you will create a function to access the species property of an object.

Here is a small example of accessing a property from an object:

Example Code
const dog = {
  species: "Dog"
};
const getAnimalSpecies = (pet) => {
  return pet.species; // access species using dot notation
};
console.log(getAnimalSpecies(dog)); // Dog
In this example, the function takes an object as a parameter and returns its species property.

Now create a function called getSpecies.

The function should take one parameter named animal.

Return the species property of the animal using dot notation.

After creating the function, use console.log to call getSpecies(tiger) so you can see the result in the console. -->
<!--
Step 7
In this step, you will create a function to access the age property of an object.

Here is an example:

Example Code
const cat = {
  age: 3
};

const getAnimalAge = (pet) => {
  return pet.age; // access age using dot notation
}

console.log(getAnimalAge(cat)); // 3
In this example, the function takes an object as a parameter and returns its age property.

Now create a function called getAge.

The function should take one parameter named animal.

Return the age property of the animal using dot notation.

After creating the function, use console.log to call getAge(tiger) so you can see the result in the console. -->
<!--
Step 8
In this step, you will create a function that adds a new property to an object.

Here is an example of adding a property inside a function:

Example Code
const cat = {
  species: "Cat"
};

const addColor = (pet, color) => {
  pet.color = color; // add new property using dot notation
  return pet; // return the updated object
}

console.log(addColor(cat, "White"));
// {
//   species: 'Cat',
//   color: 'White'
// }
In this example, the color property is added to the cat object.

Now create a function called addHabitat. The function should take two parameters: animal and habitat.

Inside the function, add a new property called habitat to the animal object. Set its value equal to the habitat parameter.

Return the updated animal object.

After creating the function, use console.log to call addHabitat(tiger, "Rainforest") so you can see the updated tiger object in the console. -->

<!-- Step 9
In this step, you will create a function that updates a property of an object.

Here is an example of updating a property inside a function:

Example Code
const dog = {
  age: 4
};

const changeAge = (pet, updatedAge) => {
  pet.age = updatedAge; // update existing property using dot notation
  return pet; // return the updated object
}


Step 10
In this step, you will create a function that removes a property from an object.

Here is an example of removing a property using delete:

Example Code
const bird = {
  species: "Parrot",
  canFly: true
};

const removeFlight = (pet) => {
  delete pet.canFly; // remove property using delete keyword
  return pet; // return the updated object
};

console.log(removeFlight(bird));
// { species: "Parrot" }
In this example, the canFly property is removed from the bird object.

Now create a function called removeEndangeredStatus. The function should take one parameter named animal.

Inside the function, remove the isEndangered property from the animal object using the delete keyword. Return the updated animal object.

After creating the function, use console.log to call removeEndangeredStatus(tiger) so you can see the updated object in the console.

console.log(changeAge(dog, 6)); // { age: 6 }
In this example, the age property is updated to a new value.

Now create a function called updateAge. The function should take two parameters: animal and newAge.

Inside the function, update the age property of the animal object to newAge. Return the updated animal object.

After creating the function, use console.log to call updateAge(elephant, 12) so you can see the updated elephant object in the console. -->

<!--
Step 11
In this step, you will create a function that checks whether an object has a specific property.

Here is an example of using hasOwnProperty:

Example Code
const cat = {
  species: "Cat",
  color: "White"
};

const dog = {
  species: "Dog",
  weight: 50
};

const hasColor = (pet) => {
  return pet.hasOwnProperty("color"); // check if "color" property exists
};

console.log(hasColor(cat)); // true
console.log(hasColor(dog)); // false
In this example, the hasColor function uses hasOwnProperty to check whether the color property exists on an object.

Now create a function called hasHabitat. The function should take one parameter named animal.

Use the hasOwnProperty method to return true if the animal object has a property called "habitat" and false otherwise.

After creating the function, use console.log to call hasHabitat(tiger) and hasHabitat(elephant) so you can see both results in the console. -->

<!-- Step 12
In this final step of the Wildlife Tracker workshop, you will create a function that accesses a property of an object using bracket notation.

Here is an example of accessing a property using bracket notation:

Example Code
const cat = {
  species: "Cat",
  age: 3
};

const property = "species";

console.log(cat[property]); // "Cat"
In this example, bracket notation allows you to access a property using a variable.

Now create a function called getProperty.

The function should take two parameters: animal and propertyName.

Return the value of the property using bracket notation.

After creating the function, use console.log to call getProperty(tiger, "species") and getProperty(elephant, "age") so you can see the returned values in the console.

With that, the Wildlife Tracker workshop is complete! -->
