import book2 from '../BookContents/sample_book2.txt';

export default function Book2() {
  return (
    <div className="main">
      <div className="book-wrapper">
        <h4>BOOK 2</h4>
        <p className="p-for-embed">
          <embed src={book2} className="embd" />
        </p>
      </div>
    </div>
  );
}
