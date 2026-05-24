/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar,  useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { StackNavigator } from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import Store from './src/store/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Provider store={Store}>
          <StackNavigator />
        </Provider>
    </SafeAreaProvider>
  );
}

export default App;
