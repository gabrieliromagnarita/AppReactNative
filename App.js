// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Login from './screens/login';
import Home from './screens/home';
import FeedFotos from './screens/feed1';
import FeedPosts from './screens/feed2';
import Counter from './screens/counter';

function BottomTabs(){
  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#222',
        tabBarInactiveTintColor: 'pink',
        headerStyle:{
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
      }}>
        <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (<MaterialIcons name="home" size={24} color="white" />)
        }}/>
        <Tab.Screen name='FeedFotos' component={FeedFotos}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="photo" size={24} color="white" />
          )
        }}/>
        <Tab.Screen name='FeedPosts' component={FeedPosts}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="textsms" size={24} color="white" />
          )
        }}/>
        <Tab.Screen name='Counter' component={Counter}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="123" size={24} color="white" />
          )
        }}/>
    </Tab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}