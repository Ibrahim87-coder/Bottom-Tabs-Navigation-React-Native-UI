import React from 'react';
import { View,Text,Button,StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import Post from '../screens/Post';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


function Tabs({navigation}) {
    return (
        <Tab.Navigator
           screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{
                    position:'absolute',
                    bottom:35,
                    left:20,
                    right:20,
                    elevation:0,
                    backgroundColor:'#ffffff',
                    borderRadius:15,
                    height:90,
                    shadowColor:'#7f5df0',
                    shadowOffset:{
                        width:0,
                        height:10
                    },
                    shadowOpacity:0.4,
                    shadowRadius:3.5,
                    elevation:2,
                    justifyContent:'center'
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({focused})=>{
                    return  (
                    <View style={styles.tabs}>
                        <Ionicons name='home' size={22} color={focused ? '#e32f45' : '#748c94'} /> 
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Home</Text>
                    </View>
                    )}
                }}/>
                <Tab.Screen name="Search" component={Search}options={{
                    tabBarIcon:({focused})=>{
                        return  (
                        <View style={styles.tabs}>
                            <Ionicons name='search' size={22} color={focused ? '#e32f45' : '#748c94'} /> 
                            <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Search</Text>
                        </View>
                        )}
                }}/>

            <Tab.Screen 
                name="Post" 
                component={Post}
                options={{
                    tabBarIcon:({focused})=>{
                        return  (
                            <Ionicons name='add' size={22} color={focused ? '#e32f45' : '#748c94'} /> 
                        )},
                    tabBarButton:()=>{return(
                        <TouchableOpacity
                            style={styles.touch}
                            >
                        <View style={styles.customBar}>
                            <Ionicons style={{}} name='add' size={40} color='white'/> 
                        </View>
                        </TouchableOpacity>
                    )}
                }}/>
            
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon:({focused})=>{
                    return  (
                    <View style={styles.tabs}>
                        <Ionicons name='chatbubbles' size={22} color={focused ? '#e32f45' : '#748c94'} /> 
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Chat</Text>
                    </View>
                    )}
            }}/>



            <Tab.Screen name="Settings" component={Settings}options={{
                tabBarIcon:({focused})=>{
                    return  (
                    <View style={styles.tabs}>
                        <Ionicons name='settings' size={22} color={focused ? '#e32f45' : '#748c94'} /> 
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Settings</Text>
                    </View>
                    )}
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;


const styles = StyleSheet.create({
    tabs:{
        alignItems:'center',
        justifyContent:'center'
    },
    customBar:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#e32f45',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#7f5df0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.4,
        shadowRadius:3.5,
        elevation:5
        
    },
    touch:{
        top:-30,
        justifyContent:'center',
        alignItems:'center'
    },
})
