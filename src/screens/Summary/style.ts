import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  headerBg: {
    paddingHorizontal: 10,
    width: SIZES.width,
    // height: SIZES.height * 0.3,
    backgroundColor: COLORS.primary,
    paddingBottom: 20,
  },
  areaChart: {
    height: 200,
    padding: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  topParams: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtHeader: {
    marginVertical: 20,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.white,
  },
  viewData: {
    padding: 10,
    // width: 100,
    borderRadius: 8,
  },
  data: {
    marginTop: 20,
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  status: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.white,
  },
  txtDateUpdate: {
    textAlign: 'right',
    margin: 10,
    fontSize: 12,
    color: COLORS.white,
  },
  listTab: {
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.whiteOpacity,
  },
  chartStyle: {
    margin: 5,
    height: SIZES.height * 0.25,
    width: SIZES.width * 0.5,
  },
  markerPoint: {
    padding: 10,
    backgroundColor: 'rgba(255,10,0,0.5)',
    borderRadius: 50,
  },
  title: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'gray',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 10,
  },
  btnEnable: {
    backgroundColor: COLORS.blue,
    borderRadius: 8,
    margin: 1,
  },
});
