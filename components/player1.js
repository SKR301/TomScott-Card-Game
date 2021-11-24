import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

export default class Player1 extends Component{
    constructor(props){
        super(props);
        this.state = { beads: 4, cards: [], score: 0};
    }  

    componentDidMount(){
    }

    render () {
        if(this.state.cards.length == 0){
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={(this.props.isMyTurn)?styles.beadsContainerEnabled:styles.beadsContainerDisabled} onPress={()=>alert('passCard function')} disabled={!this.props.isMyTurn}>
                        <Text style={styles.beads}>{this.state.beads}</Text>
                    </TouchableOpacity>
                    <View style={styles.cardContainer} >
                        <TouchableOpacity style={(this.props.isMyTurn)?styles.noCardsButtonEnabled:styles.noCardsButtonDisabled} onPress={()=>alert('addCard function')} disabled={!this.props.isMyTurn}>
                            <Text style={(this.props.isMyTurn)?styles.noCardsTextEnabled:styles.noCardsTextDisabled}>Click to add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={(this.props.isMyTurn)?styles.beadsContainerEnabled:styles.beadsContainerDisabled} onPress={()=>alert('addCard function')} disabled={!this.props.isMyTurn}>
                        <Text style={styles.beads}>{this.state.beads}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardContainer} onPress={()=>alert('addCard function')} disabled={!this.props.isMyTurn}>
                        {
                            this.state.cards.map((card) => (
                                <View style={(this.state.cards.length > 10)?styles.cardFlexed:styles.cardUnflexed}>
                                    <Text key={card} style={styles.cardText}>{card}</Text>
                                </View>
                            ))
                        }
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardContainer:{
        flex: 9,
        flexDirection: 'row',
        marginLeft: 100,
    },
    cardUnflexed:{
        width: 125,
        borderColor: 'yellow',
        backgroundColor: '#29292a',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: -50
    },
    cardFlexed:{
        flex: 1,
        borderColor: 'yellow',
        backgroundColor: '#29292a',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: -50
    },
    cardText:{
        flex: 1,
        color: 'white',
        padding: 15,
        fontSize: 30
    },
    noCardsButtonEnabled:{
        alignSelf: 'center',
        borderColor: 'yellow',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10
    },
    noCardsButtonDisabled:{
        alignSelf: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10
    },
    noCardsTextEnabled:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center'
    },
    noCardsTextDisabled:{
        color: 'grey',
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center'
    },
    beadsContainerEnabled:{
        flex: 1,
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 100,
        height: 105,
        width: 100,
        marginHorizontal: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    beadsContainerDisabled:{
        flex: 1,
        borderColor: 'dodgerblue',
        borderWidth: 5,
        borderRadius: 100,
        height: 105,
        width: 100,
        marginHorizontal: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    beads:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 50
    }
})
