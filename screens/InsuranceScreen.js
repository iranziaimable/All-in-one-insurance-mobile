import React from "react"
import { Avatar, Button, Card, Paragraph } from "react-native-paper"

import { Line } from "./../component/style"
import { ScrollView } from "react-native-gesture-handler"

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const InsuranceScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Card
        style={{
          marginBottom: 85,
        }}
      >
        <Card.Title title="RADIANT" subtitle="Health Insurance" left={LeftContent} />
        <Card.Content>
          <Paragraph
            style={{
              height: 200,
              width: 330,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              elevation: 3,
              flexDirection: "row",
              paddingLeft: 16,
              paddingRight: 14,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            Based in Kigali & founded in 2012, RADIANT is a young, innovative and fast-growing insurance company that
            offers a complete range of insurance services. Despite our young age, we have achieved a sensational entry
            {"\n"}
            {"\n"}
            Price: 40000 Rwf
            {"\n"}
            Deduction: 50%
          </Paragraph>
          <Card.Actions>
            <Button>Choose</Button>
          </Card.Actions>
        </Card.Content>

        <Line />

        <Card.Title title="UAP" subtitle="Agriculture Insurance" left={LeftContent} />
        <Card.Content>
          <Paragraph
            style={{
              height: 200,
              width: 330,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              elevation: 3,
              flexDirection: "row",
              paddingLeft: 16,
              paddingRight: 14,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            Based in Kigali & founded in 2012, RADIANT is a young, innovative and fast-growing insurance company that
            offers a complete range of insurance services. Despite our young age, we have achieved a sensational entry
            {"\n"}
            {"\n"}
            Price: 40000 Rwf
            {"\n"}
            Deduction: 50%
          </Paragraph>
          <Card.Actions>
            <Button>Choose</Button>
          </Card.Actions>
        </Card.Content>

        <Line />

        <Card.Title title="SORAS" subtitle="Vehicle Insurance" left={LeftContent} />
        <Card.Content>
          <Paragraph
            style={{
              height: 200,
              width: 330,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              elevation: 3,
              flexDirection: "row",
              paddingLeft: 16,
              paddingRight: 14,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            Based in Kigali & founded in 2012, RADIANT is a young, innovative and fast-growing insurance company that
            offers a complete range of insurance services. Despite our young age, we have achieved a sensational entry
            {"\n"}
            {"\n"}
            Price: 40000 Rwf
            {"\n"}
            Deduction: 40%
          </Paragraph>
          <Card.Actions>
            <Button>Choose</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

export default InsuranceScreen
