class Movie {
  constructor(movie, genre, director, releaseYear, rating){
    this.movie = movie;
    this.genre = genre;
    this.director = director; 
    this.releaseYear = releaseYear;
    this.rating = rating

  }

  getMovie(){
    return `${this.movie}, a genre ${this.genre}, film directed by ${this.director} was released in 
    ${this.releaseYear}. it received a rating of ${this.rating}`
  }
}

const harryPotter = new Movie("Harry Potter", "Fantasy", "JJ", "2000", 9)
console.log(harryPotter.getMovie())
console.log(harryPotter)