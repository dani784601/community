import InputField from "@/components/InputField";
import { Controller, useFormContext } from "react-hook-form";

export default function EmailInput() {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "이메일을 입력해주세요,";
          }
          if (!data.includes("@")) {
            return "이메일 형식이 맞지 않습니다.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label="이메일"
          autoFocus
          placeholder="이메일을 입력해주세요"
          inputMode="email"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => setFocus("password")}
          onChangeText={onChange}
          value={value}
          error={error?.message}
        />
      )}
    />
  );
}
