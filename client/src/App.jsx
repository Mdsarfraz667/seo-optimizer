import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KeywordResearchPage from "./components/KeywordResearchPage";
import OnPageOptimizationPage from "./components/OnPageOptimizationPage";
import ContentStrategyPage from "./components/ContentStrategyPage";
import TechnicalSEOPage from "./components/TechnicalSEOPage";
import LinkBuildingPage from "./components/LinkBuildingPage";
import AnalyticsPage from "./components/AnalyticsPage";
import CompetitorAnalysisPage from "./components/CompetitorAnalysisPage";
import SEOTrendsPage from "./components/SEOTrendsPage";
import SEOAuditPage from "./components/SEOAuditPage";
import CollaborationPage from "./components/CollaborationPage";
import LocalSEOPage from "./components/LocalSEOPage";

function App() {
  return (
    <Router>
      <div>
        <h1>SEO Optimizer</h1>
        <Routes>
          <Route path="/keywords" component={KeywordResearchPage} />
          <Route path="/on-page" component={OnPageOptimizationPage} />
          <Route path="/content-strategy" component={ContentStrategyPage} />
          <Route path="/technical-seo" component={TechnicalSEOPage} />
          <Route path="/link-building" component={LinkBuildingPage} />
          <Route path="/analytics" component={AnalyticsPage} />
          <Route
            path="/competitor-analysis"
            component={CompetitorAnalysisPage}
          />
          <Route path="/seo-trends" component={SEOTrendsPage} />
          <Route path="/seo-audit" component={SEOAuditPage} />
          <Route path="/collaboration" component={CollaborationPage} />
          <Route path="/local-seo" component={LocalSEOPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
