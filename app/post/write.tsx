import { FormProvider, useForm } from "react-hook-form";
import { Text, View } from "react-native";

type FormValues = {
  title: string;
  description: string;
};

export default function PostWriteScreen() {
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return (
    <FormProvider {...postForm}>
      <View>
        <Text>PostWriteScreen</Text>
      </View>
    </FormProvider>
  );
}
