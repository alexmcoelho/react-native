import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/appActions';

class AdicionarContato extends Component {

    renderAdicionarContato() {
        if (!this.props.cadastroResultadoInclusao) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='E-mail'
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            value={this.props.adicionaContatoEmail}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title='Adicionar'
                            color='#115E54'
                            onPress={() => this.props.adicionaContato(this.props.adicionaContatoEmail)}
                        />
                        <Text style={{ color: '#FF0000', fontSize: 20 }}>
                            {this.props.cadastroResultadoTxtErro}
                        </Text>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text style={{ fontSize: 20}}>
                        Cadastro realizado com sucesso!
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                {this.renderAdicionarContato()}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    adicionaContatoEmail: state.AppReducer.adicionaContatoEmail,
    cadastroResultadoTxtErro: state.AppReducer.cadastroResultadoTxtErro,
    cadastroResultadoInclusao: state.AppReducer.cadastroResultadoInclusao
});

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);