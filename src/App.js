import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./components/List";
import Post from "./components/Post";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Post} />
          <Route path="/list" component={List} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
