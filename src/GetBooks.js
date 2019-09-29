import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBook';

class GetBooks extends React.Component {
    state = {
        read : [],
        wantToRead : [],
        currentlyReading : [],
    }

    changeShelf = async (book, shelf) => {
        await BooksAPI.update(book, shelf)
        const newBooks = await this.fetchNewBooks()
        this.setState( newBooks )
    }

    async fetchNewBooks() {
        const newBooks = await BooksAPI.getAll()
        const read = [], wantToRead = [], currentlyReading = [];
        newBooks.map((book) => {
            if (book.shelf === 'read') {
                read.push(book)
            } else if (book.shelf === 'currentlyReading') {
                currentlyReading.push(book)
            } else if (book.shelf === 'wantToRead') {
                wantToRead.push(book)
            } else {
                // Error
            }
            return book

        })
        return {read, wantToRead, currentlyReading}
    }

    componentDidMount =  async () => {
        const newBooks = await this.fetchNewBooks()
        this.setState( newBooks )
    }

    render() {
        const {currentlyReading, wantToRead, read} = this.state
        console.log(this.state)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ListBooks title="Currently Reading" changeShelf={this.changeShelf} books={currentlyReading} />
                        <ListBooks title="Want to Read" changeShelf={this.changeShelf} books={wantToRead} />
                        <ListBooks title="Read" changeShelf={this.changeShelf} books={read} />
                    </div>

                    <Link to='/Search'>
                        <div className="open-search">
                            <button>Add a book</button>
                        </div>
                    </ Link>
                </div>
            </div>
        )
    }

}
export default GetBooks;