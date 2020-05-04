#### Trabalhando com o Chocolatey

- Instalação no windows 10 usando o powershell no modo administrador: https://jcutrer.com/windows/install-chocolatey-choco-windows10
- No PowerShell digite: **choco install -y nodejs.install python2 jdk8**

#### Código exclusivo para cada plataforma

Existe duas maneiras para criar código exclusivo para cada plataforma. 
A primeira é através do nome do arquvo:

- Para Android o arquivo deve ser feito: MyButton.android.js
- Para IOs o arquivo deve ser feito da seguinte maneira: MyButton.ios.js
- Na importação pode ser chamado sem a necessidade das extensões de cada plataforma: import MyButton from "./MyButton.js";

A segunda maneira é através do módulo Platform:

```js
import { Platform } from 'react-native';
if( Platform.OS === 'android' ){
}
```

#### Debug

No Android, pressione "Ctrl + M" (Cmd + M) para exibir o menu e pressione "Debug JS Remotely".

No iOS pressione "CMD + D" para exibir o menu e pressione "Debug JS Remotely".

#### Algumas permissões de exemplo

No arquivo **android/app/src/main/AndroidManifest.xml**

```xml
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

#### Comandos de rotinas
- Rodar projeto após instalação de uma dependência nova: react-native start --reset-cache
- Limpar o gradlew (pasta android): ./gradlew clean