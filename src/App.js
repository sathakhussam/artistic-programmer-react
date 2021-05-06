import Header from './components/header/header.component'
import CardContainer from './components/card-container/card-container.component'
import './App.scss';


function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <h1 className="app-title">Latests Posts</h1>
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
