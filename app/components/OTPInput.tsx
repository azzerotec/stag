import { useState } from "react";
import VendorOTPInput from "react-otp-input";

export const OTPInput = () => {
  const [value, setValue] = useState("");

  return (
    <VendorOTPInput
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
          required
        />
      )}
    />
  );
};
