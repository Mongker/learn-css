import React from 'react';

// styles
import './App.css';

// components
import ContentRight from './components/ContentRight/ContentRight'
class App extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className='content-left'>
                    <div className={'content-headers'}>
                        <div className={'content-avatar'} />
                    </div>
                    <div className={'content-between'} />
                </div>
                <div className='content-right'>
                    <ContentRight />
                </div>
            </div>
        );
    }
}
export default App;