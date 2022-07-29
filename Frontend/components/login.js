import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import { Link } from "react-router-native";
const login = () =>
{
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [emailErrorMessage,setEmailError]=React.useState("");
  const [passwordErrorMessage,setPasswordError]=React.useState("");

  const validate=async()=>{
    let errorflag=0;
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if(email.length==0){
      setEmailError("*Email field cannot be empty !");
      errorflag=1;
    }
    else if (!strongRegex.test(email)) {
      setEmailError("*Email format is not valid !");
      errorflag=1;
    } 
    else{
        setEmailError("");
    }
    if(password.length==0){
      setPasswordError("*Password field cannot be empty !");
      errorflag=1;
    }else if (password.length < 8||password.length>=20) {
      setPasswordError("*Password must have minimum 8 characters  and maximum 20 characters!");
      errorflag=1;
    }
    else{
      setPasswordError("");
    }

    if(!errorflag){
      return true;
    }
    else{
      return false;
    }
  }

  const onPress = async() => {
    const valid=await validate();
    if(valid){
      console.log(email);
      const jsonData = {
          "email": email, 
          "password": password,
      }
      console.log(typeof(jsonData));
      try{
          const result=await fetch('http://localhost:8080/user/login', {  
          method: 'POST', 
          mode:'cors',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData)
        })
        const Jsonresult=result.json();
        console.log(Jsonresult);
      }
      catch(e){
        console.log(e);
      }
    }
  }

    return (
        <View style={styles.container}>
          <Text style={styles.logo}>LOGIN/SIGN UP</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              value={email} 
              onChangeText={onChangeEmail} 
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
            />
          </View>
          {emailErrorMessage.length > 0 && <Text style={styles.textDanger}>{emailErrorMessage}</Text>}
          <View style={styles.inputView} >
            <TextInput 
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
            />
          </View>
          {passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{passwordErrorMessage}</Text>}
        
          <TouchableOpacity rounded style={styles.loginBtn} onPress={onPress}  >   
            <Text style={styles.loginText}  >LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Link to="/forgot">
          <Text style={styles.forgot}>Forget</Text>
          </Link>
          </TouchableOpacity>
          <TouchableOpacity>
          <Link to="/Signup">
            <Text style={styles.signText}>Signup</Text>
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
    marginTop:10,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"white",
    fontSize:15,
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
    color:"#A4508B",
    fontSize:20,
    fontWeight: "bold"
  },

  signText:{
    color:"#FFFFFF",
    fontSize:20,
    fontWeight: "bold"
  },
  textDanger: {
    color: "#FFFFFF",
  }
});
export default login