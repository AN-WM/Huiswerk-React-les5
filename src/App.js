import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit';
import './App.css';

function App() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                error={error}
                                toggleError={toggleError}
                                loading={loading}
                                toggleLoading={toggleLoading}
                            />
                        }
                    />

                    <Route
                        path="/subreddit/:subredditId"
                        element={
                            <Subreddit
                                error={error}
                                toggleError={toggleError}
                                loading={loading}
                                toggleLoading={toggleLoading}
                            />
                        }
                    />

                </Routes>
            </Router>
        </>
    );
}

export default App;
