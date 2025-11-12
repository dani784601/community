import { COLORS } from "@/constants";
import { useGetInfinitePosts } from "@/hooks/queries/useInfinitePosts";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

export default function FeedList() {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetInfinitePosts();

  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  return (
    <FlatList
      ref={ref}
      data={posts?.pages.flat() || []}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    ></FlatList>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: COLORS.GRAY_200,
    gap: 12,
  },
});
