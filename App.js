import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ResearchScreen';
import OpenAIo1Screen from './src/screens/OpenAIo1Screen';
import ChatGptScreen from './src/screens/ChatGptScreen';
import ProductScreen from './src/screens/ProductScreen';
import SafetyScreen from './src/screens/SafetyScreen';
import CompanyScreen from './src/screens/CompanyScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" style={styles.openAI}>

        <Stack.Screen 
          name="OpenAI" 
          component={HomeScreen} 
          options={{
            title: 'OpenAI',
            headerStyle: {
              backgroundColor: 'black', // Change header background color
            },
            headerTintColor: 'white',
            headerTitle: (props) => ( // Customizing the title with an image
              <>
              <View style= {styles.openAIheader}>
                <Image
                  style={styles.logo}
                  source={require('./src/assets/images/logo.png')} // Replace with your image path
                  resizeMode="contain" />
                <Text style={styles.headerText}>OpenAI</Text>
              </View>
              </>
            ),
          }}/>

        <Stack.Screen 
          name="OpenAIo1Screen" 
          component={OpenAIo1Screen} 
          options={{
            title: 'OpenAI o1 Model',
            headerStyle: {
              backgroundColor: 'black', // Change header background color
            },
            headerTintColor: 'white',
            headerTitle: (props) => ( // Customizing the title with an image
              <>
              <View style= {styles.openAIheader}>
                <Text style={styles.headerText}>OpenAI o1 Model</Text>
              </View>
              </>
            ),
          }}
        />

        <Stack.Screen 
          name="ChatGptScreen" 
          component={ChatGptScreen} 
          options={{
            title: 'ChatGPT Model',
            headerStyle: {
              backgroundColor: 'black', // Change header background color
            },
            headerTintColor: 'white',
            headerTitle: (props) => ( // Customizing the title with an image
              <>
              <View style= {styles.openAIheader}>
                <Text style={styles.headerText}>ChatGPT</Text>
              </View>
              </>
            ),
          }}
        />
        
        <Stack.Screen 
        name="Research" 
        component={ProfileScreen} 
        options={{
          title: 'ChatGPT Model',
          headerStyle: {
            backgroundColor: 'black', // Change header background color
          },
          headerTintColor: 'white',
          headerTitle: (props) => ( // Customizing the title with an image
            <>
            <View style= {styles.openAIheader}>
              <Text style={styles.headerText}>Research</Text>
            </View>
            </>
          ),
        }}
        />
        
        <Stack.Screen 
        name="ProductScreen" 
        component={ProductScreen} 
        options={{
          title: 'ChatGPT Model',
          headerStyle: {
            backgroundColor: 'black', // Change header background color
          },
          headerTintColor: 'white',
          headerTitle: (props) => ( // Customizing the title with an image
            <>
            <View style= {styles.openAIheader}>
              <Text style={styles.headerText}>Products</Text>
            </View>
            </>
          ),
        }}
        />
        
        <Stack.Screen 
        name="SafetyScreen" 
        component={SafetyScreen} 
        options={{
          title: 'ChatGPT Model',
          headerStyle: {
            backgroundColor: 'black', // Change header background color
          },
          headerTintColor: 'white',
          headerTitle: (props) => ( // Customizing the title with an image
            <>
            <View style= {styles.openAIheader}>
              <Text style={styles.headerText}>Safety</Text>
            </View>
            </>
          ),
        }}
        />
        
        <Stack.Screen 
        name="CompanyScreen" 
        component={CompanyScreen} 
        options={{
          title: 'ChatGPT Model',
          headerStyle: {
            backgroundColor: 'black', // Change header background color
          },
          headerTintColor: 'white',
          headerTitle: (props) => ( // Customizing the title with an image
            <>
            <View style= {styles.openAIheader}>
              <Text style={styles.headerText}>Company</Text>
            </View>
            </>
          ),
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  openAIheader: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
    backgroundColor: "black",
    marginBottom: 30,
    borderRadius: 5
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 24
  },
})