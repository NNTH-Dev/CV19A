import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { styles } from './style';
import { COLORS, SIZES } from '../../constants/theme';

const iconScanColor = 'rgba(255,255,255,0.1)';

const Scan = ({ navigation }: any) => {
  // eslint-disable-next-line no-unused-vars
  // var scanner: Scanner;

  const [flashMode, setFlashMode] = React.useState('off');
  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off');
    } else if (flashMode === 'off') {
      setFlashMode('on');
    } else {
      setFlashMode('auto');
    }
  };

  const onSuccess = (e: any) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  const makeSlideOutTranslation = (translationType: any, fromValue: any) => {
    return {
      from: {
        [translationType]: SIZES.width * -0.06,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };

  return (
    <QRCodeScanner
      showMarker
      reactivate
      ref={(node) => {
        // scanner = node;
      }}
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      cameraStyle={{ height: SIZES.height }}
      customMarker={
        <View style={styles.rectangleContainer}>
          <View style={styles.topOverlay}>
            <TouchableOpacity style={styles.btnFlash}>
              <Icon name="flash-on" color={COLORS.whiteOpacity} size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('History')}>
              <Text style={styles.txtHistory}>Lịch sử test</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.customsQR}>
            <View style={styles.leftAndRightOverlay} />
            <View style={styles.rectangle}>
              <Icon
                name="qr-code-scanner"
                size={SIZES.width * 0.63}
                color={iconScanColor}
              />
              <Animatable.View
                style={styles.scanBar}
                direction="alternate-reverse"
                iterationCount="infinite"
                duration={2000}
                easing="linear"
                animation={makeSlideOutTranslation(
                  'translateY',
                  SIZES.width * -0.52,
                )}
              />
            </View>

            <View style={styles.leftAndRightOverlay} />
          </View>

          <View style={styles.bottomOverlay}>
            <Text style={styles.txtDescScan}>
              Di chuyển máy ảnh đến vùng có chứa mã QR/BarCode để quét
            </Text>
          </View>
        </View>
      }
    />
  );
};

export default Scan;
