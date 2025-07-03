import { defineAppConfig } from '#imports';

// Define types for your config
declare module 'wxt/utils/define-app-config' {
  export interface WxtAppConfig {
    theme?: 'light' | 'dark';
    features?: {
      enableChat?: boolean;
      maxTokens?: number;
    };
  }
}

export default defineAppConfig({
  theme: 'light',
  features: {
    enableChat: import.meta.env.WXT_ENABLE_CHAT === 'true' || true,
    maxTokens: parseInt(import.meta.env.WXT_MAX_TOKENS || '1000'),
  },
});
