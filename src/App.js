import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import InputBar from './components/InputBar';

import './App.scss';
import './style/library/reset.scss';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <InputBar></InputBar>
    </>
  );
}

export default App;
