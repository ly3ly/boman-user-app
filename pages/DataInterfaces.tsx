interface userData {
    id: number;
    name: string;
    phoneNumber: string;
    avatar: string;
    // token: string
}

type RootStackParamList = {
    UserCenter: undefined;
    Login: undefined;
    HomePage: undefined;
    Home: undefined;
};

export { userData, RootStackParamList }