import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { View, TouchableOpacity } from "react-native"

//formik
import { Formik } from "formik"

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons"

//datetime picker
import DateTimePicker from "@react-native-community/datetimepicker"

//keyboard avoiding view
import KeyboardAvoidWrapper from "../../component/keyboardAvoidWrapper"

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
} from "../../component/style"

//colors
const { brand, darkLight, primary, green, orange } = Colors

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date(2000, 0, 1))

  //Actual date of birth to be sent
  const [dob, setDob] = useState()

  const onChange = (event, SelectedDate) => {
    const currentDate = SelectedDate || date
    setShow(false)
    setDate(currentDate)
    setDob(currentDate)
  }

  const showDatePicker = () => {
    setShow(true)
  }

  return (
    <KeyboardAvoidWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>All In One Insurance</PageTitle>
          <SubTitle>Insurer Signup</SubTitle>

          {show && (
            <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={true} onChange={onChange} />
          )}
          <Formik
            initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate("HomeScreen")
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
                  label="Email Address"
                  icon="mail"
                  placeholder="abc@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  label="Date of Birth "
                  icon="calendar"
                  placeholder="YYYY - MM - DD"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  value={dob ? dob.toDateString() : ""}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
                />
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInput
                  label="Confim Password"
                  icon="lock"
                  placeholder="* * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyleButton onPress={handleSubmit}>
                  <ButtonText>SignUp</ButtonText>
                </StyleButton>
                <Line />
                <ExtraView>
                  <ExtraText>Already have an Account?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("Login")}>
                    <TextLinkContent>Login </TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyleFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidWrapper>
  )
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={green} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? "md-eye-off" : "md-eye"} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  )
}

export default Signup
