import { useState, useEffect } from 'react';
import Layout from "@/components/Layout";
import Task from '@/components/Tasks';
import TaskForm from '@/components/TaskForm';
import { Button } from "@/components/ui/button"


function App() {
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all | active | completed"); // all | active | completed


  // Persist tasks whenever they change
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const toggleTask = (id) => {
  setTask(prev =>
    prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

 const addTask = title => {
  setTask(curr => [
    { id: Date.now(), title, completed: false },
    ...curr
  ]);
};

// delete task
const deleteTask = (id) => {
  setTask(prev => prev.filter(task => task.id !== id));
};

  // const deleteTask = (index) => {
  //   setTask(prev => prev.filter((_, i) => i !== index));
  // };

  const filteredTasks = task.filter(t => {
  if (filter === "active") return !t.completed;
  if (filter === "completed") return t.completed;
  return true; // 'all'
});


  return (
  <div>
    <div className="bg-gray-800">
      <header>
        <h2 className="text-4xl font-bold text-center">📝Task Manager</h2>
      </header>

      <Layout setFilter={setFilter} />

      <main>
          <h2 className="text-2xl font-bold mb-4 mt-4 text-center">API Data</h2>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Fetch and display data from an API here
            </p>
          <div>
            <TaskForm onAdd={addTask} />

            {/* {task.length ? (
              task.map(task => (
                <Task key={task.id} {...task} onToggle={toggleTask} onDelete={deleteTask}/>
              ))
            ) : (
              <p className="text-gray-500">No tasks yet! Add one above.</p>
            )} */}
            {filteredTasks.length ? (
              filteredTasks.map(t => (
                <Task
                  key={t.id}
                  {...t}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            ) : (
              <p className="text-gray-400 text-center">No tasks to show.</p>
            )}
            
          </div>
          <div>
            <div className="flex gap-2 justify-center my-4">
              <Button
                className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setFilter("active")}
              >
                Inprogress
              </Button>
              <Button
                className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </Button>
          </div>

          </div>
      </main>

      <footer className="bg-white dark:bg-gray-500 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">Author:Pheobe Nyawanda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
  )
}
  
export default App; 

