import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home/>
                        }
                    />

                    <Route
                        path="/subreddit/:subredditId"
                        element={
                            <Subreddit/>
                        }
                    />

                </Routes>
            </Router>
        </>
    );
}

export default App;
