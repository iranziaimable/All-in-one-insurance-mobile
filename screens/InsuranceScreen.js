import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

//formik
import { Formik } from "formik"

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons"

//colors
// import { Colors } from './../component/style';

import {
  StyledContainer,
  InnerContainer,
  SubTitle,
  StyleFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  StyleButton,
  ButtonText,
  Colors,
} from "./../component/style"

//keyboard avoiding view
import KeyboardAvoidWrapper from "../component/keyboardAvoidWrapper"

//colors
const { brand, darkLight, primary, green } = Colors

const InsuranceScreen = ({ navigation }) => {
  const [number, setNumber] = useState(1)

  return (
    <KeyboardAvoidWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Welcome to</SubTitle>
          <SubTitle>Insurance Request Form</SubTitle>
          <Formik
            initialValues={{ name: "", id: "", status: "", email: "", occupation: "", city: "" }}
            onSubmit={(values) => {
              // const response = fetch("http://localhost:8282/insurance/" + values)
              // const body = response.json()
              // this.setState({ values: body, isLoading: false })
              console.log(values)
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyleFormArea
                style={{
                  marginBottom: 80,
                }}
              >
                <MyTextInput
                  label="Full Names"
                  icon="person"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <MyTextInput
                  label="ID Number/PassPort"
                  icon="id-badge"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("id")}
                  onBlur={handleBlur("id")}
                  value={values.id}
                />

                <MyTextInput
                  label="Marital Status"
                  icon="people"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("status")}
                  onBlur={handleBlur("status")}
                  value={values.status}
                />
                <MyTextInput
                  label="Email"
                  icon="mail"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <MyTextInput
                  label="Occupation"
                  icon="verified"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("occupation")}
                  onBlur={handleBlur("occupation")}
                  value={values.occupation}
                />
                <MyTextInput
                  label="Town/City"
                  icon="home"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  value={values.city}
                />

                <StyleButton onPress={handleSubmit}>
                  <ButtonText>Submit</ButtonText>
                </StyleButton>
              </StyleFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidWrapper>
  )
}

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={25} color={green} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  )
}

export default InsuranceScreen
