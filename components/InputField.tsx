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
}

export default function InputField({
  label,
  variant = "filled",
  ...props
}: InputFieldProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, styles[variant]]}>
        <TextInput
          placeholderTextColor={COLORS.GRAY_500}
          style={styles.input}
          {...props}
        />
      </View>
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
});
