import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VFSAutonomousVehicleSystem from "./pages/VFSAutonomousVehicleSystem";
import SoftwareFailuresPlatform from "./pages/SoftwareFailuresPlatform";
import ThermostatFirmwarePipeline from "./pages/ThermostatFirmwarePipeline";
import WaterHeaterControlSystem from "./pages/WaterHeaterControlSystem";
import ZeroTrustArchitecture from "./pages/ZeroTrustArchitecture";
import LLMSecurityAnalysis from "./pages/LLMSecurityAnalysis";
import SoftwareSigningResearch from "./pages/SoftwareSigningResearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/vfs-autonomous-vehicle-system" element={<VFSAutonomousVehicleSystem />} />
          <Route path="/projects/software-failures-platform" element={<SoftwareFailuresPlatform />} />
          <Route path="/projects/thermostat-firmware-pipeline" element={<ThermostatFirmwarePipeline />} />
          <Route path="/projects/water-heater-control-system" element={<WaterHeaterControlSystem />} />
          <Route path="/projects/zero-trust-architecture" element={<ZeroTrustArchitecture />} />
          <Route path="/projects/llm-security-analysis" element={<LLMSecurityAnalysis />} />
          <Route path="/projects/software-signing-research" element={<SoftwareSigningResearch />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
