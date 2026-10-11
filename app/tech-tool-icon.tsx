import { Cable, Code2, SquareTerminal } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiAngular, SiAntdesign, SiC, SiClaude, SiDocker, SiGit,
  SiGithubcopilot, SiGo, SiGoogleanalytics, SiGooglegemini,
  SiJavascript, SiLaravel, SiLine, SiModelcontextprotocol,
  SiNestjs, SiNextdotjs, SiPhp, SiPython, SiReact, SiStrapi,
  SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const toolLogos: Record<string, { Icon: IconType; color: string }> = {
  Angular: { Icon: SiAngular, color: '#dd0031' },
  React: { Icon: SiReact, color: '#149eca' },
  'Next.js': { Icon: SiNextdotjs, color: '#17232f' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#0891b2' },
  'Ant Design': { Icon: SiAntdesign, color: '#1677ff' },
  Laravel: { Icon: SiLaravel, color: '#f33e32' },
  NestJS: { Icon: SiNestjs, color: '#e0234e' },
  Strapi: { Icon: SiStrapi, color: '#4945ff' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  JavaScript: { Icon: SiJavascript, color: '#b49a00' },
  Python: { Icon: SiPython, color: '#3776ab' },
  Go: { Icon: SiGo, color: '#0898bc' },
  C: { Icon: SiC, color: '#526fb5' },
  PHP: { Icon: SiPhp, color: '#777bb4' },
  GA4: { Icon: SiGoogleanalytics, color: '#e37400' },
  'LINE LIFF': { Icon: SiLine, color: '#00a645' },
  Claude: { Icon: SiClaude, color: '#c15f3c' },
  'Gemini CLI': { Icon: SiGooglegemini, color: '#6b65d8' },
  Copilot: { Icon: SiGithubcopilot, color: '#17232f' },
  MCP: { Icon: SiModelcontextprotocol, color: '#17232f' },
  'VS Code': { Icon: VscVscode, color: '#007acc' },
  Docker: { Icon: SiDocker, color: '#2496ed' },
  Git: { Icon: SiGit, color: '#f05032' },
};

export function TechToolIcon({ name }: { name: string }) {
  const logo = toolLogos[name];
  if (logo) {
    const { Icon, color } = logo;
    return <Icon className="tech-tool-logo" size={18} color={color} aria-hidden="true" focusable="false" />;
  }

  const Icon = name === 'REST API' ? Cable : name === 'Codex' ? SquareTerminal : Code2;
  return <Icon className="tech-tool-logo" size={18} strokeWidth={1.8} aria-hidden="true" focusable="false" />;
}
