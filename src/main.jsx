import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Layout from "./Layout";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Students, { loader as studentLoader } from "./routes/Students";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/students",
        element: <Students />,
        loader: studentLoader,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />} errorElement={<NotFound />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="students" element={<Students />} loader={StudentLoader} />
//       <Route
//         path="students/create"
//         element={<CreateStudent />}
//         action={CreateStduentAction}
//       />

//       <Route
//         path="students/:id/view"
//         element={<ViewStudent />}
//         loader={ViewStudentLoder}
//       />
//       <Route
//         path="students/:id/edit"
//         element={<EditStudent />}
//         loader={EditStudentLoader}
//         action={EditStudentAction}
//       />
//       <Route path="students/:id/delete" action={DeleteStudentAction} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
