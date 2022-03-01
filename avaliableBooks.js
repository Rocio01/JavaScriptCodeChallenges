 class Book{
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
get availability(){
  return this.getAvailability;
}
  getAvailability(){
    
    if(this.numCopies === 0) {
      return "Out of Stock";
    }else if (this.numCopies < 10){
      return "Low stock";
    }else {
      return "In Stock"
    }
  }

  sell(numCopiesSold= 1){
    return this.numCopies -= numCopiesSold
  }

  restock(numCopiesRe = 5){
    return this.numCopies += numCopiesRe;
  }
}

const HarryPotter = new Book("Harry Potter 1", "J.K. Rowling", 123456, 20)
console.log(HarryPotter.getAvailability())
HarryPotter.sell(13)
console.log(HarryPotter.getAvailability())
HarryPotter.sell(7)
console.log(HarryPotter.getAvailability())

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition){
    super(title, author, ISBN, numCopies)
    this.edition = edition;
  }

  getEdition(){
    return `the current edition of this book is ${this.edition}`
  }
}

const tbook = new TechnicalBook("El algebra de baldor", "baldor", 123456, 8, 2.5)

console.log(tbook)

console.log(tbook.getAvailability())