import { useState } from "react";
import OTPInput from "react-otp-input";

export const OTPGroup = () => {
  const [value, setValue] = useState("");

  return (
    <OTPInput
      value={value}
      onChange={setValue}
      numInputs={4}
      renderInput={(props, index) => (
        <input
          {...props}
          id={`code-${index}`}
          name={`code-${index}`}
          className="mx-2 flex h-16 w-16 flex-col items-center justify-center rounded-xl border-2 border-a7B7B7B bg-white px-5 text-center text-lg text-black outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
          style={{}}
        />
      )}
    />
  );
};
