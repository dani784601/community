import CustomButton from "@/components/CustomButton";
import FeedList from "@/components/FeedList";
import { COLORS } from "@/constants";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: "title",
    description: "description",
    createdAt: "2025-10-30T16:12:00.000Z",
    author: {
      id: 1,
      nickname: "nickname",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 2,
    title: "title",
    description: "description",
    createdAt: "2025-10-30T16:12:00.000Z",
    author: {
      id: 2,
      nickname: "nickname",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 2,
    commentCount: 2,
    viewCount: 2,
  },
  {
    id: 3,
    userId: 3,
    title: "title",
    description: "description",
    createdAt: "2025-10-30T16:12:00.000Z",
    author: {
      id: 3,
      nickname: "nickname",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 3,
    commentCount: 3,
    viewCount: 3,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList data={dummyData} />
      <CustomButton
        label="Button"
        onPress={() => {
          router.push("/auth");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: COLORS.GRAY_200,
    gap: 12,
  },
});
