/**
 * Social Media Links for Employee Envoy
 * Centralized configuration for all social media profiles
 */

export const SOCIAL_LINKS = {
  linkedin: {
    url: 'https://www.linkedin.com/company/111544232',
    handle: 'employeeenvoy',
    label: 'Follow us on LinkedIn'
  },
  instagram: {
    url: 'https://www.instagram.com/employeeenvoy',
    handle: '@employeeenvoy',
    label: 'Follow us on Instagram'
  }
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;
