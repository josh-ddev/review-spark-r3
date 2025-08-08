import { useState } from 'react';
import { LandingStep } from './steps/LandingStep';
import { RoleSelectionStep } from './steps/RoleSelectionStep';
import { ThankYouStep } from './steps/ThankYouStep';

export type Step = 'landing' | 'role-selection' | 'thank-you';
export type Role = 'client' | 'employee' | 'associate';

const ReviewApp = () => {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const handleStepChange = (step: Step) => {
    setCurrentStep(step);
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setCurrentStep('thank-you');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-accent">
      <div className="container mx-auto px-4 py-8">
        {currentStep === 'landing' && (
          <LandingStep onProceed={() => handleStepChange('role-selection')} />
        )}
        
        {currentStep === 'role-selection' && (
          <RoleSelectionStep
            selectedRole={selectedRole}
            onRoleSelect={handleRoleSelect}
            onTemplateSelect={handleTemplateSelect}
            onBack={() => handleStepChange('landing')}
          />
        )}
        
        {currentStep === 'thank-you' && (
          <ThankYouStep
            selectedTemplate={selectedTemplate}
            onBack={() => handleStepChange('role-selection')}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewApp;