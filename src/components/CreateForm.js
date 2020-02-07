import React from 'react';
import Find from './Find';
import AppConsumer from '../contexts/app/AppConsumer';

function CreateForm() {
  return (
    <AppConsumer>
      {({ createContext }) => (
        <>
          <button onClick={() => createContext.toggleShowCreate()}>
            Click Me to show create form
          </button>
          {createContext.showCreate && (
            <>
              <label htmlFor="maInput">Create Form Input</label>
              <input id="maInput" />
              <Find />
            </>
          )}
        </>
      )}
    </AppConsumer>
  );
}

export default CreateForm;
