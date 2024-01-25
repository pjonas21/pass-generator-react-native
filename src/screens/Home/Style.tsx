import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    appCcontainer: {
        flex: 1,
        backgroundColor: '#4d4d4d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        padding: 20,
        backgroundColor: '#4d4d4d'
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default styles