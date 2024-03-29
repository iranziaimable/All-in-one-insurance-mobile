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
  Colors,
} from "./../component/style"

//keyboard avoiding view
import KeyboardAvoidWrapper from "../component/keyboardAvoidWrapper"

//colors
const { brand, darkLight, primary, green } = Colors

const DefineInsurance = ({ navigation }) => {
  const [number, setNumber] = useState(1)

  return (
    <KeyboardAvoidWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Define Insurance</SubTitle>
          <Formik
            initialValues={{ name: "", type: "", description: "", price: "", deduction: "" }}
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
                  label="Name"
                  asterik
                  icon="person"
                  placeholder="Radiant"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <MyTextInput
                  label="Type/Categories"
                  icon="archive"
                  placeholder=" ex: Health Insurance"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("type")}
                  onBlur={handleBlur("type")}
                  value={values.type}
                />

                <MyTextInput
                  label="Description"
                  icon="comment"
                  placeholder="More about you ...."
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                />
                <MyTextInput
                  label="Price"
                  icon="database"
                  placeholder="$ 200"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("price")}
                  onBlur={handleBlur("price")}
                  value={values.price}
                />
                <MyTextInput
                  label="Deduction"
                  icon="link"
                  placeholder="50%"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("deduction")}
                  onBlur={handleBlur("deduction")}
                  value={values.deduction}
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

export default DefineInsurance
