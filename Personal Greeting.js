function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greet = function () {
    console.log('I am ' + this.firstName + ' ' + this.lastName + ', or did you forget?');
};

var john = new Person('John', 'Doe');
var francis = new Person('Francis', 'Wancis');

john.greet();
francis.greet();