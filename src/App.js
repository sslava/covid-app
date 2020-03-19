import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StatsScreen from './components/Stats/StatsScreen';
import QAScreen from './components/QA/QAScreen';
import ContactsScreen from './components/Contacts/ContactsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StatsDataProvider} from './components/shared/StatsDataContext';

const Tab = createBottomTabNavigator();

const icons = {
  stats: 'chart-line',
  qa: 'cloud-question',
  contacts: 'phone',
};

export default function App() {
  return (
    <StatsDataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const iconName = icons[route.name];
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            // activeTintColor: 'tomato',
            // inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="stats" component={StatsScreen} />
          <Tab.Screen name="qa" component={QAScreen} />
          <Tab.Screen name="contacts" component={ContactsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </StatsDataProvider>
  );
}
