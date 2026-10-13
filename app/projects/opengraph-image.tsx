import { socialImage } from '../social-image';

export const alt = 'Developer projects and case studies — Ratchapol Rujiwatch';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return socialImage('Projects & case studies', 'Professional systems, independent builds and academic work');
}
