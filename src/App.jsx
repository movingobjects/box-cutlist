import {
  useMemo,
  useState,
} from 'react';
import CutlistForm from './components/CutlistForm.jsx';
import CutlistTable from './components/CutlistTable.jsx';
import { generateCutlist } from './lib/cutlist.js';
import './App.scss';

const DEFAULT_PARAMS = {
  length: 11,
  width: 4,
  height: 4,
  unit: 'in',
  thickness: 0.5,
  gap: 0,
};

function App() {
  const [params, setParams] = useState(DEFAULT_PARAMS);

  const boards = useMemo(() => {
    const {
      length,
      width,
      height,
    } = params;
    if (![
      length,
      width,
      height,
    ].every((n) => Number.isFinite(n) && n > 0)) return [];

    return generateCutlist(params);
  }, [params]);

  return (
    <section className="app">
      <header className="app__header">
        <h1>Box Cutlist</h1>
        <p>Enter the dimensions of the object your box needs to fit, then generate a cutlist.</p>
      </header>

      <CutlistForm params={params} onChange={setParams} />

      <div className="app__results">
        <h2>Cutlist</h2>
        <CutlistTable boards={boards} unit={params.unit} />
      </div>
    </section>
  );
}

export default App;
