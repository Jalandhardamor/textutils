import React, { useState } from 'react';

export default function TextForm(props) {

    

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleRevClick = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Converted to Reverse!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");

  // Word counter (ignores empty spaces)
  const wordCount = text.trim() === "" 
    ? 0 
    : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* Disable buttons if text is empty */}
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>
          Convert to Reverse
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
