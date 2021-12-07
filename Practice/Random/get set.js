let baby = {
    firstName : 'felicia',
    lastName : 'tiara'
}

Object.defineProperty(baby, 'fullName', {
    get: function () {
        return this.firstName + " " + this.lastName
    },

    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
        else {
            throw 'Invalid'
        }
    }
})

console.log(baby.fullName);

baby.fullName = "Felicia Saputra";

console.log(baby.fullName);
console.log(baby.firstName);
console.log(baby.LastName);


/* let str = 'felicia tiara saputra';
console.log(str.split(' ')); */ 

let user = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  console.log(user.fullName); // John Smith
  
  for(let key in user) alert(key); // name, surname
  
  /////////////////////////////////////////

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
  let john = new User("John", new Date(1992, 6, 1));
  
  alert( john.birthday ); // birthday is available
  alert( john.age );      // ...as well as the age