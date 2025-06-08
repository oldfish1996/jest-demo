// TodoInput.tsx
import { useState } from "react";

export default function TodoInput({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div>
      <input
        placeholder="请输入待办事项"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}
