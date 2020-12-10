import logo from './logo.svg';
import './App.css';
import TitleBar from "./components/TitleBar/TitleBar.jsx";
import Collection from "./components/collection/collection.jsx";

function App() {
  return (
   <div>
     <div>
      <TitleBar />
     </div>
     <div>
      <Collection />
    </div>
    </div>
  );
} 
export default App;
