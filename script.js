//1Q:-https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    //rating will be PG by default, if no value is provided it takes as PG
        constructor(title,studio,rating='PG'){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    getPG(moviearray){
        let result = []
        moviearray.filter((data) =>{
            if(data.rating === 'PG'){
                result.push(data)
            }
        })
        return result;
        }
}
let movie1 = new Movie('Docter','test','R');

let movie2 = new Movie('Kathi','gen','PG');

let movie3 = new Movie('Casino Royale', 'Eon Production', 'PG13');

let movie4 = new Movie('movie4','studio4','PG'); 

let movie5 = new Movie('movie5','studio5','PG');

let moviearray = [movie1,movie2,movie3,movie4,movie5]
console.log(movie1.getPG(moviearray));

//output:-[Movie, Movie, Movie]
// 0: Movie {title: 'Kathi', studio: 'gen', rating: 'PG'}
// 1: Movie {title: 'movie4', studio: 'studio4', rating: 'PG'}
// 2: Movie {title: 'movie5', studio: 'studio5', rating: 'PG'}
// length: 3

//2Q.Convert the UML diagram to Typescript class. - use number for double
//creation of class with classname circle
class Circle{
    //setter method which takes the value for the property called radius
    setRadius(radius){
        this.radius = radius;     
    }
    //getter method which shows the values
    getRadius(radius){
        return `CircleRadius:${this.radius}`;
    }
    //getter method to find area of a circle
    getArea(radius){
        return 3.14*this.radius*this.radius;
    }
    //getter method to find circumference of a circle
    getCircumference(radius){
        return 2*3.14*this.radius;
    }
    //setter method which takes the value for the property called color
    setColor(color){
        this.color = color;
    }
    getColor(color){
        return `CircleColor:${this.color}`;
    }
}
//creation of object for the class circle 
let Circleobj = new Circle();
//setting the values for radius and color of a circle
Circleobj.setRadius(1.0);
Circleobj.setColor("red");
console.log(Circleobj.getRadius());
console.log(Circleobj.getColor());
//area of a circle 3.14*r*r
console.log(Circleobj.getArea());
//circumference of a circle 2*3.14*r
console.log(Circleobj.getCircumference());

//output:-
// CircleRadius:1
// CircleColor:red
// 3.14
// 6.28

//3Q.Write a “person” class to hold all the details.
//Code:
class person{
    static company = "Google";
    constructor(name,age,gender,location,designation,salary) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
    }
}
class profile extends person{
    constructor(name,age,gender,location,designation,salary){
       super(name,age,gender,location);
        this.designation = designation;
        this.salary = salary;
    }
    getData(){
        let personData = `
        Name:${this.name}
        Age:${this.age}
        Gender:${this.gender}
        Location:${this.location}
        Designation:${this.designation}
        Salary:${this.salary}
        `
        console.log(personData);
    }
    static getcompany(){
        console.log(`Company:${person.company}`);
    }
}
let profileobj = new profile("John",30,"Male","Banglore","Full Stack Developer",700000);
profileobj.getData();
profile.getcompany();

//output:-
// Name:John
// Age:30
// Gender:Male
// Location:Banglore
// Designation:Full Stack Developer
// Salary:700000
// Company:Google
        

//4Q.write a class to calculate uber price.
//code:
class uber{
    constructor(distance,price){
        this.distance = distance;
        this.price = price;
    }
    getData(){
      let UberPrice = this.distance*this.price;
      console.log(`UberPrice:${UberPrice}`);
    }

}
let taxi = new uber(5,100);
taxi.getData();

//output:-
//UberPrice:500

