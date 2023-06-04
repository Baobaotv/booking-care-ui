import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyle';
import GlobalEvent from './components/GlobalEvent';
import store from './store';
import { Provider } from 'react-redux';
import GlobalSocket from './components/GlobalSocket';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <Provider store={store}>
            <GlobalEvent>
                <GlobalSocket>
                    <App />
                </GlobalSocket>
            </GlobalEvent>
        </Provider>
    </GlobalStyles>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
