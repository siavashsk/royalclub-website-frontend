import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { checkIsLogged } from "redux/auth/authApi";
import { checkIsExpired } from "redux/tickets/ticketApi";
import AppRoutes from "./routes";

function App() {
  const queryClient = new QueryClient();
  const { delay } = useSelector((state: any) => state.ticket);
  const { token, isLogged, expirationTime } = useSelector(
    (state: any) => state.auth
  );
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogged(token, expirationTime));
  }, [token, isLogged, expirationTime]);

  useEffect(() => {
    dispatch(checkIsExpired(delay));
  }, [delay]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
