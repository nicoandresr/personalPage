import app from 'apprun';

const state = 'Hello world';

const view = state => (
  <div>
    <h1>{state}</h1>
  </div>
);

const update = {};

app.start('app', state, view, update);

