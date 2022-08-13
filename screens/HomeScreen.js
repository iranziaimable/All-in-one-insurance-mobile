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

//colors
const { brand, darkLight, primary } = Colors

const HomeScreen = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <SubTitle>Define Insurance</SubTitle>
        <Formik
          initialValues={{ fullName: "", type: "", description: "", price: "", deduction: "" }}
          onSubmit={(values) => {
            console.log(values)
            navigation.navigate("DefineInsurance")
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyleFormArea>
              <MyTextInput
                label="Full Names"
                icon="person"
                placeholder="John Doe"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              <MyTextInput
                label="Type/Categories"
                icon="archive"
                placeholder=" ex: RSSB"
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
              <Line />
            </StyleFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  )
}

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={25} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  )
}

export default HomeScreen
