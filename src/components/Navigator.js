import React from 'react';

import {useTheme} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {t} from '../common/locale';

import StatsScreen from './Stats/StatsScreen';
import InfoScreen from './Info/InfoScreen';
import CountriesScreen from './Countries/CountriesScreen';
import RegionScreen from './Regions/RegionScreen';
import CountrySelectScreen from './CountrySelect/CountrySelectScreen';
import RegionSelectScreen from './RegionSelect/RegionSelectScreen';

import DeatilsScreen from './CountryDetails/DeatilsScreen';

import {HeaderBack, HeaderCloseImg} from './common/Header/Header';
import HeaderCountrySelect from './shared/HeaderCountrySelect';
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
          name="Regions"
          component={RegionScreen}
          options={({route}) => ({
            title: t('states.title', {name: route.params.name}),
          })}
        />
        <AppStack.Screen
          name="Country"
          component={DeatilsScreen}
          options={({route, navigation}) => ({
            headerTitle: () => (
              <HeaderCountrySelect
                navigation={navigation}
                code={route.params.code}
                name={route.params.name}
              />
            ),
          })}
        />
        <AppStack.Screen
          name="CountrySelect"
          component={CountrySelectScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: HeaderCloseImg,
            title: t('countryselect.title'),
            gestureEnabled: true,
            ...TransitionPresets.ModalTransition,
          }}
        />
        <AppStack.Screen
          name="RegionSelect"
          component={RegionSelectScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: HeaderCloseImg,
            title: t('regionselect.title'),
            gestureEnabled: true,
            ...TransitionPresets.ModalTransition,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
