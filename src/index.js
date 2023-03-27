import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './wssc.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  NavLink,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Notes from './pages/Notes';
import AccountInformation from './pages/AccountInformation';

Amplify.configure(config);



{/* <RouterProvider router={router} /> */}
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AccountInformation />} />
        <Route path="notes" element={<Notes />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
);

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
