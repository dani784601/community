import { COLORS } from "@/constants";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { ReactNode } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime);
dayjs.locale("ko");

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
          <Text style={styles.createdAt}>{dayjs(createdAt).fromNow()}</Text>
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
