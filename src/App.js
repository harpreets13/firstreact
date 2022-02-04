import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="My First App" contactText="Contact Us Here"></Navbar>
      <Textform heading="Type the text Here"></Textform>
    </>
  );
}

export default App;
