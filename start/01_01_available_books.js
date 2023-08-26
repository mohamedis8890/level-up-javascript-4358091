// Write your code here
class Book {
  constructor(title, booksCount) {
    this.title = title;
    this.booksCount = booksCount;
  }

  getAvailability() {
    if (this.booksCount === 0) return "Unavailable";
    else if (this.booksCount <= 5) return "Low Availbility";

    return "Available";
  }

  get Availability() {
    return this.getAvailability();
  }

  sellBooks(books = 1) {
    return this.booksCount -= books;
  }

  reStock(books = 5) {
    return this.booksCount += books;
  }
}

const chaosTheory = new Book("Choas Theory", 6);
const oliverTwist = new Book("Oliver Twist", 10);

console.log(chaosTheory.Availability);
chaosTheory.sellBooks(3);
console.log(chaosTheory.Availability);
