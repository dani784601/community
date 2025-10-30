import { COLORS } from "@/constants";
import { type Post } from "@/types";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FeedItem({ post }: { post: Post }) {
  const isLiked = false;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {post.description}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <Pressable style={styles.menu}>
          <Octicons
            name={isLiked ? "heart-fill" : "heart"}
            size={16}
            color={isLiked ? COLORS.ORANGE_600 : COLORS.BLACK}
          />
          <Text style={isLiked ? styles.activeMenuText : styles.menuText}>
            1
          </Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={16}
            color={COLORS.BLACK}
          />
          <Text>2</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Ionicons name="eye-outline" size={16} color={COLORS.BLACK} />
          <Text>3</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  contentContainer: {
    padding: 16,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: COLORS.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 4,
  },
  title: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontWeight: "600",
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: COLORS.BLACK,
    marginBottom: 14,
  },
  menuText: {
    fontSize: 14,
    color: COLORS.GRAY_700,
  },
  activeMenuText: {
    fontWeight: "500",
    color: COLORS.ORANGE_600,
  },
});
