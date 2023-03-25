import cn from 'classnames';

import { useTypedSelector } from 'hooks/useTypedSelector';

import Weather from './Weather';

import styles from './App.module.scss';

function App() {
  const { isDarkTheme } = useTypedSelector((state) => state.app);
  return (
    <div className={cn(styles.app, { [styles.light]: !isDarkTheme })}>
      <Weather />
    </div>
  );
}

export default App;
