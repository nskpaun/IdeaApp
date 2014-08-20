Person = function (name) {
    this._name = name;
};

Person.prototype.sayHello = function () {
    console.log('My name is: ' + this._name);
};
Person.prototype.sayGoodbye = function () {
    console.log('Goodbye ' + this._name);
};
module.exports = Person;