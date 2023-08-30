import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Input, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { saveUserData } from '../utilities/LocalStorage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../DataInterfaces';
import { StackNavigationProp } from "@react-navigation/stack";
import LoadingOverlay from '../utilities/LoadingLayer';
import mockRequest from '../utilities/mockRequest';


const LoginScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, // 隐藏标题
        });
    }, [navigation]);

    const handleLogin = async () => {

        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError('手机号格式不正确');
            return;
        }

        try {
            setLoading(true);
            await mockRequest();

            const userData = {
                id: 1,
                name: 'John Doe',
                phoneNumber: phoneNumber || '12345678901',
                avatar: 'https://i.pravatar.cc/300',
                token: 'token'
            }
            await saveUserData(userData);
            navigation.navigate('HomeIndex');
            setLoading(false);



        } catch (error) {
            console.error('登录请求发生错误:', error);
        } finally {
            setLoading(false);
        }
    };

    const validatePhoneNumber = (number: string) => {
        const regex = /^[0-9]{11}$/; // 正则表达式匹配11位数字
        return regex.test(number);
    };

    const handlePhoneNumberBlur = (_phoneNumber: any) => {
        if (_phoneNumber && !validatePhoneNumber(_phoneNumber)) {
            setPhoneNumberError('手机号格式不正确');
        } else {
            setPhoneNumberError('');
        }
    };

    const handleChangePhoneNumber = (_phoneNumber: string): void => {
        setPhoneNumber(_phoneNumber);
        handlePhoneNumberBlur(_phoneNumber);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/icon.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>Logo</Text>
            </View>
            <Input
                label="手机号"
                placeholder="请输入手机号"
                value={phoneNumber}
                onChangeText={handleChangePhoneNumber}
                // onBlur={handlePhoneNumberBlur}
                keyboardType="numeric"
                errorMessage={phoneNumberError}
                maxLength={11}
            />
            <Input
                label="密码"
                placeholder="请输入密码"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                rightIcon={
                    <Icon name={showPassword ? "visibility" : "visibility-off"} onPress={() => setShowPassword(!showPassword)} size={24}></Icon>
                }
            />
            <Button title="登录" onPress={handleLogin}
                disabled={isLoading} />
            {isLoading && <LoadingOverlay />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'lightblue'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
});

export default LoginScreen;