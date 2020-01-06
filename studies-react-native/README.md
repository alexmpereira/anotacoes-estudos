# React Native - Anotações

#### Trabalhando com o Expo

- Site oficial: https://expo.io/
- Instalando via npm: **npm install expo-cli --global**
- Baixar o aplicativo do Expo no celular.
- Iniciando um novo projeto via expo: **expo init nomeProjeto**
    - Após a instalação, dentro do projeto digite: **expo start**

#### Trabalhando com o Chocolatey

- Instalação no windows 10 usando o powershell no modo administrador: https://jcutrer.com/windows/install-chocolatey-choco-windows10
- No PowerShell digite: **choco install -y nodejs.install python2 jdk8**

#### Comandos via npm

- Instalação do React Native via npm: **npm install -g react-native-cli**
- Criar um novo projeto via npm digite o comando: **react-native init nomeProjeto**
- Rodar o projeto para android digite: **npx react-native run-android**

#### Código exclusivo para cada plataforma

Existe duas maneiras para criar código exclusivo para cada plataforma. 
A primeira é através do nome do arquvo:

- Para Android o arquivo deve ser feito: MyButton.android.js
- Para IOs o arquivo deve ser feito da seguinte maneira: MyButton.ios.js
- Na importação pode ser chamado sem a necessidade das extensões de cada plataforma: import MyButton from "./MyButton.js";

A segunda maneira é através d módulo Platform:

```js
import { Platform } from 'react-native';
if( Platform.OS === 'android' ){
}
```