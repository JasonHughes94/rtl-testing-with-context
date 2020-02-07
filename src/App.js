import React from 'react';
import './App.css';
import AppProvider from './contexts/app/AppProvider';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <AppProvider>
      <CreateForm />
    </AppProvider>
  );
}

export default App;
