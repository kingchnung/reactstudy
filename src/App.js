
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// };

// function Header() {
//   return(
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};


export default App;
