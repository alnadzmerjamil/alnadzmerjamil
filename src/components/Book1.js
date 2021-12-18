import React, { useState, useEffect } from 'react';
import book1 from '../BookContents/sample_book1.txt';

export default function Book1() {
  return (
    <div className="main">
      <div className="wrapper">
        <h4>BOOK 1</h4>
        <p className="p-for-embed">
          <embed src={book1} className="embd" />
        </p>
      </div>
    </div>
  );
}
