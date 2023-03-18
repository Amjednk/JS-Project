/*The main Contact Management System App */
import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateContact from "./pages/CreateContact";
import ContactList from "./pages/ContactList";
import EditContact from "./pages/EditContact";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
        <Layout>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateContact/>} />
            <Route path="/allcontacts" element={<ContactList/>} />
            <Route path="/edit/:id" element={<EditContact/>} />
          </Switch>
        </Layout>
  
  );
};

export default App;