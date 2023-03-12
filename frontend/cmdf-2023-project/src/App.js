import './App.css';
import { InputBar } from './components/InputBar';
import { Product } from './components/Product';
import { AddButton } from './components/AddButton';
import { ResourceCard } from './components/ResourceCard';
import { SummaryBox } from './components/SummaryBox';
import { TotalSavingTextBox } from './components/TotalSavingTextBox';
import Landing from './components/landing';

function App() {
  return (
    <div >
      <Landing></Landing>
      {/* <ScrollBar> </ScrollBar>
      <TotalSavingTextBox total={12.59} /> */}
    </div>
  );
}

export default App;
