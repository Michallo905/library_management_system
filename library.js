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



User.return = function (title) {
  if (this.libBooks.hasOwnProperty(title)) {
    let returnDate = prompt('Enter date of returning book in format rrrr\/mm\/dd', 'rrrr\/mm\/dd');
    //userAccounts.userID.borrowedBook.push(title.end = new Date(returnDate))
    this.userAccounts[this.userID].borrowedBook.title.end = new Date(returnDate);

    let diff = Math.abs(this.userAccounts[this.userID].borrowedBook.title.end - this.userAccounts[this.userID].borrowedBook.title.start);
    //converting from miliseconds to days
    let days = diff / (60*60*24*1000);
    // calculating fine/charge each day =+ 2 zl
    if (days > 30 ) {
      this.userAccounts[this.userID].balance -= (days - 30) * 2;
      this.userAccounts[this.userID].isActive = false;

      console.log(`\nDear ${this.name} ${this.surname} ` +
        `\nDue to exceeding of the time limit put on this book your account has been frozen` +
      `Your delay is ${days - 30} day\/s hence you must pay 2 zl per each day which is: ${this.userAccounts[this.userID].balance} `);

      let payCharge = prompt('Do you want to pay up your fine?', 'yes/no')
        switch(payCharge) {
          case 'yes':
            this.userAccounts.userID.balance = 0;
            this.userAccounts.userID.isActive = true;
            console.log('\nThank you for discharging your debt.' +
            '\nYour account is active now');
          case 'no':
            console.log('\nYour account will be frozen until you discharge your debt.' +
          '\nGood bye.');
        }
  }
  else
    console.log('Tkank you for returning the book.');
  }
else
  console.log('\nThere is no such a book in our library');
};

User.deleteAccount = function() {
  if (this.isRegistered(this.userID)) {
  if (Object.keys(this.userAccounts.userID.borrowedBook).length > 0) {
    console.log('\nGive back books that you borrowed first.');
    return;
  }
  if (this.userAccounts[this.userID].balance < 0) {
    console.log('\nGive back money for not returning our books on time first.');
    return;
  }
  let response = prompt('\nConfirm your decision, please' +
  '\nDo you really wish to remove your account in our library?', 'yes/no');
  switch (response) {
    case 'yes':
      delete this.userAccounts[this.userID];
      console.log('\nYour account has been successfully removed');
      break;
    case 'no':
      console.log('\nTkank you for your reconsideration' +
      '\nFeel free to donate us anytime!');
      break;
      }
    }
  };