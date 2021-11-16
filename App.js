import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main'
import addprovider from './src/containers/addprovider'

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
  
    return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Main}

            />
            <Stack.Screen name="Newrecords"
              component={addprovider}
            />
          </Stack.Navigator>
        </NavigationContainer>
   

    )
  }

}
