import type { Component } from 'solid-js';

import TectonicViewer from './TectonicViewer';
import LogsViewer from './LogsViewer';

import styles from './App.module.css';

const App: Component = () => {
  return (<>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-xxl">
        <div class="dropdown me-3">
          <button class="btn btn-primary dropdown-toggle" id="dd1" type="button" data-bs-toggle="dropdown" aria-expanded="false">Load</button>
          <ul class="dropdown-menu" aria-labelledby="dd1" id="tectonic-loader"></ul>
        </div>
        <a class="btn btn-primary me-3" type="button" href="editor.html"> Create new </a>
        <button class="btn btn-primary me-auto" id="clear" type="button" onclick={() => reset()} disabled> Reset </button>
        <button class="btn btn-success me-3"    id="solve" type="button" onclick={() => solve()} disabled> Solve </button>
        <button class="btn btn-success"         id="help"  type="button" onclick={() => help()}  disabled> Help </button>
      </div>
    </nav>
    <div class="container-xxl">
      <TectonicViewer ></TectonicViewer>
      <LogsViewer ></LogsViewer>
    </div>
  </>);
};

export default App;
