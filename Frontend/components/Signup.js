import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link,Navigate,useNavigate } from 'react-router-native';
import { History } from 'history';



const Signup=()=> {

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [user_name,onChangeUsername]= React.useState("");
  const [emailErrorMessage,setEmailError]=React.useState("");
  const [passwordErrorMessage,setPasswordError]=React.useState("");
  const [usernameErrorMessage,setUsernameError]=React.useState("");


  const validate=async()=>{
    let errorflag=0;
    const emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    const passwordRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
    if(email.length==0){
      setEmailError("*Email field cannot be empty !");
      errorflag=1;
    }
    else if (!emailRegex.test(email)) {
      setEmailError("*Email format is not valid !");
      errorflag=1;
    } 
    else{
        setEmailError("");
    }
    if(password.length==0){
      setPasswordError("*Password field cannot be empty !");
      errorflag=1;
    }
    // else if(!passwordRegex.test(password)){
    //   setPasswordError("Password must contain one lowercase,one uppercase,one digit and one special character");
    //   errorflag=1;
    // }
    else if (password.length < 8||password.length>=20) {
      setPasswordError("*Password must have minimum 8 characters  and maximum 20 characters!");
      errorflag=1;
    }
    else{
      setPasswordError("");
    }

    if(user_name.length==0){
      setUsernameError("*Username field cannot be empty !");
      errorflag=1;
    }
    else if(user_name.length>20){
      setUsernameError("*Username cannot be more than 20 characters");
      errorflag=1;
    }
    else{
      setUsernameError("");
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
          "user_name":user_name
      }
      console.log(typeof(jsonData));
      try{
          const result=await fetch('http://localhost:8080/user/signup', {  
          method: 'POST', 
          mode:'cors',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData)
        })
        const Jsonresult=await result.json();
        if(Jsonresult.code==0){
          setEmailError("*Email Id already exists. Please use othr email id to register successfully !");
        }
      }
      catch(e){
        console.log(e);
      }
    }
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Signup</Text>
      </View>
      <View style={styles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity ><Link to="/"><Text style={styles.signupText}> Login </Text></Link></TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            value={user_name}
            variant="outline"
            placeholder="Username"
            onChangeText={onChangeUsername} 
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>
      {usernameErrorMessage.length > 0 && <Text style={styles.textDanger}>{usernameErrorMessage}</Text>}

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            value={email}
            variant="outline"
            placeholder="Email"
            onChangeText={onChangeEmail} 
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>
      {emailErrorMessage.length > 0 && <Text style={styles.textDanger}>{emailErrorMessage}</Text>}

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            value={password}
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={onChangePassword} 
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
    
      </View>
      {passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{passwordErrorMessage}</Text>}

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={onPress} >
            SIGN UP
        </Button>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>
      <Box  // for navigation
        style={{height:80, width:80}} 
        shadow={3}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        // onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
        shadow={3}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        // onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
        shadow={3}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        // onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
        shadow={3}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Signup />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around'
  },
  textDanger: {
    color: "#dc3545",
    marginLeft:15
  }
});
