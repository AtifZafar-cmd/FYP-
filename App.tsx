import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SignUp from './screens/Authentication/SignUp';
import Login from './screens/Authentication/Login';
import AuthMain from './screens/Authentication/AuthMain';
import OnBoarding from './screens/OnBoarding';
import Gender from './screens/Gender';
import ImageUpload from './screens/Authentication/ImageUpload';
import UserProfile from './screens/Authentication/UserProfile';
import BottomTabs from './screens/BottomTabs';
import ExercisesPage from './screens/ExercisesPage';
import HomeScreen from './screens/HomeScreen';
import ExercisesPlaying from './screens/ExercisesPlaying';
import FoodCategory from './screens/Food/FoodCategory';
import FoodFavourites from './screens/Food/FoodFavourites';
import FoodDetails from './screens/Food/FoodDetails';
import { WishlistProvider } from './api/WishlistContext';
import { DietPlanProvider } from './api/DietPlanContext';
import FoodCreated from './screens/Food/FoodCreated';
import FoodCreatedPlans from './screens/Food/FoodCreatedPlan';
import EditProfile from './screens/ProfileScreens/EditProfile';
function App() {
  return (
    <WishlistProvider>
      <DietPlanProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="AuthMain" component={AuthMain} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ImageUpload" component={ImageUpload} />
          <Stack.Screen name="ExercisesPage" component={ExercisesPage} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="ExercisesPlaying" component={ExercisesPlaying} />
          <Stack.Screen name="FoodCategory" component={FoodCategory} />
          <Stack.Screen name="FoodFavourites" component={FoodFavourites} />
          <Stack.Screen name="FoodDetails" component={FoodDetails} />
          <Stack.Screen name="FoodCreated" component={FoodCreated} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="FoodCreatedPlans" component={FoodCreatedPlans} />

      </Stack.Navigator>
      
    </NavigationContainer>
    </DietPlanProvider>
    </WishlistProvider>
  );
}
export default App