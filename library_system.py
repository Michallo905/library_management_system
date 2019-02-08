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
  

