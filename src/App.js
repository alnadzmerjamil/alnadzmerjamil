import './App.css';
import Book1 from './components/Book1';
import Book2 from './components/Book2';
import React from 'react';
class App extends React.Component {
  state = {
    books: [
      { name: 'Book 1', content: <Book1 /> },
      { name: 'Book 2', content: <Book2 /> },
    ],
    bookToRead: null,
  };
  bookBtnHandler = (e) => {
    if (e.target.textContent === 'BOOK 1') {
      return this.setState({ bookToRead: 'book1' });
    }
    this.setState({ bookToRead: 'book2' });
  };
  render() {
    return (
      <div className="App">
        <h3>BOOK LIST</h3>
        <select
          onChange={(e) => {
            this.setState({ bookToRead: e.target.value });
          }}
        >
          <option>--Select--</option>
          {this.state.books.map((book) => {
            return <option key={book.name}>{book.name}</option>;
          })}
        </select>

        {this.state.bookToRead === 'Book 1' ? (
          <Book1 />
        ) : this.state.bookToRead === 'Book 2' ? (
          <Book2 />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
