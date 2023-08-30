import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Input, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { saveUserData } from '../utilities/LocalStorage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, userData } from '../DataInterfaces';
import { StackNavigationProp } from "@react-navigation/stack";
import LoadingOverlay from '../utilities/LoadingLayer';
import mockRequest from '../utilities/mockRequest';
import { userLogin } from '../../apis/UserService';


const LoginScreen: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [phoneNumber, setPhoneNumber] = useState('12345678900');
    const [password, setPassword] = useState('adminadmin');
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
            // await mockRequest();
            let res = await userLogin({
                phone: phoneNumber,
                password: password
            }) as userData
            // console.log(res)

            // const userData = {
            //     id: ud.id,
            //     name: ud.name || '未命名',
            //     phoneNumber: ud.phoneNumber || '12345678901',
            //     avatar: ud.avatar,
            //     token: 'token'
            // }
            await saveUserData(res);
            navigation.navigate('Home');
            setLoading(false);

        } catch (error) {
            console.error('登录请求发生错误:', error);
            setPhoneNumberError('账号或密码错误');
            setPassword('');
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

            <View style={styles.inputContainer}>
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
            </View>
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
        backgroundColor: '#f0f0f0'
    },
    inputContainer: {
        // for ios
        shadowColor: '#000', // 阴影颜色
        shadowOffset: { width: 0, height: 2 }, // 阴影偏移
        shadowOpacity: 0.3, // 阴影透明度
        shadowRadius: 4, // 阴影模糊半径

        //for android
        elevation: 5,

        backgroundColor: '#fff',
        borderRadius: 10,

        paddingHorizontal: 5,
        // paddingVertical: 10,
        paddingTop: 20,
        paddingBottom: 10,
        marginBottom: 20,
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