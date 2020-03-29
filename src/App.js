import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import StatsScreen from './components/Stats/StatsScreen';
import WhoFaqScreen from './components/WhoFaq/WhoFaqScreen';
import InfoScreen from './components/Info/InfoScreen';

import HeaderBackImage from './components/shared/HeaderBack';
import {StatsDataProvider} from './components/shared/StatsDataContext';

import preventIcon from './assets/icons/prevent_black.png';
import reportIcon from './assets/icons/report_black.png';

import styles from './components/shared/navigator.styles';

const TabIcon = ({color, size, source}) => (
  <Image
    source={source}
    style={{width: size + 4, height: size + 4, tintColor: color}}
  />
);

const RootTabs = createBottomTabNavigator();

function Root() {
  return (
    <RootTabs.Navigator>
      <RootTabs.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: props => <TabIcon source={reportIcon} {...props} />,
          tabBarLabel: 'Статистика',
        }}
      />
      <RootTabs.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarIcon: props => <TabIcon source={preventIcon} {...props} />,
          tabBarLabel: 'Информация',
        }}
      />
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
            options={{headerTransparent: true}}
          />
          <AppStack.Screen name="WhoFaq" component={WhoFaqScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
