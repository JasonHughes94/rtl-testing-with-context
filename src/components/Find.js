import React from 'react';

function Find(props) {
  const showFind = () => {
    props.findContext.toggleShowFind();
  };

  return (
    <>
      <button onClick={showFind}>Click Me to show find form</button>
      {props.findContext.showFind && (
        <>
          <label htmlFor="maInput">Find form input</label>
          <input id="maInput" />
        </>
      )}
    </>
  );
}

export default Find;
