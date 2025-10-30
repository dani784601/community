import { type Post } from "@/types";
import { FlatList } from "react-native";
import FeedItem from "./FeedItem";

interface FeedListProps {
  data: Post[];
}

export default function FeedList({ data }: FeedListProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
}
