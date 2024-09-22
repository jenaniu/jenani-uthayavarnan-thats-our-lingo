import React from 'react';
import './ConceptText.scss'
function ConceptText({ text }) {
    const breakUpText = text.split('\n').map((text,index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));
    return (
      <>
       <h5 className="concept-text"> {breakUpText} </h5>

      </>
    )
  }
  
  export default ConceptText 