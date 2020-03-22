import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import StatsScreen from './components/Stats/StatsScreen';
import QAScreen from './components/QA/QAScreen';
import InfoScreen from './components/Info/InfoScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StatsDataProvider} from './components/shared/StatsDataContext';

const icons = {
  Stats: 'chart-line',
  Info: 'cloud-question',
};

const RootTabs = createBottomTabNavigator();

function Root() {
  return (
    <RootTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = icons[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
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

export default function App() {
  return (
    <StatsDataProvider>
      <NavigationContainer>
        <AppStack.Navigator headerMode="screen">
          <AppStack.Screen
            name="Root"
            component={Root}
            options={{
              title: null,
              headerTransparent: true,
            }}
          />
          <AppStack.Screen
            name="Faq"
            component={QAScreen}
            headerMode="screen"
            options={{
              title: null,
              headerBackTitle: 'Назад',
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
