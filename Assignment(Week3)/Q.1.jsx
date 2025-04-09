import { useState } from 'react';

function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
}
