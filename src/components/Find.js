import React from 'react';
import AppConsumer from '../contexts/app/AppConsumer';

function Find() {
  return (
    <AppConsumer>
      {({ findContext }) => (
        <>
          <button onClick={() => findContext.toggleShowFind()}>
            Click Me to show create form
          </button>
          {findContext.showFind && (
            <>
              <a href="http://localhost">Linky boi</a>
            </>
          )}
        </>
      )}
    </AppConsumer>
  );
}

export default Find;
