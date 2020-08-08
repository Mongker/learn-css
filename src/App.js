import React from 'react';

// styles
import './App.css';

// components
import ContentRight from './components/ContentRight/ContentRight'
class App extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className='header'>
                    <h1>Header</h1>
                </div>
                <div className='content'>
                    <div className='content-left'>
                        <h1>Content Left</h1>
                    </div>
                    <div className='content-right'>
                        <ContentRight />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;