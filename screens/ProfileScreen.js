import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"

import { StyledContainer, InnerContainer, SubTitle } from "./../component/style"

const ProfileScreen = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <SubTitle>Welcome to ProfileScreen Page</SubTitle>
      </InnerContainer>
    </StyledContainer>
  )
}

export default ProfileScreen
