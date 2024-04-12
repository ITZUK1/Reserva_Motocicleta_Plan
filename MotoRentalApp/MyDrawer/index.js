import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>Home Screen</Text>
        <TouchableOpacity style={{marginTop: 20, width: 200, height: 50, backgroundColor: '#ff5204', padding: 10, alignItems: 'center', borderRadius: 5}}
         onPress={() => props.navigation.navigate('Perfil')}>
          <Text style={{color:'#fff',fontSize:20}}>IR AL Perfil</Text>
        </TouchableOpacity>
    </View>
  );
}

function PerfilScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize: 20}}>Perfil Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function MyDrawer() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Perfil" component={PerfilScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default MyDrawer;
