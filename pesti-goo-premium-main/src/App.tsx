import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import CockroachControl from "./pages/services/CockroachControl";
import TermiteControl from "./pages/services/TermiteControl";
import BedBugControl from "./pages/services/BedBugControl";
import MosquitoControl from "./pages/services/MosquitoControl";
import RodentControl from "./pages/services/RodentControl";
import GeneralPestControl from "./pages/services/GeneralPestControl";
import ResidentialPestControl from "./pages/services/ResidentialPestControl";
import CommercialPestControl from "./pages/services/CommercialPestControl";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/cockroach-control" element={<CockroachControl />} />
        <Route path="/services/termite-control" element={<TermiteControl />} />
        <Route path="/services/bed-bug-control" element={<BedBugControl />} />
        <Route path="/services/mosquito-control" element={<MosquitoControl />} />
        <Route path="/services/rodent-control" element={<RodentControl />} />
        <Route path="/services/general-pest-control" element={<GeneralPestControl />} />
        <Route path="/services/residential-pest-control" element={<ResidentialPestControl />} />
        <Route path="/services/commercial-pest-control" element={<CommercialPestControl />} />
        <Route path="/team" element={<Team />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isLoading ? (
          <Loader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
