import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { BatLogo } from '../../components/BatLogo/BatLogo'
import { BatButton } from '../../components/BatButton/BatButton'

import styles from './Style'

export default function Home() {
    return(
        <View style={styles.appCcontainer}>

            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>

            <View style={styles.inputContainer}>
                <BatButton />
            </View>

            
            <StatusBar style="auto" />

        </View>
    )
}
