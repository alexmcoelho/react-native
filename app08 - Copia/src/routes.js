import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/formLogin';
import FormCadastro from './components/formCadastro';
import BoasVindas from './components/boasVindas';
import Principal from './components/principal';
import AdicionarContato from './components/adicionarContato';
import Conversa from './components/conversa';

export default props => (
    <Router 
        navigationBarStyle={{ backgroundColor: '#115e54'}} 
        titleStyle={{ color: '#FFF' }}
    >
        <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar={ true } />
        <Scene key='formCadastro' component={FormCadastro} title='Cadastro' hideNavBar={ false } />
        <Scene key='boasVindas' component={BoasVindas} title='Boas vindas' hideNavBar={ true } />
        <Scene key='principal' component={Principal} title='Principal' hideNavBar={ true }  />
        <Scene key='adicionarContato' component={AdicionarContato} title='Adicionar contato' hideNavBar={ false } />
        <Scene key='conversa' component={Conversa} title='Conversa' hideNavBar={ false } />
    </Router> 
)