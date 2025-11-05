import InputField from "@/components/InputField";
import { Controller, useFormContext } from "react-hook-form";

export default function DescriptionInput() {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="description"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 5) {
            return "내용을 5자 이상 입력해주세요,";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="내용"
          placeholder="내용을 입력해주세요"
          inputMode="text"
          onChangeText={onChange}
          value={value}
          error={error?.message}
          multiline
        />
      )}
    />
  );
}
