import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/containers/MainScreen'
import ContAddrecord from './src/containers/newrecordTest'
import { Provider } from 'react-redux';
import store from './src/store/index'
import Nastr from './src/components/Nastr';
import NastrEdit from './src/containers/NastrComponent'

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
console.log('app.js')
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Главный экран'
              component={MainScreen}
            />
            <Stack.Screen name='Новая запись'
              component={ContAddrecord}
            />
            <Stack.Screen name='Настройки'
              component={Nastr}
            />
            <Stack.Screen name='Редактирование'
              component={NastrEdit}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>



    )
  }

}
