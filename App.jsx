import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './screens/ProductScreen';
import Header from './components/Header';
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            headerStyle: {
              backgroundColor: '#352F44',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
