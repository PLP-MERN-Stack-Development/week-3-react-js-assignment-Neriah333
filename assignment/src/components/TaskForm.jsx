import { useState } from "react";
import { Button } from '@/components/ui/button';

export default function TaskForm({ onAdd }){
    const [text, setText] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      if (!text.trim()) return;
      onAdd(text);
      setText("");
    };

    return(
      <form onSubmit={handleSubmit} className="flex mb-4">
          <input
              className="flex-1 p-2 border rounde-l"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="New Task......"
          />

          <Button type="submit">
            Add
          </Button>

      </form>
    )
  }