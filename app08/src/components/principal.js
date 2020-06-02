import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './tabBarMenu';
import Conversas from './conversas';
import Contatos from './contatos';

export default class Principal extends PureComponent {

    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Conversas' },
            { key: '2', title: 'Contatos' },
        ]
    }

    _handleChangeTab = index => this.setState({ index });

    _renderHeader = props => <TabBarMenu {...props} />;

    _renderScene = SceneMap({
        '1': Conversas,
        '2': Contatos
    })

    render() {
        return (
            <TabViewAnimated 
                style={styles.scene}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });
