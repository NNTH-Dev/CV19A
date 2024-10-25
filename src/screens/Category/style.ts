import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  btnItem: {
    backgroundColor: COLORS.white,
    height: 60,
    width: SIZES.width - 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  textBtnItem: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  iconBtnItem: {
    backgroundColor: COLORS.primary,
    padding: 18,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
