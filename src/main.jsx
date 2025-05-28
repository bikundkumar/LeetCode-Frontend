import React from "react";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from "./App";
import './index.css'
import LoginPage from "./Login/Login";

const problems = [
  {
    id: 1,
    title: "200. Number of Islands",
    difficulty: "Medium",
    acceptance: "62.2%",
  },
  {
    id: 2,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "47.7",
  },
  {
    id: 3,
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "58.0%",
  },
  {
    id: 4,
    title: "203. Remove Linked List Elements",
    difficulty: "Easy",
    acceptance: "51.7%",
  },
  {
    id: 5,
    title: "204. Count Primes",
    difficulty: "Medium",
    acceptance: "34.7%",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "/problemset/all",
    element: <ProblemSetPage problems={problems} />,
  },
  {
    path: "/problems/:problem_slug",
    element: <SingleProblemPage problems={problems} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactProvider router={router} />
  </React.StrictMode>,
)