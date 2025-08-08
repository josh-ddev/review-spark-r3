import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Users, Briefcase, UserCheck, RefreshCw } from 'lucide-react';
import { Role } from '../ReviewApp';
import { getTemplatesByRole, ReviewTemplate } from '@/data/reviewTemplates';

interface RoleSelectionStepProps {
  selectedRole: Role | null;
  onRoleSelect: (role: Role) => void;
  onTemplateSelect: (template: string) => void;
  onBack: () => void;
}

export const RoleSelectionStep = ({ 
  selectedRole, 
  onRoleSelect, 
  onTemplateSelect, 
  onBack 
}: RoleSelectionStepProps) => {
  const [templateOffset, setTemplateOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const roleOptions = [
    {
      value: 'client' as Role,
      label: 'I hired R3 Consulting Limited for services',
      description: 'I hired R3 Consulting Limited for services',
      icon: Briefcase,
      gradient: 'from-primary/10 to-primary/5'
    },
    {
      value: 'employee' as Role,
      label: 'Employee/Partner',
      description: 'I work with or for R3 Consulting Limited',
      icon: Users,
      gradient: 'from-accent/20 to-accent/10'
    },
    {
      value: 'associate' as Role,
      label: 'Friend/Associate',
      description: 'I know R3 Consulting Limited professionally',
      icon: UserCheck,
      gradient: 'from-secondary/30 to-secondary/10'
    }
  ];

  const handleRoleSelect = (role: Role) => {
    onRoleSelect(role);
    setTemplateOffset(0); // Reset template offset when role changes
  };

  const getCurrentTemplates = (): ReviewTemplate[] => {
    if (!selectedRole) return [];
    const allTemplates = getTemplatesByRole(selectedRole);
    return allTemplates.slice(templateOffset, templateOffset + 3);
  };

  const handleShowMore = () => {
    if (!selectedRole) return;
    
    setIsLoading(true);
    setTimeout(() => {
      const allTemplates = getTemplatesByRole(selectedRole);
      const nextOffset = (templateOffset + 3) % allTemplates.length;
      setTemplateOffset(nextOffset);
      setIsLoading(false);
    }, 500); // Small delay for UX
  };

  const canShowMore = selectedRole && getTemplatesByRole(selectedRole).length > 3;

  return (
    <div className="step-enter max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="absolute left-4 top-4 md:relative md:left-0 md:top-0 mb-4 z-10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight px-2">
          How are you related to R3 Consulting Limited?
        </h1>
        <p className="text-base md:text-lg text-muted-foreground px-2">
          Select your relationship to get personalized review templates
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {roleOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedRole === option.value;
          
          return (
            <Card
              key={option.value}
              className={`card-interactive transition-all duration-300 cursor-pointer min-h-[140px] md:min-h-[160px] p-6 ${
                isSelected 
                  ? 'ring-2 ring-primary shadow-lg md:scale-105 bg-gradient-to-br ' + option.gradient
                  : 'hover:shadow-lg active:scale-95'
              }`}
              onClick={() => handleRoleSelect(option.value)}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className={`mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 ${
                  isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <Icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{option.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Templates Section */}
      {selectedRole && (
        <div className="card-gradient p-4 md:p-8 animate-in fade-in duration-500">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
            Choose your review template
          </h2>
          
          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            {getCurrentTemplates().map((template, index) => (
              <Card
                key={template.id}
                className="card-interactive p-4 md:p-6 text-left hover:bg-primary/5 cursor-pointer active:scale-95 transition-transform"
                onClick={() => onTemplateSelect(template.text)}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed text-sm md:text-base">{template.text}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More Button */}
          {canShowMore && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={handleShowMore}
                disabled={isLoading}
                className="btn-secondary min-h-[48px] px-6"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  'Show me 3 more'
                )}
              </Button>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-4">
            Click any template to continue to the final step
          </p>
        </div>
      )}
    </div>
  );
};