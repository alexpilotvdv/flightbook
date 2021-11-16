import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main'
import ContAddrecord from './src/containers/newrecordTest'
import { Provider } from 'react-redux';
import store from './src/store/index'

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Main}
            />
            <Stack.Screen name="Newrecords"
              component={ContAddrecord}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>



    )
  }

}
