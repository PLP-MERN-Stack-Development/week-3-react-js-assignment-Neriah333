import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

export default function Tasks({ id, title, completed, inProgress, onToggle, onDelete }) {
  return (
    <Card className="w-100 flex justify-between gap-4 bg-gray-500 ">
      <div className="flex justify-center w-64 ">
        <span className={
          completed 
            ? "line-through text-gray-500"
            : inProgress
              ? "text-blue-600 font-medium" 
              : "text-gray-800"
        }>
          {title}
        </span>

       </div>  

        <div className="flex justify-center p-4 gap-10">
          <Button 
          className={`px-3 py-1 rounded ${
            completed ? "bg-black" : "bg-black"
          }`} 
          onClick={() => onToggle(id)}
        >
          {completed ? "Undo" : "Done"}
        </Button>
        <Button 
            className="px-3 py-1 bg-red-200 text-black"
            onClick={() => onDelete(id)}
          >
            Delete
        </Button>
        </div>

    </Card>
      
  );
}

