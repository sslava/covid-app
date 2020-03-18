import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StatsScreen from './components/Stats/StatsScreen';
import QAScreen from './components/QA/QAScreen';
import ContactsScreen from './components/Contacts/ContactsScreen';

import StatsDataProvider from './components/shared/StatsDataProvider';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StatsDataProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Статистика" component={StatsScreen} />
          <Tab.Screen name="QA" component={QAScreen} />
          <Tab.Screen name="телефоны" component={ContactsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
