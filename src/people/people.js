const people = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    country: "USA",
    language: "en",
    favoritePet: "Dog",
  },
  {
    id: 2,
    name: "Carlos",
    age: 30,
    country: "Spain",
    language: "es",
    favoritePet: "Cat",
  },
  {
    id: 3,
    name: "Yuki",
    age: 23,
    country: "Japan",
    language: "ja",
    favoritePet: "Rabbit",
  },
  {
    id: 4,
    name: "Ahmed",
    age: 30,
    country: "Egypt",
    language: "ar",
    favoritePet: "Parrot",
  },
  {
    id: 5,
    name: "Sophie",
    age: 22,
    country: "France",
    language: "fr",
    favoritePet: "Hamster",
  },
  {
    id: 6,
    name: "Ravi",
    age: 31,
    country: "India",
    language: "hi",
    favoritePet: "Turtle",
  },
  {
    id: 7,
    name: "Remy",
    age: 26,
    country: "France",
    language: "fr",
    favoritePet: "Ferret",
  },
  {
    id: 8,
    name: "Liam",
    age: 29,
    country: "Canada",
    language: "en",
    favoritePet: "Goldfish",
  },
  {
    id: 9,
    name: "Isabella",
    age: 24,
    country: "Brazil",
    language: "pt",
    favoritePet: "Guinea Pig",
  },
  {
    id: 10,
    name: "Cheng",
    age: 27,
    country: "China",
    language: "zh",
    favoritePet: "Snake",
  },
];

export default ({ property = null, value = null }, context) => {
  if (property && value) {
    if (property === "id" || property === "age") {
      const numValue = parseInt(value);

      if (!isNaN(numValue) && Number.isInteger(numValue)) {
        const filteredPeople = people.filter(
          (person) => person[property] === numValue
        );
        return filteredPeople;
      } else {
        throw new Error(
          "Invalid value for 'id' or 'age'. Must be a valid integer."
        );
      }
    }

    const filteredPeople = people.filter(
      (person) => person[property] === value
    );
    return filteredPeople;
  }

  return people;
};
