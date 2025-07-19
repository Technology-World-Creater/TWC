import { env, validateEnv } from './env';

export const emailJSConfig = {
  serviceId: env.EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: env.EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: env.EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Validate environment variables
validateEnv();

// Debug logging for development
if (env.IS_DEVELOPMENT) {
  console.log('EmailJS Config Check:', {
    serviceId: emailJSConfig.serviceId,
    templateId: emailJSConfig.templateId,
    hasPublicKey: !!emailJSConfig.publicKey,
    environment: env.IS_PRODUCTION ? 'production' : 'development',
  });
}
