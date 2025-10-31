import { COLORS } from "@/constants";
import { ReactNode } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface ProfileProps {
  onPress: () => void;
  imageUri?: string;
  nickname: string;
  createdAt: string;
  option?: ReactNode;
}

export default function Profile({
  onPress,
  imageUri,
  nickname,
  createdAt,
  option,
}: ProfileProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.profileContainer}>
        <Image
          style={styles.profile}
          source={
            imageUri
              ? { uri: imageUri }
              : require("@/assets/images/default-profile.jpg")
          }
        />
        <View style={{ gap: 4 }}>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.createdAt}>{createdAt}</Text>
        </View>
      </Pressable>
      {option}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nickname: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.BLACK,
  },
  createdAt: {
    fontSize: 14,
    color: COLORS.GRAY_500,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.GRAY_300,
  },
});
