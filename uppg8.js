function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument
  const people = [
    { name: "Isak", age: 26 },
    { name: "Alex", age: 31 },
    { name: "Robert", age: 50 },
    { name: "Tommy", age: 30 },
    { name: "Johan", age: 15 },
  ];
  function printNamesOfPeopleOver30(people) {
    people.forEach((person) => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  }

  printNamesOfPeopleOver30(people);
}

module.exports = { uppg8 };
