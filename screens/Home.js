import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

//formik  
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

//colors
// import { Colors } from './../component/style';

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
}from './../component/style';

//colors
const {brand, darkLight, primary} = Colors;

const Home = ({navigation}) => {
    const [hidePassword, setHidePassword ] = useState(true);

  return (
    <StyledContainer>
        <StatusBar  style="dark"/>
        <InnerContainer>

            <SubTitle>Account Home Page</SubTitle>
            <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
                console.log(values);
               
            }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyleFormArea>
 
                        <StyleButton>
                        <ButtonText>LogOut</ButtonText>
                        </StyleButton>
                        <Line />
                        <ExtraView>
                           
                            <TextLink >
                               
                            </TextLink>
                        </ExtraView>
                </StyleFormArea>
                )}
            </Formik>
        </InnerContainer>
    </StyledContainer>
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

export default Home;
