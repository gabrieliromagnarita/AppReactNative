// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Login from './screens/login';
import Home from './screens/home';

export default function App() {
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#222',
        tabBarInactiveTintColor: '#dca',
        headerStyle:{
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
      }}>
        <Tab.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={24} color="white" />
          )
        }}
        />
        <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="white" />
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}