import './App.css';
import TodosContainer from './components/container/TodoContainer';
import TodoFormContainer from './components/container/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        {/* Filter Options contain Filter Container */}
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
