
import { useState } from "react";
import "./App.css";
import Dropdown from "./components/modules/Dropdown";
import Landing from "./components/modules/Landing";
import MainCard from "./components/modules/MainCard";
import RunButton from "./components/modules/RunButton";
import Layout from "./layout/Layout";

import TodoApp from "./miniProjects/TodoApp";
import Stopwatch from "./miniProjects/StopWatch";
import ColorPicker from "./miniProjects/ColorPicker";

function App() {
  const [selectedProject, setSelectedProject] = useState('Todo App');
  const [currentProject, setCurrentProject] = useState(null);

  const options = ['Todo App', 'Stopwatch', 'Color Picker'];

  const handleSelect = (option) => {
    setSelectedProject(option);
  };

  const handleRun = () => {
    switch (selectedProject) {
      case 'Todo App':
        setCurrentProject(<TodoApp />);
        break;
      case 'Stopwatch':
        setCurrentProject(<Stopwatch />);
        break;
      case 'Color Picker':
        setCurrentProject(<ColorPicker />);
        break;
      default:
        setCurrentProject(null);
    }
  };
  return (
    <Layout>
      <Landing/>
      <MainCard>
      <Dropdown options={options} selectedOption={selectedProject} onSelect={handleSelect} />
        <RunButton onClick={handleRun} />
        {currentProject}
      </MainCard>
    </Layout>
  );
}

export default App;
