import InputField from "@/components/InputField";
import { Controller, useFormContext } from "react-hook-form";

export default function TitleInput() {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "제목을 입력해주세요,";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label="제목"
          autoFocus
          placeholder="제목을 입력해주세요"
          inputMode="text"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => setFocus("description")}
          onChangeText={onChange}
          value={value}
          error={error?.message}
        />
      )}
    />
  );
}
