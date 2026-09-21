import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EngineerComparison } from "@/components/sections/EngineerComparison";
import { ExampleWorkflow } from "@/components/sections/ExampleWorkflow";
import { UseCases } from "@/components/sections/UseCases";
import { Integrations } from "@/components/sections/Integrations";
import { Engineers } from "@/components/sections/Engineers";
import { StartSmall } from "@/components/sections/StartSmall";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <ProcessSteps />
        <EngineerComparison />
        <ExampleWorkflow />
        <UseCases />
        <Integrations />
        <Engineers />
        <StartSmall />
        <TrustSection />
        <WhoItsFor />
        <EngagementModel />
        <ROICalculator />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
