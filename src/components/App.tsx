import React from 'react';

import Weather from './Weather';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Weather />
    </div>
  );
}

export default App;
