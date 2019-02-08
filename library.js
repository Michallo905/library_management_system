var Library = {
  init: function (libraryName, address) {
    this.libraryName = libraryName;
    this.address = address;

    this.userAccounts = {};
    this.libBooks = {};
  },

  isRegistered: function (userId) {
    return this.userAccounts.hasOwnProperty(userId);
  }
};

var User = Object.create(Library);

User.init = function(name, surname, pesel) {
  this.name = name;
  this.surname = surname;
  this.pesel = pesel;
  this.userID = Symbol();
};

User.createAccount = function () {
  if (!(this.isRegistered(this.userID)) ) {

  this.userAccounts[this.userID] = {};
  this.userAccounts[this.userID].name = name;
  this.userAccounts[this.userID].surname = surname;
  this.userAccounts[this.userID].pesel = pesel;
  this.userAccounts[this.userID].balance = 0;
  this.userAccounts[this.userID].borrowedBook = {};
  this.userAccounts[this.userID].isActive = true;
  }
};
