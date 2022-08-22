import React, { useState } from "react"
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from "react-native"
import insurance from "./registrations/insurance"
import { Colors, Line } from "./../component/style"
import Icon from "react-native-vector-icons/MaterialIcons"
const width = Dimensions.get("screen").width / 2 - 30

//colors
const { brand, darkLight, primary } = Colors

const HomeScreen = ({ navigation }) => {
  const Categories = ["HEALTH", "VEHICLE ", "FIRE ", "AGRICULTURE"]
  const [categoryIndex, setCategoryIndex] = React.useState(0)

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {Categories.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setCategoryIndex(index)}>
            <Text style={[style.categoryText, categoryIndex === index && style.categoryTextSelected]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  const Card = ({ insur }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", insur)}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: insur.like ? "rgba(245, 42, 42,0.2)" : "rgba(0,0,0,0.2) ",
              }}
            >
              <Icon name="favorite" size={18} color={insur.like ? Colors.red : Colors.dark} />
            </View>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 12, marginTop: 10 }}>{insur.type}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>{insur.name}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 19 }}>${insur.price}</Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: Colors.green,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: Colors.white,
                  fontWeight: "bold",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
          <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic" }}>Welcome to</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: Colors.green }}>All In One Insurance</Text>
        </View>
      </View>
      {/* <Line /> */}
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 80,
        }}
        numColumns={2}
        data={insurance}
        renderItem={({ item }) => <Card insur={item} />}
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
    height: 180,
    backgroundColor: Colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
})

export default HomeScreen
