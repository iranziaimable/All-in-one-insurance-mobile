import React, { useState } from "react"
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from "react-native"
import insurance from "./registrations/insurance"
import request from "./registrations/request"
import { ButtonText, Colors, Line } from "./../component/style"
const width = Dimensions.get("screen").width - 30

//colors
const { brand, darkLight, primary, blue } = Colors

const Dashboard = ({ navigation }) => {
  const Card = ({ insur, req }) => {
    return (
      <View style={style.card}>
        <View
          style={{
            fontWeight: "bold",
            fontSize: 14,
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{insur.type}</Text>
          <Text>Names: {req.name}</Text>
          <Text>ID: {req.id}</Text>
          <Text>Mar. Status: {req.status}</Text>
          <Text>Email: {req.email}</Text>
          <Text>Occupation: {req.occupation}</Text>
          <Text>City: {req.city}</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginRight: 5,
              backgroundColor: Colors.red,
              borderRadius: 2,
            }}
          >
            <ButtonText
              style={{
                fontSize: 18,
                color: Colors.white,
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Deny
            </ButtonText>
          </View>
          <View
            style={{
              marginRight: 5,
              backgroundColor: Colors.blue,
              borderRadius: 2,
            }}
          >
            <ButtonText
              style={{
                fontSize: 16,
                color: Colors.white,
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Approve
            </ButtonText>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold", fontStyle: "italic" }}>Welcome to</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.green }}>All In One Insurance Dashboard</Text>
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 80,
        }}
        numColumns={2}
        data={request}
        datas={insurance}
        renderItem={({ item }) => <Card insur={item} req={item} />}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 15,
    color: Colors.darkLight,
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: Colors.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: Colors.green,
  },
  card: {
    height: 200,
    backgroundColor: Colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
})

export default Dashboard
