import React, {
  Suspense,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import moment from "moment";
import AppContext from "./Context/AppContext";



import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const loading = (
  <div className="loading">
    <div className="spinner-grow text-success" role="status"></div>
  </div>
);

// Pages
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Pregister = React.lazy(() => import("./pages/Pregister/Pregister"));
const LandingPage = React.lazy(() => import("./pages/Landingpage/Landingpage"));

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));


function App() {





  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider>
        <Router>
          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/Register" name="Login Page" element={<Register />} />
              <Route exact path="/Pregister" name="Login Page" element={<Pregister />} />
              <Route exact path="/" name="Login Page" element={<LandingPage />} />
              <Route path="/*" name="get" element={<DefaultLayout />} />



            </Routes>
          </Suspense>
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
