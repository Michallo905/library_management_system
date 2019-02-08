import sys
class Library:
      def __init__(self,listofbooks):
            self.availablebooks=listofbooks

      def displayAvailablebooks(self):
                   print("The books we have in our library are as follows:")
                   print("================================")
                   for book in self.availablebooks:
                         print(book)
      def lendBook(self,requestedBook):
            if requestedBook in self.availablebooks:
                  print("The book you requested has now been borrowed")
                  self.availablebooks.remove(requestedBook)
            else:
                  print("Sorry the book you have requested is currently not in the library")
                  
      def delete_Book(self,requestedBook):
            if requestedBook in self.availablebooks:
                  print("The book you delete has now been deleted")
                  self.availablebooks.remove(requestedBook)
            else:
                  print("Sorry the book does not appear in the system")

      def search_Book(self,availablebooks):
            if self.book in self.availablebooks:
                  print("This is your book")
                  print(self.book)
            
                  
      def addBook(self,returnedBook):
            self.availablebooks.append(returnedBook)
            print("Thanks for returning your borrowed book")


class Student:
    def requestBook(self):
        print("Enter the name of the book you'd like to borrow>>")
        self.book = input()
        return self.book

    def returnBook(self):
        print("Enter the name of the book you'd like to return>>")
        self.book = input()
        return self.book


class Librarian:
    def searchBook(self):
        print("Enter the name of the book you'd like to search>>")
        self.book = input()
        return self.book

    def deleteBook(self):
        print("Enter the name of the book you'd like to delete>>")
        self.book = input()
        return self.book

    def returnBook(self):
        print("Enter the name of the book you'd like to return>>")
        self.book = input()
        return self.book

    def requestBook(self):
        print("Enter the name of the book you'd like to borrow>>")
        self.book = input()
        return self.book


def main():
      library=Library(["The Last Battle","The Screwtape letters","The Great Divorce"])
      student=Student()
      librarian=Librarian()
      done=False
      while done==False:
            print("""Continue as:
            1.Librarian
            2.Student
                  """)
            choice=int(input("Enter Choice:"))
            if choice==2:
                  print(""" ======LIBRARY MENU=======
                  1. Display all available books
                  2. Request a book
                  3. Return a book
                  4. Exit
                       """)
                  choice=int(input("Enter Choice:"))
                  if choice==1:
                        library.displayAvailablebooks()
                  elif choice==2:
                        library.lendBook(student.requestBook())
                  elif choice==3:
                        library.addBook(student.returnBook())
                  elif choice==4:
                        sys.exit()
            elif choice==1:
                  print(""" ======LIBRARIAN MENU=======
                  1. Show all books
                  2. Search a book
                  3. Delete a book
                  4. Request a book
                  5. Return a book
                  6. Exit
                       """)
                  choice=int(input("Enter Choice:"))
                  if choice==1:
                        library.displayAvailablebooks()
                  elif choice==2:
                        library.search_Book(librarian.searchBook())
                  elif choice==3:
                        library.delete_Book(librarian.deleteBook())
                  elif choice==4:
                        library.lendBook(librarian.requestBook())
                  elif choice==5:
                        library.addBook(librarian.returnBook())
                  elif choice==6:
                        sys.exit()


main()
