import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  warningSdt: {
    color: COLORS.red,
  },
  inputVal: {
    marginHorizontal: 10,
  },
  lable: {
    height: 150,
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
  },
  txtInformation: {
    margin: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
    fontSize: 25,
  },
  confirm: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  txtConform: {
    color: '#0C0E11',
  },
  btnNext: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    height: 50,
    backgroundColor: COLORS.primary,
    marginHorizontal: 80,
    marginTop: 50,
  },
  next: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnSkip: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 80,
    // marginTop: 100,
  },
  skip: {
    fontSize: 18,
    color: COLORS.primary,
  },

  //OTP
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpView: {
    width: '80%',
    height: 80,
    marginTop: 30,
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  borderStyleHighLighted: {
    borderColor: COLORS.primary,
  },
  underlineStyleBase: {
    borderRadius: SIZES.radius,
    width: 38,
    height: 45,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray3,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  countDown: {
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 70,
  },
  btnResend: {},
  txtResend: { color: COLORS.red },
  btnVerify: {
    width: 180,
    height: 50,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtVerify: {
    color: COLORS.white,
    fontSize: 16,
  },
  txtDesc: {
    width: (SIZES.width * 80) / 100,
    marginTop: 20,
    textAlign: 'left',
    color: COLORS.lightGray3,
    fontSize: 16,
  },
  txtNumber: {
    fontSize: 16,
  },
});
