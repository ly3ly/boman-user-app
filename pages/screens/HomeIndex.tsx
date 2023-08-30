import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native'
import BottomBar from "../components/BottomBar";

const HomeIndex: React.FC = () => {
    return (
        <BottomBar />
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})

export default HomeIndex