import { FC } from "react";
import { default as ReactSelect, SingleValue } from "react-select";
import { Colors } from "../res/colors";

type SelectProps = {
  label: string;
  className?: string;
  value: {label: string, value: number} | null
  options: Array<{label: string, value: number}>
  onChange: (value: SingleValue<{label: string, value: number}>) => void
  onMenuScrollToBottom?: () => void
};

export const Select: FC<SelectProps> = ({ label, value, options, onChange, onMenuScrollToBottom, className = "" }) => {
  return (
    <label className={`block ${className}`}>
      {label}
      <ReactSelect
        className="mt-1"
        value={value}
        options={options}
        onChange={onChange}
        onMenuScrollToBottom={onMenuScrollToBottom}
        styles={{
          control: (base) => ({
            ...base,
            height: 56,
            backgroundColor: Colors.secondaryColor,
          }),
          indicatorsContainer: () => ({}),
        }}
      />
    </label>
  );
};
