import React from 'react';
import {View} from 'react-native';
import {colors} from '../../utils';

const Gap = ({width = '100%', height = 2, bgColor = colors.white}) => {
  return <View style={{width: width, height: height, backgroundColor: bgColor}} />;
};

export default Gap;
