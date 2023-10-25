/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import {name as appName} from './app.json';
import FoodDetails from './screens/Food/FoodDetails';
import FoodCategory from './screens/Food/FoodCategory';
import UserProfile from './screens/Authentication/UserProfile';
import FoodFavourites from './screens/Food/FoodFavourites';
import FoodCreated from './screens/Food/FoodCreated';
import FoodCreatedPlans from './screens/Food/FoodCreatedPlan';
import KeepTrack from './screens/KeepTrack/KeepTrack';
import WorkoutProgress from './screens/KeepTrack/WorkoutProgress';

AppRegistry.registerComponent(appName, () => App);
