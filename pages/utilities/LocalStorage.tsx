import AsyncStorage from '@react-native-async-storage/async-storage';
import { userData } from '../DataInterfaces';

// 保存数据
const saveUserData = async (userData: userData): Promise<void> => {
    console.log('userdata: ', userData)
    try {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        console.log('用户数据已保存');
    } catch (error) {
        console.error('保存用户数据时出错:', error);
    }
};


// 读取数据
const getUserData = async () => {
    try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData !== null) {
            return JSON.parse(userData);
        }
        return null;
    } catch (error) {
        console.error('读取用户数据时出错:', error);
        return null;
    }
};

// 清除数据
const clearUserData = async () => {
    try {
        await AsyncStorage.removeItem('userData');
        console.log('用户数据已清除');
    } catch (error) {
        console.error('清除用户数据时出错:', error);
    }
};

export { saveUserData, getUserData, clearUserData }