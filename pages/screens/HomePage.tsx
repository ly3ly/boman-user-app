import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import { getUserData } from '../utilities/LocalStorage';
import { useNavigation } from '@react-navigation/native';
import { userData } from '../DataInterfaces';
import { RootStackParamList } from '../DataInterfaces';
import { StackNavigationProp } from "@react-navigation/stack";

const HomePage: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();




    return (
        <View style={styles.container}>
            <Text>123</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    phoneNumber: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default HomePage;