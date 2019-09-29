import React from 'react';
import BooksLayOut from './LayOutBooks';

class ListBooks extends React.Component {
    render() {
        const { books, changeShelf, title} = this.props
        return (
            <div className="book-classification">
                <h2 className="books-title">{title}</h2>
                <div className="book-shelf">
                    <ol className="books-grid">
                        {books.map((book) =>
                            ( <li key={book.id}>
                                <BooksLayOut book={book} changeShelf={changeShelf} />
                            </li> )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ListBooks;