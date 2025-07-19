import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface UseEmailJSReturn {
  sendEmail: (formData: Record<string, any>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  resetState: () => void;
}

export const useEmailJS = (config: EmailJSConfig): UseEmailJSReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (formData: Record<string, any>) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await emailjs.send(
        config.serviceId,
        config.templateId,
        formData,
        config.publicKey,
      );

      if (result.status === 200) {
        setSuccess(true);
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setIsLoading(false);
    setError(null);
    setSuccess(false);
  };

  return {
    sendEmail,
    isLoading,
    error,
    success,
    resetState,
  };
};
