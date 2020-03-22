import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StatsScreen from './components/Stats/StatsScreen';
import WhoFaqScreen from './components/WhoFaq/WhoFaqScreen';
import InfoScreen from './components/Info/InfoScreen';
import SymptomsScreen from './components/Symptoms/SymptomsScreen';
import SpreadScreen from './components/Spread/SpreadScreen';
import PreventScreen from './components/Prevent/PreventScreen';

import HeaderBackImage from './components/shared/HeaderBack';
import {StatsDataProvider} from './components/shared/StatsDataContext';

import styles from './components/shared/navigator.styles';

const icons = {
  Stats: 'chart-line',
  Info: 'cloud-question',
};

const RootTabs = createBottomTabNavigator();

function Root() {
  return (
    <RootTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <Icon name={icons[route.name]} size={size} color={color} />
        ),
      })}
      tabBarOptions={{
        showLabel: false,
      }}>
      <RootTabs.Screen name="Stats" component={StatsScreen} />
      <RootTabs.Screen name="Info" component={InfoScreen} />
    </RootTabs.Navigator>
  );
}

const AppStack = createStackNavigator();

const titles = {
  Root: null,
  WhoFaq: 'Вопросы и ответы',
  Symptoms: 'Симптомы',
  Spread: 'Как передается',
  Prevent: 'Профилактика',
};

export default function App() {
  return (
    <StatsDataProvider>
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="screen"
          screenOptions={({route}) => ({
            title: titles[route.name],
            headerBackTitle: ' ',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerBackImage: HeaderBackImage,
          })}>
          <AppStack.Screen
            name="Root"
            component={Root}
            options={{
              headerTransparent: true,
            }}
          />
          <AppStack.Screen name="WhoFaq" component={WhoFaqScreen} />
          <AppStack.Screen name="Symptoms" component={SymptomsScreen} />
          <AppStack.Screen name="Spread" component={SpreadScreen} />
          <AppStack.Screen name="Prevent" component={PreventScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
