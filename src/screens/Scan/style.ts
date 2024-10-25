import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants/theme';

const overlayColor = 'rgba(0,0,0,0.4)';

const rectDimensions = SIZES.width * 0.65;
const rectBorderWidth = SIZES.width * 0.008;
const rectBorderColor = 'rgba(255,255,255,0.8)';

const scanBarWidth = SIZES.width * 0.46;
const scanBarHeight = SIZES.width * 0.0025;
const scanBarColor = COLORS.green;

export const styles = StyleSheet.create({
  container: { flex: 1 },
  txtDescScan: {
    fontSize: 16,
    color: COLORS.lightGray3,
    width: SIZES.width * 0.7,
    textAlign: 'center',
  },
  customsQR: { flexDirection: 'row' },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  topOverlay: {
    flex: 1,
    height: SIZES.width,
    width: SIZES.width,
    backgroundColor: overlayColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomOverlay: {
    flex: 1,
    height: SIZES.width,
    width: SIZES.width,
    backgroundColor: overlayColor,
    paddingBottom: SIZES.width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftAndRightOverlay: {
    height: SIZES.width * 0.65,
    width: SIZES.width,
    backgroundColor: overlayColor,
  },
  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
  btnFlash: {
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHistory: {},
  txtHistory: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.whiteOpacity,
    margin: 22,
    borderBottomColor: COLORS.whiteOpacity,
    borderBottomWidth: 3,
  },
});
