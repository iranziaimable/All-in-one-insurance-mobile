import React from "react"
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import { ButtonText, Colors } from "./../component/style"
import Icon from "react-native-vector-icons/MaterialIcons"

//colors
const { brand, darkLight, primary } = Colors

const ProfileScreen = ({ navigation, route }) => {
  const insur = route.params

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.detailscontainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best Choice</Text>
        </View>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold", marginLeft: 80 }}>{insur.type}</Text>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{insur.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: Colors.white,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              ${insur.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 18,
              marginTop: 10,
            }}
          >
            {insur.description}
          </Text>
        </View>
        <View style={style.requestBtn}>
          <TouchableOpacity>
            <ButtonText
              onPress={() => navigation.navigate("InsuranceScreen")}
              style={{ color: Colors.white, fontSize: 18, fontWeight: "bold" }}
            >
              Request
            </ButtonText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailscontainer: {
    flex: 0.65,
    backgroundColor: Colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 10,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: Colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: Colors.green,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
  },
  requestBtn: {
    marginTop: 20,
    width: 150,
    height: 50,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
})
export default ProfileScreen
