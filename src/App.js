import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import ArchivePage from "./pages/archivePage/ArchivePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/landing" />
      </Route>
      <Route path="/landing">
        <LandingPage />
      </Route>

      <Route path="/events">
        <EventsPage />
      </Route>

      <Route path="/archive">
        <ArchivePage />
      </Route>
    </Switch>
  );
}

export default App;
