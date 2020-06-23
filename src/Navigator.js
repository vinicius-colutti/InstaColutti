import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/ProfileOrLogin'
import Icon from 'react-native-vector-icons/FontAwesome';
import Splash from './screens/Splash'

Icon.loadFont();

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

let logado;
logado = true;

const menuNavigator = (props) => {

  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Camera') {
                iconName = focused ? 'camera' : 'camera';
              }else if(route.name === 'Profile'){
                iconName = focused ? 'user' : 'user';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false
          }}
      >
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="Camera" component={AddPhoto} />
        <Tab.Screen name="Profile" component={Profile} />  
      </Tab.Navigator>
      </NavigationContainer>
  );
}
// const stackMenu = () =>{

//   return(
//     <NavigationContainer>
//       <Stack.Navigator> 
//           <Stack.Screen headerMode='none' name="Home" component={menuNavigator} /> 
//           <Stack.Screen name="Register" component={Register} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )

// }
// const mainRoutes = {
//   Login:{
//       name: 'Login',
//       screen: Login
//   },
//   Home: {
//       name: 'Home',
//       screen: menuNavigator
//   }
// }
// const mainNavigator = createSwitchNavigator(mainRoutes, {
//   initialRouteName: 'Home'
// })

const SplashRouter = createSwitchNavigator({
  Splash: Splash,
  App:  menuNavigator
},{
  initialRouteName: 'Splash'
})

export default createAppContainer(SplashRouter)



