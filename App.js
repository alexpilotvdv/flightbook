import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main'
import Newrecords from './src/components/Newrecord'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Newrecords" component={Newrecords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
