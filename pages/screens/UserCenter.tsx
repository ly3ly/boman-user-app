import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import { getUserData } from '../utilities/LocalStorage';
import { useNavigation } from '@react-navigation/native';
import { userData } from '../DataInterfaces';
import { RootStackParamList } from '../DataInterfaces';
import { StackNavigationProp } from "@react-navigation/stack";

const UserCenter: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [userData, setUserData] = useState<userData | null>(null)

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const data = await getUserData();
        if (data) {
            setUserData(data);
        } else {
            navigation.navigate('Login'); // 导航到登录页面
        }
    };

    return (
        <View style={styles.container}>
            {userData && (
                <View>
                    <Image source={{ uri: userData.avatar }} style={styles.avatar} />
                    <Text style={styles.name}>{userData.name}</Text>
                    <Text style={styles.phoneNumber}>{userData.phoneNumber}</Text>
                    {/* 其他用户信息... */}
                    <Button title="退出" onPress={() => navigation.navigate('Login')} />
                </View>
            )}
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

export default UserCenter;