import { profileName } from './seo';
import { socialImage } from './social-image';

export const alt = 'Ratchapol Rujiwatch — Full-stack Developer in Thailand';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return socialImage(profileName, 'Full-stack developer · CRM · Admin tools · API-connected workflows');
}
