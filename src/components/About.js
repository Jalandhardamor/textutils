import React from 'react';

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743',
    borderRadius: '5px',
    padding: '15px'
    
  };

  return (
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1 className="mb-3">About Us</h1>

      <div className="accordion" id="accordionExample">

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} 
              data-bs-toggle="collapse" data-bs-target="#collapseOne" 
              aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or other text manipulations.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} 
              data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
              aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a free tool that provides instant character and word count statistics for your text.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} 
              data-bs-toggle="collapse" data-bs-target="#collapseThree" 
              aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter works in all modern browsers like Chrome, Firefox, Safari, Edge, and Opera.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
