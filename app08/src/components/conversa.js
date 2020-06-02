import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableHighlight, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/appActions';

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
        this.criaFonteDeDdos(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.contatoEmail !== nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(nextProps.contatoEmail);
        }
        this.criaFonteDeDdos(nextProps.conversa);
    }

    _enviaMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail);
    }

    criaFonteDeDdos(conversa) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(conversa)
    }

    renderRow(texto) {
        if(texto.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
                    <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1 }}>{texto.mensagem}</Text>
                </View>    
            )
        }
        return (
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40 }}>
                    <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1 }}>{texto.mensagem}</Text>
                </View>
        )
    }

    /**
     * props.contatoNome e props.contatoEmail foi enviado na 
     * action.conversa que está lá no arquivo contato.js */

    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#EEe4DC', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>

                    <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    />
                </View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput 
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#FFF', fontSize: 18 }}
                    />
                    <TouchableHighlight 
                        onPress={this._enviaMensagem.bind(this)}
                        underlayColor= '#FFF'
                    >
                        <Image source={require('../imgs/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    })
    return ({
        mensagem: state.AppReducer.mensagem,
        conversa: conversa
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa);