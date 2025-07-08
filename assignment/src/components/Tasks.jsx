// export default function Tasks({ id, title, completed, inProgress, onToggle }) {
//   return (
//     <div className="flex items-center justify-between p-4 bg-white rounded shadow mb-2">
//       <span className={
//         completed 
//           ? "line-through text-gray-500"
//           : inProgress
//             ? "text-blue-600 font-medium" 
//             : "text-gray-800"
//       }>
//         {title}
//       </span>

//       <button 
//         className={`px-3 py-1 rounded ${
//           completed ? "bg-green-200" : "bg-blue-200"
//         }`} 
//         onClick={() => onToggle(id)}
//       >
//         {completed ? "Undo" : "Done"}
//       </button>
//     </div>
//   );
// }

export default function Tasks({ id, title, completed, inProgress, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow mb-2">
      <span className={
        completed 
          ? "line-through text-gray-500"
          : inProgress
            ? "text-blue-600 font-medium" 
            : "text-gray-800"
      }>
        {title}
      </span>

      <button 
        className={`px-3 py-1 rounded ${
          completed ? "bg-green-200" : "bg-blue-200"
        }`} 
        onClick={() => onToggle(id)}
      >
        {completed ? "Undo" : "Done"}
      </button>
      <button 
          className="px-3 py-1 bg-red-200 text-red-800 rounded"
          onClick={() => onDelete(id)}
        >
          Delete
      </button>
    </div>
  );
}

