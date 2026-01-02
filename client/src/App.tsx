import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CityPage from "@/pages/CityPage";
import Contact from "@/pages/Contact";
import Offerte from "@/pages/Offerte";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/loodgieter-amsterdam">
        {() => <CityPage citySlug="amsterdam" />}
      </Route>
      <Route path="/loodgieter-rotterdam">
        {() => <CityPage citySlug="rotterdam" />}
      </Route>
      <Route path="/loodgieter-leiden">
        {() => <CityPage citySlug="leiden" />}
      </Route>
      <Route path="/loodgieter-zoetermeer">
        {() => <CityPage citySlug="zoetermeer" />}
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/offerte" component={Offerte} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
