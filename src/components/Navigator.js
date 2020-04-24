import React from 'react';

import {useTheme} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {t} from '../common/locale';

import StatsScreen from './Stats/StatsScreen';
import InfoScreen from './Info/InfoScreen';
import CountriesScreen from './Countries/CountriesScreen';
import CitiesScreen from './Cities/CitiesScreen';
import CountrySelectScreen from './CountrySelect/CountrySelectScreen';
import DeatilsScreen from './CountryDetails/DeatilsScreen';

import {HeaderBack, HeaderClose} from './shared/Header/HeaderBack';
import TabIcon from './common/TabIcon';

import infoIcon from '../assets/icons/info.png';
import statsIcon from '../assets/icons/stats.png';

const RootTabs = createBottomTabNavigator();
const AppStack = createStackNavigator();

function Root() {
  const theme = useTheme();

  return (
    <RootTabs.Navigator
      tabBarOptions={{
        safeAreaInsets: {
          top: 10,
          // bottom: 15,
        },
        style: {
          paddingTop: 10,
          backgroundColor: theme.primaryBackground,
          borderTopColor: 'transparent',
        },
        activeTintColor: '#007AFF',
        inactiveTintColor: theme.secondaryTextColor,
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

export default function Navigator() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="screen"
        screenOptions={({route}) => ({
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: 'System',
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.primaryTextColor,
          },
          headerStyle: {
            backgroundColor: theme.primaryBackground,
            elevation: 0,
            shadowOpacity: 0,
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
          options={{title: t('countries.title')}}
        />
        <AppStack.Screen
          name="Cities"
          component={CitiesScreen}
          options={{title: t('cities.title')}}
        />
        <AppStack.Screen
          name="Country"
          component={DeatilsScreen}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        <AppStack.Screen
          name="CountrySelect"
          component={CountrySelectScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: HeaderClose,
            title: t('countryselect.title'),
            gestureEnabled: true,
            ...TransitionPresets.ModalTransition,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
