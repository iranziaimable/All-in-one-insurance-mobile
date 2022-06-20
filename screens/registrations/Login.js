import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

//formik  
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyleFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyleButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors
}from '../../component/style';

//colors
const {brand, darkLight, primary} = Colors;

//keyboard avoiding view
import KeyboardAvoidWrapper from '../../component/keyboardAvoidWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword ] = useState(true);

  return (
  <KeyboardAvoidWrapper>  
      <StyledContainer>
        <StatusBar  style="dark"/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('../../assets/img/logo.png')} />
            {/* <PageTitle>All In One Insurance Company</PageTitle> */}
            <SubTitle>Account Login</SubTitle>
            <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
                console.log(values);
                navigation.navigate("Home");
            }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyleFormArea>
                    <MyTextInput 
                        label="Email Address"
                        icon="mail"
                        placeholder="abc@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />
                    <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword} 
                        />
                        <MsgBox>...</MsgBox>
                        <StyleButton onPress={handleSubmit}>
                        <ButtonText >Login</ButtonText>
                        </StyleButton>
                        <Line />
                        <StyleButton  google={true} onPress={handleSubmit}>
                            <Fontisto google={true} name='google' color={primary} size={25}/>
                            <ButtonText google={true}>Sign Up with Google</ButtonText>
                        </StyleButton>
                        <ExtraView>
                            <ExtraText> Don't have an account already?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                </StyleFormArea>
                )}
            </Formik>
        </InnerContainer>
     </StyledContainer>
    </KeyboardAvoidWrapper>
  );
};

const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) =>{
    return (<View>
            <LeftIcon >
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>);
};

export default Login;
