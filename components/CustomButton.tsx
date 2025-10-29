import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { COLORS } from "../constants";

interface CustomButtonProps extends PressableProps {
  label: string;
  size?: "md" | "lg";
  variant?: "filled" | "outlined";
}

export default function CustomButton({
  label,
  size = "lg",
  variant = "filled",
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[variant],
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles[variant]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  md: {
    padding: 12,
  },
  lg: {
    width: "100%",
    height: 44,
  },
  filled: {
    backgroundColor: COLORS.ORANGE_600,
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.WHITE,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.ORANGE_600,
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.ORANGE_600,
  },
  pressed: {
    opacity: 0.8,
  },
});
