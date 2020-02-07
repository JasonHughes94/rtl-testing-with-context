import React from 'react';
import './App.css';
import AppProvider from './contexts/app/AppProvider';
import AppConsumer from './contexts/app/AppConsumer';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <AppProvider>
      <AppConsumer>
        {({ createContext, findContext }) => (
          <CreateForm createContext={createContext} findContext={findContext} />
        )}
      </AppConsumer>
    </AppProvider>
  );
}

export default App;
