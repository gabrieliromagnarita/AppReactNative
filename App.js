// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ProviderCart } from './components/ProviderCart';

import Login from './screens/login';
import Home from './screens/home';
import FeedFotos from './screens/feed1';
import FeedPosts from './screens/feed2';
import Counter from './screens/counter';
import Product from './screens/Product';
import Cadastro from './screens/cadastro';
import CadastrarProd from './screens/loadProdutos';
import Carrinho from './screens/Carrinho';

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
        <Tab.Screen name="Produto"component={Product}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="white" />
          )
        }}/>
        <Tab.Screen name="Cadatro de Produtos"component={CadastrarProd}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="cloud-upload" size={24} color="white" />
          )
        }}/>
        <Tab.Screen name="Carrinho"component={Carrinho}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-cart-checkout" size={24} color="white" />
          )
        }}/>
    </Tab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastrar' component={Cadastro}/>
        <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>
  );
}