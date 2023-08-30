import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Button, Card, Divider, Icon } from '@rneui/themed';
import { userData } from '../DataInterfaces';
import extractInitials from '../utilities/ExtractName';
import { editBtnStyle as btnStyle } from './StyleUnify';


const UserInfo = (props: any) => {
    const { } = styles
    const { name, avatar, phoneNumber } = props
    return (
        <>
            <View style={styles.header}>
                {avatar.length === 0 ? <Avatar
                    size="xlarge"
                    rounded
                    title={extractInitials(name)}
                    containerStyle={{ backgroundColor: "orange" }}
                /> : <Avatar
                    size={150}
                    rounded
                    source={avatar}
                />}

                <Text style={styles.username}>{name}</Text>
                <Text style={styles.userBio}>{phoneNumber}</Text>
                <Button
                    title="修改信息"
                    containerStyle={btnStyle.editButton}
                    buttonStyle={btnStyle.editButtonStyle}
                    titleStyle={btnStyle.editButtonTitle}
                />
            </View>
            <Divider style={styles.divider} />
            <Card containerStyle={styles.card}>
                <View style={styles.infoRow}>
                    <Icon name="email" type="material" />
                    <Text style={styles.infoText}>johndoe@example.com</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="location-on" type="material" />
                    <Text style={styles.infoText}>New York, USA</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon name="cake" type="material" />
                    <Text style={styles.infoText}>30 years old</Text>
                </View>
            </Card>
        </>

        // <View style={container}>
        //     <View style={avatarStyle}>
        //         {/* {!avatar && <Avatar
        //         size={150}
        //         rounded
        //         title={extractInitials(name)}
        //         containerStyle={{ backgroundColor: "orange" }}
        //     />}
        //     <Avatar
        //         size={150}
        //         rounded
        //         source={avatar}
        //     /> */}
        //         <Avatar
        //             size={100}
        //             rounded
        //             title={extractInitials(name)}
        //             containerStyle={{ backgroundColor: "orange" }}
        //         />
        //     </View>
        //     <Text>user name</Text>
        //     <Text>user name</Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        // paddingVertical: 20,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userBio: {
        fontSize: 16,
        color: '#666',
    },
    divider: {
        marginVertical: 20,
    },
    card: {
        padding: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoText: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default UserInfo;
