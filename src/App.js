
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import StateForm from './components/StateForm';

const App = () => {

  return (
    <div className="App">
      <Header />
      {/* <Body /> */}
      <StateForm />
      <Footer />
    </div>
  );
};


export default App;
