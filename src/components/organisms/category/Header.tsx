import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@/constants/theme';
import Feather from 'react-native-vector-icons/Feather';

type HeaderProps = {
  back?: boolean;
  title: string;
};

const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  const { back } = props;
  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.name}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 60,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.7,
    elevation: 7,
  },
  name: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    textAlign: 'center',
  },
  view: {
    width: 20,
  },
});

export default Header;
