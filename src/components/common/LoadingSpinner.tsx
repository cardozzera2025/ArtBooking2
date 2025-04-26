import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner = ({ size = 24, className = '' }: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center p-4 w-full h-40">
      <Loader2 className={`animate-spin text-primary-500 ${className}`} size={size} />
    </div>
  );
};

export default LoadingSpinner;