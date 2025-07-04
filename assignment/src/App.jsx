
import React from 'react';

export default function App() {
  // const [count, setCount] = useState(0);


  return (
    <div className="justify-center">
      <h1 className="text-3xl font-bold mt-10 text-center">📝Task Manager</h1><br></br>
      <p className="text-center">You're all caught up! Add a new task to get started.</p>

      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300 dark:text-gray-400">
            © {new Date().getFullYear()} Pheobe Nyawanda
          </p>
        </div>
      </footer>
    </div>
  );
}
