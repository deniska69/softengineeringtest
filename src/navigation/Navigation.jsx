import React from 'react';
import {inject, observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AuthScreen from '../screens/AuthScreen';
import SlingAcademyContainer from '../screens/SlingAcademyScreen';
import DetailedViewScreen from '../screens/DetailedViewScreen';
import CatsScreen from '../screens/CatsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = ({userStore}) => {
  return (
    <NavigationContainer>
      {userStore.isLogin ? (
        <Stack.Navigator initialRouteName="BottomTabs">
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen
            name="DetailedViewScreen"
            component={DetailedViewScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="SlingAcademyContainer">
      <Tab.Screen
        name="SlingAcademy API"
        component={SlingAcademyContainer}
        options={{
          tabBarIconStyle: {
            display: 'none',
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="The CAT API"
        component={CatsScreen}
        options={{
          tabBarIconStyle: {
            display: 'none',
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default inject('userStore')(observer(Navigation));
