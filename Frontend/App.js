import React from 'react';
import Login from './components/login';
import Signup from './components/Signup';
import Forgot from './components/forgot';
import { NativeRouter, Route, Routes } from "react-router-native";
export default class App extends React.Component {


  render()
  {
    return (  
      <>
       <NativeRouter>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route path="/Signup" element={<Signup/>} />
        </Routes>
      </NativeRouter>
      </>
    );
  }

}

