import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import ViewMessage from "./pages/ViewMessage";
import HistoricalDarf from "./pages/historicalDarf";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AccessOpenInvestment from "./pages/accessOpenInvestment";
import LoadingDarf from "./pages/LoadingDarf";
import PendingTaxes from "./pages/pendingTaxes";
import StockTransactions from "./pages/stockTransactions";
import SuccessDarf from "./pages/successDarf";
import Login from "./pages/login";
import Home from "./pages/home";
import DashboardDarf from "./pages/dashboardDarf";
import SimulateDarf from "./pages/simulateDarf";

// Import application provider
import { ApplicationProvider } from "./contexts/ApplicationContext";

setupIonicReact();

const App: React.FC = () => (
  <ApplicationProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/openInvestment" exact={true}>
            <AccessOpenInvestment />
          </Route>
          <Route path="/historicalDarf" exact={true}>
            <HistoricalDarf />
          </Route>
          <Route path="/loading" exact={true}>
            <LoadingDarf />
          </Route>
          <Route path="/pendingTaxes" exact={true}>
            <PendingTaxes />
          </Route>
          <Route path="/successDarf" exact={true}>
            <SuccessDarf />
          </Route>
          <Route path="/stockTransactions" exact={true}>
            <StockTransactions />
          </Route>
          <Route path="/simulate" exact={true}>
            <SimulateDarf />
          </Route>
          <Route path="/dashboardDarf" exact={true}>
            <DashboardDarf />
          </Route>
          <Route path="/message/:id">
            <ViewMessage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </ApplicationProvider>
);

export default App;
