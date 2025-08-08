import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Copy, ExternalLink, Check, Star } from 'lucide-react';

interface ThankYouStepProps {
  selectedTemplate: string;
  onBack: () => void;
}

export const ThankYouStep = ({ selectedTemplate, onBack }: ThankYouStepProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selectedTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const handleReviewRedirect = () => {
    // Replace with actual Google My Business review URL
    const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID';
    window.open(googleReviewUrl, '_blank');
  };

  return (
    <div className="step-enter max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="absolute left-4 top-8 md:relative md:left-0 md:top-0 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
            Thank You for Supporting Us!
          </h1>
          <p className="text-lg text-muted-foreground">
            Please paste your review on our Google page and rate us
          </p>
        </div>
      </div>

      {/* Review Template Display */}
      <Card className="card-gradient p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Review Template</h2>
        
        <div className="space-y-4">
          <Textarea
            value={selectedTemplate}
            readOnly
            className="min-h-[120px] bg-background border-primary/20 text-base leading-relaxed resize-none"
          />
          
          <Button
            onClick={handleCopy}
            variant={copied ? "default" : "outline"}
            className={copied ? "btn-success" : "btn-secondary"}
            size="lg"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy Review
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Instructions & CTA */}
      <div className="text-center space-y-6">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="font-medium text-primary mb-1">1. Copy</div>
            <div className="text-muted-foreground">Copy the review text above</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="font-medium text-primary mb-1">2. Paste</div>
            <div className="text-muted-foreground">Paste it on our Google page</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="font-medium text-primary mb-1">3. Rate</div>
            <div className="text-muted-foreground">Give us 5 stars ⭐</div>
          </div>
        </div>

        <Button
          onClick={handleReviewRedirect}
          size="lg"
          className="btn-hero text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
        >
          Proceed to Review
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>

        <div className="bg-accent/20 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">🎉 You're Almost Done!</h3>
          <p className="text-muted-foreground">
            Your support means the world to us. Thank you for taking the time to share your experience with R3 Consulting Limited.
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          Having trouble? Contact us at{' '}
          <a href="mailto:support@r3consulting.com" className="text-primary hover:underline">
            support@r3consulting.com
          </a>
        </p>
      </div>
    </div>
  );
};