import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, ScrollView } from 'react-native';
import { getUserData } from '../utilities/LocalStorage';
import { useNavigation } from '@react-navigation/native';
import { userData } from '../DataInterfaces';
import { RootStackParamList } from '../DataInterfaces';
import { StackNavigationProp } from "@react-navigation/stack";
import UserInfo from '../components/UserInfo';
import { Button } from '@rneui/themed';
import { editBtnStyle as btnStyle } from '../components/StyleUnify';

const UserCenter: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [userData, setUserData] = useState<userData | null>(null);

    useEffect(() => {
        loadUserData();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, // 隐藏标题
        });
    }, [navigation]);

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
                <ScrollView style={{ marginTop: StatusBar.currentHeight || 50, paddingHorizontal: 16 }}>
                    <UserInfo
                        name={userData.name}
                        avatar={userData.avatar}
                        phoneNumber={userData.phoneNumber} />


                    <Button
                        title="退出"
                        containerStyle={{ marginTop: 200, marginBottom: 50 }}
                        // buttonStyle={btnStyle.editButtonStyle}
                        titleStyle={btnStyle.editButtonTitle}
                        onPress={() => navigation.navigate('Login')}
                    />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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