import {showMessage as showToast} from 'react-native-flash-message';
import {colors} from '../Style';

export const showMessage = (message, type) => {
  showToast({
    message: message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? colors.green : colors.red,
  });
};
