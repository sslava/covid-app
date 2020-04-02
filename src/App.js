import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import StatsScreen from './components/Stats/StatsScreen';
import InfoScreen from './components/Info/InfoScreen';
import CountriesScreen from './components/Countries/CountriesScreen';
import CitiesScreen from './components/Cities/CitiesScreen';

import HeaderBackImage from './components/shared/Header/HeaderBack';
import {StatsDataProvider} from './components/shared/StatsDataContext';
import TabIcon from './components/shared/TabIcon';

import infoIcon from './assets/icons/info.png';
import statsIcon from './assets/icons/stats.png';

const RootTabs = createBottomTabNavigator();

function Root() {
  return (
    <RootTabs.Navigator
      tabBarOptions={{
        activeTintColor: '#087ED9',
        inactiveTintColor: '#A0A2AF',
      }}>
      <RootTabs.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: (props) => <TabIcon icon={statsIcon} {...props} />,
          tabBarLabel: 'Статистика',
        }}
      />
      <RootTabs.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarIcon: (props) => <TabIcon icon={infoIcon} {...props} />,
          tabBarLabel: 'Информация',
        }}
      />
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
          screenOptions={({route}) => ({
            // cardOverlayEnabled: true,
            headerBackTitle: ' ',
            headerTitleStyle: {
              fontFamily: 'Ubuntu',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#252A34',
            },
            headerBackImage: HeaderBackImage,
          })}>
          <AppStack.Screen
            name="Root"
            component={Root}
            options={{headerTransparent: true, headerTitle: null}}
          />
          <AppStack.Screen
            name="Countries"
            component={CountriesScreen}
            options={{headerTitle: 'Стратистика по странам'}}
          />
          <AppStack.Screen
            name="Cities"
            component={CitiesScreen}
            options={{headerTitle: 'Стратистика по регионам'}}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
