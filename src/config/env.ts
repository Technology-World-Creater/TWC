// Environment configuration for production
export const env = {
  // EmailJS Configuration
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',

  // Environment check
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
};

// Validate required environment variables
export const validateEnv = () => {
  const required = ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_PUBLIC_KEY'];

  const missing = required.filter((key) => !env[key as keyof typeof env]);

  if (missing.length > 0) {
    console.warn('Missing environment variables:', missing);
    return false;
  }

  return true;
};

// Check environment on load
if (typeof window !== 'undefined') {
  validateEnv();
}
