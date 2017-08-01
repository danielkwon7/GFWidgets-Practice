import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

const Names = [
  'Daniel',
  'Esther',
  'David'
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock/>
        <Weather/>
        <div className='interactive'>
          <AutoComplete names={Names} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
