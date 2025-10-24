import React from 'react';
import 'boorstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min';
import '.App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContent';
import PrivateRoute from '../auth/PrivateRoute';

//Componentes principais
import Logo from '../components/templete/Logo';
import Nav from '../components/templete/Nav';

//Páginas
import Login from '../components/user/LoginForm';
import Register from '../components/user/Register';

import UserCrud from '../components/user/UserCrud';
import  Home from '../components/user/Home';
import  Footer from '../components/user/Footer';

function App (){
  return (
    <AuthProvider>
      <Router>
        <div className = "app"> {/* Layout principal com grid e sem fundo branco*/}
        </div>
      </Router>
    </AuthProvider>
  )
}