import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import Principal from './components/principal'
import SobreJogo from './components/sobreJogo'
import OutrosJogos from './components/outrosJogos'
import Resultados from './components/resultados'

const rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={Principal} initil title='Principal' /> 
        <Scene key='sobreJogo' component={SobreJogo} /> 
        <Scene key='outrosJogos' component={OutrosJogos} /> 
        <Scene key='resultados' component={Resultados} title='Resultados' /> 
    </Router>
)

export default rotas