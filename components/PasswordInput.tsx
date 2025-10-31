import InputField from "@/components/InputField";
import { Controller, useFormContext } from "react-hook-form";

export default function PasswordInput() {
  const { control } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "비밀번호를 입력해주세요.";
          }
          if (data.length < 8) {
            return "비밀번호는 8자 이상이어야 합니다.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry
          onChangeText={onChange}
          value={value}
          error={error?.message}
        />
      )}
    />
  );
}
