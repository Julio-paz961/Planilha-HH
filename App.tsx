import React from 'react';
import AppProvider from '@hooks/index';
import User from '@screens/User';

export default function App() {
  return (
    <AppProvider>
      <User/>
    </AppProvider>
  );
}
