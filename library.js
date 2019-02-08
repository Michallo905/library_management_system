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


User.isAvailable = function(title) {
    if (this.libBooks.hasOwnProperty(title) && this.libBooks.title.numOfCopies > 0)
      console.log(`\nThere are ${this.libBooks.title.numOfCopies} copies of \"${title}\" available` +
      `\nYou can find in one of our division at ${this.libBooks.title.location} street.`);
      else
        console.log(`\nSearching failed. There is no copy of \"${title}\" available right now.`);
    };


User.borrow = function (title){
  // get input in format rrrr/mm/dd
  let rentDate = prompt('Enter current date in format rrrr\/mm\/dd', 'rrrr\/mm\/dd');

  if (isRegistered(this.userID) && this.userAccounts[this.userID].saldo >= 0 && this.userAccounts[this.userID].borrowedBook.length < 7 && this.libBooks.title.numOfCopies > 0) {
    // userAccounts[this.userID].borrowedBook.push({title : {start: new Date(rentDate)}});   //
     this.userAccounts[this.userID].borrowedBook.title = {};
     this.userAccounts[this.userID].borrowedBook.title.start = new Date(rentDate);
     this.libBooks.title.numOfCopies--;
   }
};

User.viewTitles = function () {
  let viewOption = prompt('\nTo check only titles, enter 1' +
'\nTo check titles and numbers of copies available, enter 2' +
'\nTo check all information about books in our library, enter 3', 'Here enter number');

  switch (viewOption) {
    case 1:
      console.log(Object.keys(this.libBooks));
      break;
    case 2:
      for (let i = 1; i < Object.keys(this.libBooks).length; i++)
        console.log(`\nTitle: ${Object.keys[i]} number of copies: ${this.libBooks[i].numOfCopies}` );
      break;
    case 3:
      for (let i = 1; i < Object.keys(this.libBooks).length; i++)
        console.log(this.libBooks[i]);
      break;
  }
};


User.addReservation = function(title) {
  if (this.userAccounts[this.userID].isActive & this.libBooks.title.reservations.length < 7){
    this.libBooks.title.reservations.push(this.userID);
  }
};


User.deleteReservation = function(title, userId) {  
  if (this.isRegistered(userId) & this.libBooks.hasOwnProperty(title) & this.libBooks.title.reservations.length < 7){

    for (let i = 0; i < this.libBooks.title.reservations.length; i++) {
      if (this.libBooks.title.reservations[i] === userId) {
        this.libBooks.title.reservations.splice(i);
        break;
      }
    }
  }
};


var LibraryMan = Object.create(User);

LibraryMan.init = function (id) {
  this.id = id;
};

LibraryMan.addTitle = function (title, author, publisher, ISBN, numOfCopies, location) {
  if (!(this.libBooks.hasOwnProperty(title))) {
    this.libBooks.title = {};
    this.libBooks.title.author = author;
    this.libBooks.title.publisher = publisher;
    this.libBooks.title.ISBN = ISBN;
    this.libBooks.title.numOfCopies = numOfCopies;
    this.libBooks.title.location = location;
    this.libBooks.title.reservations = [];


  }
};

LibraryMan.deleteTitle = function (title) {
  if (this.libBooks.hasOwnProperty(title))
    delete this.libBooks.title;
};



Library.editTitle = function (title) {
  if (this.libBooks.hasOwnProperty(title)) {
    let option = prompt('\nTo change author enter 1' +
   '\nTo change publisher enter 2' +
   '\nTo change ISBN enter 3' +
   '\nTo change location enter 4');
   switch (option) {
     case 1:
       this.libBooks.title.author = prompt('Enter new author', 'author');
       break;
     case 2:
       this.libBooks.title.publisher = prompt('Enter new publisher', 'publisher');
       break;
     case 3:
       this.libBooks.title.ISBN = prompt('Enter new ISBN', 'ISBN');
       break;
     case 4:
       this.libBooks.title.location = prompt('Enter new location', 'location');
       break;
     }
  }
};


LibraryMan.deleteCopy = function(title) {
  let n = prompt('How many copies do you want to remove?', 'Number of copies')
  if (this.libBooks.hasOwnProperty(title) && this.libBooks.title.numOfCopies > 0 && this.libBooks.title.numOfCopies > n){
      this.libBooks.title.numOfCopies -= n;
   }
   else
     console.log('Operation failed');
 };

LibraryMan.addCopy = function(title) {
  let m = prompt('How many copies do you want to add?','number of')
  if (this.libBooks.hasOwnProperty(title))
       this.libBooks.title.numOfCopies += m;
  };
