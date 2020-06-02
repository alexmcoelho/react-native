import { combineReducers } from 'redux';
import AutenticacaoReducer from './autenticacaoReducer';
import AppReducer from './appReducer';
import ListaContatosReducer from './listaContatosReducer';
import ListaConversaReducer from './listaConversaReducer';
import ListaConversasReducer from './listaConversasReducer';

export default combineReducers({
    AutenticacaoReducer: AutenticacaoReducer,
    AppReducer: AppReducer,
    ListaContatosReducer: ListaContatosReducer,
    ListaConversaReducer: ListaConversaReducer,
    ListaConversasReducer
})