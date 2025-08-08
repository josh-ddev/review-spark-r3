import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import r3Logo from '/lovable-uploads/81a8e23f-b938-430b-9474-65f32363e416.png';

interface LandingStepProps {
  onProceed: () => void;
}

export const LandingStep = ({ onProceed }: LandingStepProps) => {
  return (
    <div className="step-enter max-w-2xl mx-auto text-center">
      <div className="card-gradient p-12 mb-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={r3Logo} 
            alt="R3 Consulting Limited Logo" 
            className="mx-auto h-20 w-20 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          Leave a Review for R3 Consulting Limited
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          You're about to leave a review for R3 Consulting Limited — this will only take{' '}
          <span className="font-semibold text-primary">2 minutes</span>.
        </p>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="font-medium text-primary mb-1">🚀 Quick & Easy</div>
            <div className="text-muted-foreground">2-minute guided process</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="font-medium text-primary mb-1">✨ Pre-written</div>
            <div className="text-muted-foreground">Professional templates ready</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="font-medium text-primary mb-1">📱 Mobile Friendly</div>
            <div className="text-muted-foreground">Works on any device</div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={onProceed}
          size="lg"
          className="btn-hero text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        {/* Trust indicators */}
        <p className="text-sm text-muted-foreground mt-6">
          No signup required • Secure & private • Takes 2 minutes
        </p>
      </div>
    </div>
  );
};