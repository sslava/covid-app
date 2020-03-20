import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import StatsScreen from './components/Stats/StatsScreen';
import QAScreen from './components/QA/QAScreen';
import ContactsScreen from './components/Contacts/ContactsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StatsDataProvider} from './components/shared/StatsDataContext';

const icons = {
  stats: 'chart-line',
  qa: 'cloud-question',
  contacts: 'phone',
};

const Tabs = createBottomTabNavigator();

function Root() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = icons[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        safeAreaInset: {
          bottom: 'always',
        },
        showLabel: false,
        // activeTintColor: 'tomato',
        // inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="stats" component={StatsScreen} />
      <Tabs.Screen name="qa" component={QAScreen} />
      <Tabs.Screen name="contacts" component={ContactsScreen} />
    </Tabs.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <StatsDataProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen
            name="Root"
            component={Root}
            options={{
              title: null,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="Faq"
            component={QAScreen}
            headerMode="screen"
            options={{
              title: null,
              headerBackTitle: 'Назад',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
