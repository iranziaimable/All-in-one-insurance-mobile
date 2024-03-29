import styled from "styled-components"
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import { FormItem } from "react-native-form-component"
const StatusBarHeight = Constants.statusBarHeight

// colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#65676b",
  brand: "#6D28D9",
  // green: "#10B981",
  // red: "#EF4444",
  orange: "#e6ba4c",
  blue: "#3a4694",
  white: "#fff",
  dark: "#000",
  red: "#F52A2A",
  light: "#d1cfc9",
  green: "#00B761",
}

const { primary, secondary, tertiary, darkLight, brand, green, red, orange } = Colors

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 2}px;
  background-color: ${primary};
`
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const PageLogo = styled.Image`
  width: 150px;
  height: 120px;
  margin-bottom: 10px;
`

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${orange};
  padding: 10px;
`
export const SubTitle = styled.Text`
  font-size: 22px;
  color: ${green};
  margin-bottom: 10px;
`

export const StyleFormArea = styled.View`
  width: 100%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`

export const StyleButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${green};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
        background-color: ${orange};
        flex-direction: row;
        justify-content: center;
    `}
`

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 18px;

  ${(props) =>
    props.google == true &&
    `
    padding: 5px;
`}
`
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`
export const Line = styled.View`
    height: 3px;
    width: 100%
    background-color: ${green};
    margin-vertical: 10px
`
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`
export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${tertiary};
  font-size: 15px;
`
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
export const TextLinkContent = styled.Text`
  color: ${green};
  font-size: 15px;
`
