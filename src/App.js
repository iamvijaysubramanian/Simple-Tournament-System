import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Participants from "./Components/Participants";
import CreateParticipants from "./Components/CreateParticipants";
import ViewParticipants from "./Components/ViewParticipants";
import EditParticipants from "./Components/EditParticipants";
import PortalLayout from "./Components/PortalLayout";
import Login from "./Components/Login";
import { UserContext } from "./Components/Usercontext";
import { useContext } from "react";
import Tournament from "./Components/Tournament";
import EditTournament from "./Components/EditTournament";
import ViewTournament from "./Components/ViewTournament";
import CreateTournament from "./Components/CreateTournament";

function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="/portal/dashboard" element={<Dashboard />} />
          <Route exact path="/portal/users" element={<Participants />} />
          <Route
            exact
            path="/portal/users/user_create"
            element={<CreateParticipants />}
          />
          <Route path="/portal/users/user/:id" element={<ViewParticipants />} />
          <Route path="/portal/users/edit/:id" element={<EditParticipants />} />
          <Route path="/portal/tournaments" element={<Tournament />} />
          <Route
            exact
            path="/portal/tournaments/tournament_create"
            element={<CreateTournament />}
          />
          <Route
            path="/portal/tournaments/tournament/:id"
            element={<ViewTournament />}
          />
          <Route
            path="/portal/tournaments/edit/:id"
            element={<EditTournament />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
