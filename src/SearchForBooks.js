import React from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBook';
import * as BooksAPI from './BooksAPI';
                /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */

class SearchForBooks extends React.Component {

    state = {
        search_input : '',
        books : [],
        ownedBooks : [],
    }

    handleChange = async (event) => {
        const searchQuery = event.target.value;
        const returnedBooks = await BooksAPI.search(searchQuery)
        const returnedOwnedBooks = await BooksAPI.getAll()
        const books = (Array.isArray(returnedBooks) ? returnedBooks : [])
        const ownedBooks = (Array.isArray(returnedOwnedBooks) ? returnedOwnedBooks : [])
        books.forEach((book, i) => {
            ownedBooks.forEach((ownedBook, j) => {
                if (ownedBook.id === book.id){
                    books[i] = ownedBook;
                }
            })
        });

        console.log(books);
        this.setState((currentState) => ({
            ownedBooks : ownedBooks,
            books : books,
            search_input : searchQuery,
        }))
    }

    changeShelf = async (book, shelf) => {
        await BooksAPI.update(book, shelf)
    }

    render() {
        const {books} = this.state;
        
        return (   
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' >
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        
                        <input type="text"
                         onChange={this.handleChange}
                         placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBooks title="Search Results" changeShelf={this.changeShelf} books={books} />
                </div>

            </div>
        )
    }
}

export default SearchForBooks;