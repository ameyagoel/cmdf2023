import './App.css';
import { InputBar } from './components/InputBar';
import { Product } from './components/Product';
import { AddButton } from './components/AddButton';
import { ResourceCard } from './components/ResourceCard';
import { SummaryBox } from './components/SummaryBox';
import { TotalSavingTextBox } from './components/TotalSavingTextBox';
import ScrollBar from './components/ScrollBar';

function App() {
  return (
    <div >
      <ScrollBar></ScrollBar>
      <TotalSavingTextBox total={12.59} />
    </div>
  );
}

export default App;
