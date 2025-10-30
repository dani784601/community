import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FeedItem from "../../components/FeedItem";

const post = {
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
};

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FeedItem post={post} />
      <CustomButton
        label="Button"
        onPress={() => {
          router.push("/auth");
        }}
      />
    </SafeAreaView>
  );
}
