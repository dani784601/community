import { COLORS } from "@/constants";
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

export default function InputField({
  label,
  variant = "filled",
  error = "",
  ...props
}: InputFieldProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[styles.container, styles[variant], error && styles.inputError]}
      >
        <TextInput
          placeholderTextColor={COLORS.GRAY_500}
          style={styles.input}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

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
});
