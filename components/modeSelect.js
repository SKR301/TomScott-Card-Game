import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Link } from 'react-router-dom';

export default class ModeSelect extends Component{
    constructor(props){
        super(props);
    }  

    render () {
        return (
            <View style={styles.cntMode}>
                {/* <Link to='/single'> */}
                    <TouchableOpacity style={styles.btnMode} disabled={true}>
                        <Text style={styles.txtModeUnderConstruction}>Single Player</Text><Text style={styles.txtModeUnderConstruction}>(in progress)</Text>
                    </TouchableOpacity>
                {/* </Link> */}
                <Link to='/multi'>
                    <TouchableOpacity style={styles.btnMode}>
                        <Text style={styles.txtMode}>Multi Player</Text>
                    </TouchableOpacity>
                </Link>
                {/* <Link to='/bot'> */}
                    <TouchableOpacity style={styles.btnMode} disabled={true}>
                        <Text style={styles.txtModeUnderConstruction}>Bot Play</Text><Text style={styles.txtModeUnderConstruction}>(in progress)</Text>
                    </TouchableOpacity>
                {/* </Link> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cntMode:{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
    },
    btnMode:{
        backgroundColor: 'blue',
        width: 400,
        height: 100,
        textAlign: 'center',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: 'yellow',
        borderWidth: 5,
        marginVertical: 10
    },
    txtMode:{
        fontSize: 50,
        color: 'white',
        padding: 10
    },
    txtModeUnderConstruction:{
        fontSize: 25,
        color: 'white',
        padding: 5
    }
})