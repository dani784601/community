import { createPost } from "@/api/post";
import { queryClient } from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.replace("/");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "게시글 작성에 실패했습니다.",
        position: "bottom",
      });
    },
  });
}

export { useCreatePost };
