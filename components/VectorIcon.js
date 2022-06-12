import React from 'react';

// Icons from https://oblador.github.io/react-native-vector-icons/
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const VectorIcon = ({color, name, size, type}) => {
  return type === 'Entypo' ? (
    <EntypoIcon color={color} name={name} size={size} />
  ) : type === 'Ionicons' ? (
    <IoniconsIcon color={color} name={name} size={size} />
  ) : type === 'Feather' ? (
    <FeatherIcon color={color} name={name} size={size} />
  ) : type === 'FontAwesome' ? (
    <FontAwesomeIcon color={color} name={name} size={size} />
  ) : null;
};

export default VectorIcon;
