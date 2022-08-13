import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
//formik
import { Formik } from "formik"
//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons"
import { StyledContainer, InnerContainer, SubTitle } from "./../component/style"

const Dashboard = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <SubTitle>Welcome to Dashboard Page</SubTitle>
      </InnerContainer>
    </StyledContainer>
  )
}

export default Dashboard
