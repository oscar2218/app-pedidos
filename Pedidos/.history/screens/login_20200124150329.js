
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Body, Card, CardItem } from "native-base";
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header noLeft>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Inicio de Sesiòn</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Item fixedLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}