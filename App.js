import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const PlayersStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Colors
import colors from './utils/colors';

// Components
import VectorIcons from './components/VectorIcon';

// Screens
import ClubsScreen from './screens/ClubsScreen';
import PlayersScreen from './screens/PlayersScreen';
import DetailsScreen from './screens/DetailsScreen';

const App = () => {
  const screenOptions = {
    tabBarActiveTintColor: colors.blueMPG,
    tabBarInactiveTintColor: colors.greyMPG,
    headerStyle: {
      backgroundColor: colors.greenMPG,
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
  };

  function PlayersStackScreen() {
    return (
      <PlayersStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <PlayersStack.Screen name="PlayersList" component={PlayersScreen} />
        <PlayersStack.Screen name="Details" component={DetailsScreen} />
      </PlayersStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Joueurs"
          component={PlayersStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <VectorIcons
                color={color}
                name="football"
                size={20}
                type="Ionicons"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Clubs"
          component={ClubsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <VectorIcons
                color={color}
                name="sports-club"
                size={20}
                type="Entypo"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
