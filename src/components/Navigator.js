import React from 'react';
import {t} from 'i18n-js';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import StatsScreen from './Stats/StatsScreen';
import InfoScreen from './Info/InfoScreen';
import CountriesScreen from './Countries/CountriesScreen';
import CitiesScreen from './Cities/CitiesScreen';
import CountrySelectScreen from './CountrySelect/CountrySelectScreen';

import {HeaderBack, HeaderClose} from './shared/Header/HeaderBack';
import TabIcon from './shared/TabIcon';

import infoIcon from '../assets/icons/info.png';
import statsIcon from '../assets/icons/stats.png';

const RootTabs = createBottomTabNavigator();
const AppStack = createStackNavigator();

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
          tabBarLabel: t('stats.title'),
        }}
      />
      <RootTabs.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarIcon: (props) => <TabIcon icon={infoIcon} {...props} />,
          tabBarLabel: t('info.title'),
        }}
      />
    </RootTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="screen"
        screenOptions={({route}) => ({
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: 'Ubuntu',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#252A34',
          },
          headerBackImage: HeaderBack,
        })}>
        <AppStack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="Countries"
          component={CountriesScreen}
          options={{headerTitle: t('countries.title')}}
        />
        <AppStack.Screen
          name="Cities"
          component={CitiesScreen}
          options={{headerTitle: t('cities.title')}}
        />
        <AppStack.Screen
          name="CountrySelect"
          component={CountrySelectScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: HeaderClose,
            headerTitle: t('countryselect.title'),
            gestureEnabled: true,
            ...TransitionPresets.ModalTransition,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
