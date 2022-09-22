import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

//? location name diractory
//? https://oblador.github.io/react-native-vector-icons/

const Icon = ({nameIC, sizeIC, colorIC, typeIC}) => {
  if (typeIC === 'AntDesign') {
    return <AntDesign name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Entypo') {
    return <Entypo name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'EvilIcons') {
    return <EvilIcons name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Feather') {
    return <Feather name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'FontAwesome') {
    return <FontAwesome name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'FontAwesome5') {
    return <FontAwesome5 name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Fontisto') {
    return <Fontisto name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Foundation') {
    return <Foundation name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Ionicons') {
    return <Ionicons name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'MaterialIcons') {
    return <MaterialIcons name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Octicons') {
    return <Octicons name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'Zocial') {
    return <Zocial name={nameIC} size={sizeIC} color={colorIC} />;
  }
  if (typeIC === 'SimpleLineIcons') {
    return <SimpleLineIcons name={nameIC} size={sizeIC} color={colorIC} />;
  }

  return <FontAwesome name={nameIC} size={sizeIC} color={colorIC} />;
};

export default Icon;
