// Write your code here
class Rating {
  constructor(stars) {
    this.stars = stars;
  }
}

class ReleaseYear {
  constructor(year) {
    this.year = year;
  }
}

class Director {
  constructor(name) {
    this.name = name;
  }
}

class Genre {
  constructor(name) {
    this.name = name;
  }
}

class Movie {
  constructor(name, genre, director, releaseYear, rating) {
    this.name = name;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  // This is a prototype function
  getOverview() {
    return `${this.name} is a ${this.genre.name} movie, 
    it was directed by ${this.director.name}, released in ${this.releaseYear.year} and got a ${this.rating.stars} stars rating.`;
  }
}

const action = new Genre("action");
const Mo = new Director("Mo");
const y2k = new ReleaseYear(2000);
const fiveStars = new Rating(5);

const taken = new Movie("Taken", action, Mo, y2k, fiveStars);

const spiderman = new Movie(
  "Spiderman",
  action,
  new Director("Mo 2"),
  new ReleaseYear(2002),
  new Rating(4)
);

console.log(taken.getOverview());
console.log(spiderman.getOverview());
