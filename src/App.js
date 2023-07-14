import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

 const App = () =>  {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(10);

    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height="3px"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key=" "
                  pageSize={pageSize}
                  country="nepal"
                  category=""
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="nepal"
                  category="%20AND%20business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainement"
                  pageSize={pageSize}
                  country="nepal"
                  category="%20AND%20entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="nepal"
                  category="%20AND%20health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="nepal"
                  category="%20AND%20science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="nepal"
                  category="%20AND%20sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="nepal"
                  category="%20AND%20technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}

export default App;