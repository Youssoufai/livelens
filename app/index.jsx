import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import WelcomeScreen from '@/app/screens/Welcome'
const Stack = createStackNavigator();

const PaginationDots = ({ currentIndex, navigation }) => (
  <View style={styles.dotsContainer}>
    {[0, 1, 2].map((index) => (
      <TouchableOpacity
        key={index}
        style={[styles.dot, currentIndex === index && styles.activeDot]}
        onPress={() => {
          if (index === 0) navigation.navigate('Welcome');
          if (index === 1) navigation.navigate('Features');
          if (index === 2) navigation.navigate('GetStarted');
        }}
      />
    ))}
  </View>
);



const FeaturesScreen = ({ navigation }) => (
  <GestureRecognizer
    onSwipeLeft={() => navigation.navigate('GetStarted')}
    onSwipeRight={() => navigation.navigate('Welcome')}
    style={styles.container}
  >
    <Text style={styles.title}>Amazing Features</Text>
    <Text style={styles.text}>We offer the best solutions for you.</Text>
    <PaginationDots currentIndex={1} navigation={navigation} />
    <Button title="Next" onPress={() => navigation.navigate('GetStarted')} />
  </GestureRecognizer>
);

const GetStartedScreen = ({ navigation }) => (
  <GestureRecognizer
    onSwipeRight={() => navigation.navigate('Features')}
    style={styles.container}
  >
    <Text style={styles.title}>Get Started</Text>
    <Text style={styles.text}>Let's begin your journey!</Text>
    <PaginationDots currentIndex={2} navigation={navigation} />
    <Button title="Start" onPress={() => alert('Navigating to Home Screen!')} />
  </GestureRecognizer>
);

const index = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Features" component={FeaturesScreen} />
    <Stack.Screen name="GetStarted" component={GetStartedScreen} />
  </Stack.Navigator>
);

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
