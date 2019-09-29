import React from 'react'

class LayOutBooks extends React.Component {
    state = {
        value : this.props.book.shelf,
      }
  
      handleChange = (event) => {
        const moveBookToNewSelf = event.target.value;
        this.props.changeShelf(this.props.book, moveBookToNewSelf);
        this.setState( () => ({
          value : moveBookToNewSelf,
        }))
      }
  
      componentDidMount =  async () => {
          const newValue = (typeof this.state.value !== 'undefined' ? this.state.value : 'none' )
          this.setState(() => ({
            value : newValue,
          }))
      }
  
      render() {
          const {book} = this.props
          return (
              <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{(typeof book.authors !== 'undefined' ? book.authors.join(", ") : "")}</div>
            </div>
          )
      }

}

export default LayOutBooks;