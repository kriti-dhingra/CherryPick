import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import { Link } from "react-router-native";
const forgot = () =>
{
    return (
        <View style={styles.container}>
          <Text style={styles.logo}>Reset Your Password</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
             />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
             />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder=" Confirm Password..." 
              placeholderTextColor="#003f5c"
             />
          </View>
          <TouchableOpacity rounded style={styles.loginBtn}  >   
                          <Text style={styles.loginText}>RESET</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Link to="/">
          <Text style={styles.forgot}>Login</Text>
           </Link>
          </TouchableOpacity>
         
          </View>
          
        
          
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A4508B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#FFFFFF",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#E899DC",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"black"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"#A4508B"
    }
  });
  export default forgot