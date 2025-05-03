// import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import { TaskList } from "./components/TaskList";
// import { AddTask } from "./components/AddTask";
import './App.css';
import {ProductList} from "./components/ProductList";

function App() {
  // const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        {/* <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} /> */}
        <ProductList/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
