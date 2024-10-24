import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '@/constants/theme';

type InputValueProps = {
  title?: string;
  icon: string;
  isPassword?: boolean;
  vnZone?: string;
} & TextInputProps;

const InputValue = (props: InputValueProps) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const { title, icon, isPassword, vnZone } = props;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}> {title} </Text>}
      <View style={styles.inputContainer}>
        <Icons name={icon} size={22} color={COLORS.gray} />
        {vnZone && <Text> {vnZone}</Text>}
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          secureTextEntry={isPassword ? visible : !visible}
          value={props.value}
          onEndEditing={props.onEndEditing}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
              setVisible(!visible);
            }}
          >
            <Icons
              name={show === false ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputContent: {
    backgroundColor: '#f8f9fa',
    borderColor: '#d3d4d5',
    borderWidth: 1,
    borderRadius: 3,
  },
  title: {
    color: '#8a8b8c',
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    flex: 1,
    paddingLeft: 8,
  },
});

export default InputValue;
