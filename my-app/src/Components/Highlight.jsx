import React, { useState } from 'react';

const Highlight = () => {
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');

  const highlight = () => {
    const index = inputText.indexOf(searchText);

    if (index >= 0) {
      const highlightedText = (
        <span className="highlight">
          {inputText.substring(index, index + searchText.length)}
        </span>
      );

      setInputText(
        <div>
          {inputText.substring(0, index)}
          {highlightedText}
          {inputText.substring(index + searchText.length)}
        </div>
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        id="inputText"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search Text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={highlight}>Highlight Text</button>
    </div>
  );
};

export default Highlight;
