import React from 'react';

import {Image} from 'react-native';

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

import backImage from './assets/icons/back_white.png';

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

export default function App() {
  return (
    <StatsDataProvider>
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="screen"
          screenOptions={() => ({
            headerBackImage: () => <Image source={backImage} />,
            headerBackTitle: null,
          })}>
          <AppStack.Screen
            name="Root"
            component={Root}
            options={{
              title: null,
              headerTransparent: true,
            }}
          />
          <AppStack.Screen
            name="WhoFaq"
            component={WhoFaqScreen}
            options={{
              title: 'Вопросы и ответы',
            }}
          />
          <AppStack.Screen
            name="Symptoms"
            component={SymptomsScreen}
            options={{
              title: 'Симптомы',
            }}
          />
          <AppStack.Screen
            name="Spread"
            component={SpreadScreen}
            options={{
              title: 'Как передается',
            }}
          />
          <AppStack.Screen
            name="Prevent"
            component={PreventScreen}
            options={{
              title: 'Профилактика',
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
