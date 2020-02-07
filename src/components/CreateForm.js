import React from 'react';
import Find from './Find';

function CreateForm(props) {
  const showCreate = () => {
    props.createContext.toggleShowCreate();
  };

  return (
    <>
      <button onClick={showCreate}>Click Me to show create form</button>
      {props.createContext.showCreate && (
        <>
          <label htmlFor="maInput">Create Form Input</label>
          <input id="maInput" />
          <Find {...props} />
        </>
      )}
    </>
  );
}

export default CreateForm;
