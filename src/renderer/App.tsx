import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { JSX, useState } from 'react';
import FormView from './containers/FormView';

const views = {
  VIEW: 'VIEW',
  CREATE: 'CREATE',
  LISTEN: 'LISTEN',
};

function Layout() {
  const [view, setView] = useState<string>('VIEW');
  let content: JSX.Element = <FormView />;

  switch (view) {
    case views.VIEW:
      content = <FormView />;
      break;
    case views.CREATE:
      content = <>Create form</>;
      break;
    case views.LISTEN:
      content = <>Listen form</>;
      break;
  }

  return (
    <div className="layout">
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <button onClick={() => setView(views.VIEW)}>View</button>
        <button onClick={() => setView(views.CREATE)}>Create</button>
        <button onClick={() => setView(views.LISTEN)}>Listen</button>
      </div>
      {content}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}
