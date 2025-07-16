// src/pages/KenyaPage.jsx
import { useState } from 'react';
import OverviewTab from '../components/kenya/OverviewTab';
import AssessmentDashboard from '../components/kenya/AssessmentDashboard';
import FeedbackTab from '../components/kenya/FeedbackTab';
import ResourcesTab from '../components/kenya/ResourcesTab';

const TABS = ['Overview', 'Pre & Post Assessment', 'Feedback', 'Photo & Resources'];

function KenyaPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Pre & Post Assessment':
        return <AssessmentDashboard />;
      case 'Feedback':
        return <FeedbackTab />;
      case 'Photo & Resources':
        return <ResourcesTab />;
      case 'Overview':
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="w-full max-w-7xl mx-auto border rounded-2xl p-6 shadow-md bg-card">
        {/* Header/Title for the Kenya Page */}
        <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold">Kenya Deepdive Session</h1>
            <p className="text-muted-foreground">iHUB Kenya Cohort 3 - 2025</p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 border-b pb-4 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground shadow-md border border-primary/20'
                  : 'bg-white text-foreground border border-gray-200 hover:border-primary/30 hover:shadow-sm hover:bg-accent/50'
              }`}
              style={{
                minWidth: 'fit-content',
                boxShadow: activeTab === tab 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="mt-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default KenyaPage;