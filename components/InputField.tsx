import { COLORS } from "@/constants";
import { ForwardedRef, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "outline" | "filled" | "standard";
  error?: string;
}

function InputField(
  { label, variant = "filled", error = "", ...props }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          error && styles.inputError,
          props.multiline && styles.multiline,
        ]}
      >
        <TextInput
          ref={ref}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          placeholderTextColor={COLORS.GRAY_500}
          style={styles.input}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export default forwardRef(InputField);

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: COLORS.GRAY_700,
    marginBottom: 5,
  },
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  outline: {},
  filled: {
    backgroundColor: COLORS.GRAY_100,
  },
  standard: {},
  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
  error: {
    color: COLORS.RED_500,
    fontSize: 12,
    marginTop: 5,
  },
  inputError: {
    backgroundColor: COLORS.RED_100,
  },
  multiline: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
});
