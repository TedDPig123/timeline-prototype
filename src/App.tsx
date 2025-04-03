import './App.css';
import Gallery from './components/gallery';
import Timeline from './components/timeline-bar';

function App() {
  return (
    <div className="relative flex items-center w-[100vw] h-[100vh]">
      <div className="absolute w-[100%]">
        <Timeline/>  
      </div>    
      <Gallery />
    </div>
  );
}

export default App;
