import React from "react";
import { View } from "react-native";
import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/conteudo";
import Rodape from "./components/rodape";

export default function App() {
  return (
    <View style={{flex:1}}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}