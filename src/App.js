import './App.css';
import PokemonCard from './components/PokemonCard';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
    <PokemonCard />
    </div>
  );
}

export default App;
