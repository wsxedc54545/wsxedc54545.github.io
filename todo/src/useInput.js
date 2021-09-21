// 從 react 引入 useState
import { useState } from "react";

// 匯出 useInput()
export default function useInput() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    setValue,
    handleChange,
  };
}