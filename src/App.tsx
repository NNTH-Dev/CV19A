import 'react-native-gesture-handler';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

import '@/translations';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigator from './navigation/MainStack';
import { persistor, store } from './store';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const storage = new MMKV();

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider storage={storage}>
            <PersistGate loading={null} persistor={persistor}>
              <MainNavigator />
            </PersistGate>
          </ThemeProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
