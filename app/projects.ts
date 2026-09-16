export const projects = [
  {
    slug: 'nci-crm', n: '01', title: 'NCI CRM', category: 'Internal CRM · National Cancer Institute',
    desc: 'An internal CRM for the National Cancer Institute, with role-based access, responsive forms and API integration.',
    tags: ['Angular', 'Tailwind CSS', 'Role-based Access', 'API Integration'], tone: 'nci', preview: 'Internal CRM workspace',
    context: 'Internal teams needed a clear CRM interface that respected user roles while keeping everyday data entry straightforward.',
    contribution: 'Built the Angular and Tailwind CSS frontend, created role-based permissions, and developed responsive forms connected to project APIs.',
    outcome: 'Delivered a structured internal workspace designed to make access, form completion and daily CRM workflows easier to manage.',
  },
  {
    slug: 'trr-admin-system', n: '02', title: 'TRR Admin System', category: 'Admin Platform · Thai Roong Ruang Group',
    desc: 'An admin platform for Thai Roong Ruang Group with dashboards, calendars, data tables, forms and location mapping.',
    tags: ['Angular', 'Tailwind CSS', 'Dashboards', 'Maps'], tone: 'trr', preview: 'Admin dashboard',
    context: 'Operational data needed to be easier to review, update and understand across dashboards, schedules and location-based information.',
    contribution: 'Developed the Angular frontend with dashboard charts, calendars, forms, data tables and map views generated from latitude and longitude.',
    outcome: 'Created an admin experience that brings essential management tools and information into one responsive interface.',
  },
  {
    slug: 'sos-wasty', n: '03', title: 'SOS Wasty', category: 'CRM & LINE LIFF · Ascend Co., Ltd.',
    desc: 'A responsive CRM and LINE LIFF experience designed for smooth, API-connected workflows.',
    tags: ['Next.js', 'Tailwind CSS', 'Ant Design', 'LINE LIFF'], tone: 'sos', preview: 'CRM and LINE LIFF',
    context: 'CRM workflows needed a responsive interface that could work naturally within the LINE ecosystem and stay connected to project APIs.',
    contribution: 'Built the frontend with Next.js, Tailwind CSS and Ant Design, then integrated API-driven experiences for the CRM and LINE LIFF flows.',
    outcome: 'Delivered a polished, responsive experience that supports customer-facing and operational interactions across devices.',
  },
  {
    slug: 'ldb-pro', n: '04', title: 'LDB Pro', category: 'Event workflow · Witsawa Corporation',
    desc: 'A custom QR code scanning module that streamlines event participation for doctors and pharmacists.',
    tags: ['QR Code', 'Web Application', 'Workflow Tool'], tone: 'ldb', preview: 'QR check-in flow',
    context: 'Event participation required a faster, clearer check-in process for doctors and pharmacists.',
    contribution: 'Built a custom QR code scanning module focused on making attendee verification simple and practical during the event flow.',
    outcome: 'Delivered a focused web workflow that helps teams manage event participation with less manual handling.',
  },
  {
    slug: 'cmdf', n: '05', title: 'CMDF', category: 'Product interface · Witsawa Corporation',
    desc: 'Turned design mockups into polished UI and connected Google Analytics 4 for product measurement.',
    tags: ['UI Implementation', 'Google Analytics 4', 'Product UI'], tone: 'cmdf', preview: 'Product interface',
    context: 'The product needed design mockups translated into a cohesive working interface, with measurement in place for future product decisions.',
    contribution: 'Implemented the supplied design direction as polished UI and connected Google Analytics 4 for product measurement.',
    outcome: 'Created a production-ready interface with a clearer path to understanding how people use the product.',
  },
  {
    slug: 'nfi-classwin', n: '06', title: 'NFI x Classwin', category: 'Website enhancement · Witsawa Corporation',
    desc: 'Improved an existing website by resolving issues and delivering new features for a better user experience.',
    tags: ['Web Enhancement', 'Feature Development', 'Bug Fixes'], tone: 'classwin', preview: 'Website enhancement',
    context: 'An established website needed targeted fixes and additions to better support its users and ongoing product needs.',
    contribution: 'Resolved existing issues and delivered new features while working within the constraints of an active website.',
    outcome: 'Improved the experience through practical enhancements that made the product more reliable and useful.',
  },
] as const;

export const independentProjects = [
  {
    slug: 'thai-address-select', n: '01', title: 'thai-address-select', category: 'Open Source · npm Package',
    desc: 'Linked province → district → subdistrict dropdowns for Thailand, built with Vanilla JavaScript.',
    tags: ['Vanilla JS', 'Thailand data', 'Linked dropdowns'], packageName: 'npm / thai-address-select',
    kicker: 'OPEN SOURCE', kind: 'package',
    context: 'Thai address forms often require users to choose a province, district and subdistrict in sequence. Building and maintaining those dependent controls repeatedly creates unnecessary product work.',
    contribution: 'Designed and published a reusable Vanilla JavaScript package that connects the three address fields into one straightforward selection flow.',
    outcome: 'A focused open-source utility that makes Thailand address selection easier to add to web forms and faster to reuse across projects.',
    npmUrl: 'https://www.npmjs.com/package/thai-address-select',
  },
  {
    slug: 'pet-community-thailand', n: '02', title: 'Pet Community Thailand', category: 'Independent Build · Community Platform',
    desc: 'A community platform where pet owners can share posts, find nearby help requests and coordinate rescues without exposing precise locations.',
    tags: ['Next.js', 'Go', 'React Admin', 'PostgreSQL'], packageName: 'FULL-STACK / WEB + ADMIN + API',
    kicker: 'FULL-STACK PLATFORM', kind: 'platform',
    context: 'Pet owners and helpers need a trusted place to share community updates, discover nearby cases and coordinate support while keeping sensitive location details private.',
    contribution: 'Built the public web experience and admin console around a modular Go backend, with Google OAuth, PostgreSQL, media handling, notifications and operational moderation flows.',
    outcome: 'A multi-surface community system that connects member activity, rescue coordination and content administration in one product.',
  },
  {
    slug: 'tradingview-line-alert-bot', n: '03', title: 'TradingView LINE Alert Bot', category: 'Independent Build · Alert Automation',
    desc: 'A stateless alert bridge that turns TradingView signals into structured BTCUSDT notifications delivered through LINE.',
    tags: ['Pine Script', 'Webhooks', 'Vercel', 'LINE Messaging API'], packageName: 'AUTOMATION / SIGNAL → WEBHOOK → LINE',
    kicker: 'AUTOMATION BOT', kind: 'bot',
    context: 'Signals generated in TradingView need to reach a recipient quickly in a readable, actionable format without maintaining application state or a separate dashboard.',
    contribution: 'Designed the webhook flow on Vercel, normalized incoming signal payloads and delivered formatted notifications through the LINE Messaging API. The bot relays alerts; it does not execute trades.',
    outcome: 'A lightweight deployment that connects chart signals to a personal notification channel with clear operational boundaries.',
  },
  {
    slug: 'qa-mcp', n: '04', title: 'QA MCP', category: 'Independent Build · AI QA Automation',
    desc: 'A ClickUp-triggered QA workflow where an AI agent reads acceptance criteria, runs browser tests and posts a structured result back to the task.',
    tags: ['ClickUp', 'MCP', 'Playwright', 'Webhooks'], packageName: 'WORKFLOW / CLICKUP → MCP → PLAYWRIGHT',
    kicker: 'AI QA AUTOMATION', kind: 'qa',
    context: 'QA checks can become disconnected from the acceptance criteria and final task record, making the handoff between implementation, testing and review harder to follow.',
    contribution: 'Built a webhook-driven flow that routes ClickUp tasks to an orchestrator. The AI QA agent uses ClickUp MCP to read task context and Playwright MCP to run browser tests, then writes the PASS or FAIL summary back to ClickUp.',
    outcome: 'A traceable QA loop that keeps requirements, automated browser validation and the final result connected in the same task workspace.',
  },
] as const;

export const academicProjects = [
  {
    slug: 'kmitl-xchange', n: '01', title: 'KMITL XChange', category: 'Academic / Team Project · Marketplace',
    desc: 'A multi-surface marketplace concept with a mobile app, moderation tools, recommendation support and cloud deployment.',
    tags: ['Flutter', 'Laravel', 'Python', 'Angular', 'GCP'], packageName: 'ACADEMIC / MOBILE + ADMIN + BACKEND',
    kicker: 'ACADEMIC / TEAM PROJECT', kind: 'platform',
    context: 'Students need a clearer way to list and discover second-hand items, while moderators need the tools to review submissions and keep the marketplace usable.',
    contribution: 'Contributed to a team build spanning a Flutter mobile app, Laravel backend, Angular admin experience, Python recommendation work and GCP deployment.',
    outcome: 'A connected prototype that demonstrates how marketplace discovery, moderation and recommendations can work as one student-focused system.',
  },
] as const;

type CaseStudy = {
  role: string;
  focus: string;
  story: readonly string[];
  responsibilities: readonly string[];
  workflow: readonly { title: string; detail: string }[];
  deliverables: readonly string[];
};

export const projectCaseStudies: Record<string, CaseStudy> = {
  'nci-crm': {
    role: 'Frontend Developer',
    focus: 'Role-aware internal operations',
    story: [
      'NCI CRM was designed as an internal workspace where teams could review and update day-to-day CRM information without losing clarity as access needs changed between roles. The interface had to support structured records and frequent form work while staying practical for people who spend most of their day inside the system.',
      'The focus was not to add visual complexity, but to make permissions, form states and API-connected actions easy to understand. Each screen was treated as part of one operational flow, so the experience could remain consistent as users moved between records and tasks.',
    ],
    responsibilities: ['Built the Angular and Tailwind CSS interface.', 'Implemented role-based access patterns for the UI.', 'Created responsive forms for everyday data entry.', 'Connected interface states and form actions to project APIs.'],
    workflow: [
      { title: 'Identify the user role', detail: 'The interface presents access and actions according to the user role so people can focus on the work relevant to them.' },
      { title: 'Review and update records', detail: 'Responsive form patterns keep record entry and edits clear across the workspace.' },
      { title: 'Sync the action with APIs', detail: 'Frontend states are connected to project APIs so submitted information moves into the wider CRM flow.' },
    ],
    deliverables: ['Role-aware CRM interface', 'Responsive form system', 'API-integrated frontend workflow'],
  },
  'trr-admin-system': {
    role: 'Frontend Developer',
    focus: 'Operational visibility in one admin workspace',
    story: [
      'TRR Admin System brings several operational views into one administrative product: dashboards for an at-a-glance view, calendars for time-based work, tables and forms for managing data, and map views for location information.',
      'The design challenge was to give each module enough structure without making the system feel like a collection of disconnected tools. The frontend keeps the information dense where it needs to be, while preserving familiar patterns for reviewing, editing and navigating operations.',
    ],
    responsibilities: ['Developed the Angular frontend.', 'Built dashboard charts and calendar views.', 'Implemented data tables and forms for management tasks.', 'Created map views from latitude and longitude data.'],
    workflow: [
      { title: 'Read the current picture', detail: 'Dashboards provide a starting point for checking operational information before moving into details.' },
      { title: 'Manage schedules and records', detail: 'Calendars, forms and tables support the update work that follows a review.' },
      { title: 'Locate the data in context', detail: 'Latitude and longitude values become map views when location is part of the decision.' },
    ],
    deliverables: ['Angular admin interface', 'Dashboards and calendar modules', 'Data management and map views'],
  },
  'sos-wasty': {
    role: 'Frontend Developer',
    focus: 'CRM workflows across web and LINE LIFF',
    story: [
      'SOS Wasty combines a CRM experience with LINE LIFF, so the product needs to feel usable both as a responsive web interface and inside the LINE ecosystem. The work centers on keeping the user journey coherent while the underlying information is supplied through APIs.',
      'The frontend uses a component-led approach to make screens predictable across devices. Rather than treating LIFF as a separate visual product, its screens follow the same operational language as the CRM workflow.',
    ],
    responsibilities: ['Built the frontend with Next.js.', 'Styled responsive screens with Tailwind CSS and Ant Design.', 'Integrated API-driven CRM flows.', 'Implemented experiences intended for LINE LIFF use.'],
    workflow: [
      { title: 'Enter from the right surface', detail: 'Users can enter the flow from the web or through LINE LIFF, depending on the context of the task.' },
      { title: 'Complete the CRM action', detail: 'Responsive components keep forms and operational states readable on smaller screens as well as desktop.' },
      { title: 'Keep data connected', detail: 'API integration links the interface to the CRM information and workflow behind it.' },
    ],
    deliverables: ['Next.js CRM frontend', 'Responsive LINE LIFF experience', 'API-connected component system'],
  },
  'ldb-pro': {
    role: 'Frontend Developer',
    focus: 'QR-assisted event participation',
    story: [
      'LDB Pro focuses on a specific operational moment: registering attendance for doctors and pharmacists at an event. That moment needs to be fast enough for on-site use, while still giving the team a clear way to verify participation.',
      'The solution is a focused web module rather than a broad event platform. By keeping the scan-and-verify path direct, the interface reduces manual handling at the point where participants arrive.',
    ],
    responsibilities: ['Built a custom QR code scanning module.', 'Designed the attendee verification flow.', 'Focused the interface on practical on-site use.'],
    workflow: [
      { title: 'Scan the attendee code', detail: 'The operator begins with the QR code rather than searching manually through a participant list.' },
      { title: 'Verify participation', detail: 'The module supports a clear confirmation step for the attendee record.' },
      { title: 'Continue the event flow', detail: 'Verified participation becomes part of a more manageable event process for the team.' },
    ],
    deliverables: ['QR scanning module', 'Attendee verification workflow', 'Focused event web interface'],
  },
  cmdf: {
    role: 'Frontend Developer',
    focus: 'From design direction to measurable product UI',
    story: [
      'CMDF began with supplied design mockups that needed to become a reliable working interface. The implementation needed to respect the visual direction while translating static designs into components and interaction-ready screens.',
      'In addition to the interface work, Google Analytics 4 was connected so the product could establish a foundation for understanding use over time. This keeps product measurement part of the implementation rather than an afterthought.',
    ],
    responsibilities: ['Translated supplied mockups into polished UI.', 'Implemented the product interface for production use.', 'Connected Google Analytics 4 for product measurement.'],
    workflow: [
      { title: 'Interpret the design system', detail: 'Mockup details are converted into consistent interface patterns rather than treated as isolated screens.' },
      { title: 'Build the working interface', detail: 'The product UI is implemented so layout, states and interaction can work together in the browser.' },
      { title: 'Create a measurement baseline', detail: 'GA4 integration provides a starting point for observing how people use the completed experience.' },
    ],
    deliverables: ['Polished product UI', 'Design-to-code implementation', 'Google Analytics 4 integration'],
  },
  'nfi-classwin': {
    role: 'Frontend Developer',
    focus: 'Incremental improvement of a live website',
    story: [
      'NFI x Classwin involved working inside an established website rather than starting from an empty project. The task combined issue resolution with new feature work, which meant improvements had to fit the existing product and its active constraints.',
      'The approach was practical and incremental: understand the existing behavior, resolve the issues affecting users, then introduce additions that make the experience more useful without disrupting the parts already in use.',
    ],
    responsibilities: ['Investigated and resolved existing website issues.', 'Delivered new features within an active product.', 'Worked with the constraints of the established site.'],
    workflow: [
      { title: 'Understand the existing behavior', detail: 'Work begins by reading the current product flow before deciding how a change should fit.' },
      { title: 'Resolve the immediate issue', detail: 'Targeted fixes address the parts of the experience that need to become more reliable.' },
      { title: 'Add the useful next capability', detail: 'New features are introduced as part of the existing website rather than as separate experiments.' },
    ],
    deliverables: ['Website fixes', 'Feature enhancements', 'Maintained live-product experience'],
  },
  'thai-address-select': {
    role: 'Package Author',
    focus: 'Reusable Thailand address selection',
    story: [
      'Thai address forms frequently ask people to choose a province, district and subdistrict in sequence. Recreating those linked fields in each project adds repeated implementation work and leaves room for inconsistent form behavior.',
      'thai-address-select packages that dependent selection into a small Vanilla JavaScript utility. It is intentionally focused: developers can add a familiar Thailand address flow to a form without having to rebuild the relationships between the three fields.',
    ],
    responsibilities: ['Designed the linked address-selection flow.', 'Published a reusable Vanilla JavaScript package on npm.', 'Kept the package focused on a common form workflow.'],
    workflow: [
      { title: 'Choose a province', detail: 'The first field establishes the geographic context for the rest of the form.' },
      { title: 'Narrow the district options', detail: 'The district selection follows the province choice, keeping the next options relevant.' },
      { title: 'Complete the subdistrict', detail: 'The final linked field completes a usable Thailand address selection path.' },
    ],
    deliverables: ['Published npm package', 'Linked province, district and subdistrict fields', 'Vanilla JavaScript integration path'],
  },
  'pet-community-thailand': {
    role: 'Full-stack Developer',
    focus: 'Community, coordination and moderation across product surfaces',
    story: [
      'Pet Community Thailand is a community platform for pet owners and helpers to share updates, discover nearby support requests and coordinate rescue activity. The product needs to make community participation straightforward while being careful with sensitive location details.',
      'The build spans more than a public-facing site. It connects a member experience, an administrative workspace and a modular backend so that posts, media, notifications and moderation can work as one product system.',
    ],
    responsibilities: ['Built the public web experience and admin console.', 'Developed around a modular Go backend and PostgreSQL.', 'Integrated Google OAuth, media handling and notifications.', 'Supported operational moderation workflows.'],
    workflow: [
      { title: 'Community activity begins on the web', detail: 'Members can take part in a public-facing experience built around posts and community updates.' },
      { title: 'Support cases stay coordinated', detail: 'Nearby help and rescue activity can move through the product without exposing precise locations by default.' },
      { title: 'Moderate the system operationally', detail: 'The admin surface connects content administration and product operations to the same underlying system.' },
    ],
    deliverables: ['Public community web experience', 'Admin console', 'Go and PostgreSQL product backend', 'Authentication, media and notification flows'],
  },
  'tradingview-line-alert-bot': {
    role: 'Automation Developer',
    focus: 'Stateless signal delivery from TradingView to LINE',
    story: [
      'TradingView can generate signals at the chart level, but those signals are only useful when they reach the recipient in a timely and readable form. This project creates a narrow automation bridge for BTCUSDT alerts without introducing a separate dashboard or persistent application state.',
      'The implementation deliberately separates notification from execution. It receives and normalizes alert payloads, then sends structured messages through LINE; it does not place trades or make trading decisions.',
    ],
    responsibilities: ['Designed the webhook flow on Vercel.', 'Normalized incoming TradingView signal payloads.', 'Integrated LINE Messaging API delivery.', 'Defined clear boundaries for a notification-only tool.'],
    workflow: [
      { title: 'Generate a chart signal', detail: 'A TradingView and Pine Script setup produces the event that needs to be relayed.' },
      { title: 'Receive and normalize the webhook', detail: 'A Vercel handler accepts the incoming alert and prepares a consistent message payload.' },
      { title: 'Deliver the notification to LINE', detail: 'LINE Messaging API sends the structured alert to the intended personal channel.' },
    ],
    deliverables: ['TradingView webhook bridge', 'Vercel serverless handler', 'LINE alert notification flow'],
  },
  'qa-mcp': {
    role: 'Automation Developer',
    focus: 'Traceable QA from acceptance criteria to test result',
    story: [
      'QA MCP connects a QA event in ClickUp to an automated browser-testing workflow. The aim is to keep the acceptance criteria, the test run and the final QA result attached to the same task instead of spreading the handoff across different tools and conversations.',
      'When a task enters testing, a webhook starts the orchestration flow. The agent reads the task context through ClickUp MCP, uses Playwright MCP for browser validation, then returns a structured PASS or FAIL summary to the original task.',
    ],
    responsibilities: ['Built the ClickUp webhook-driven orchestration flow.', 'Connected ClickUp MCP for task context and QA comments.', 'Used Playwright MCP for browser testing.', 'Returned structured PASS or FAIL summaries to the task.'],
    workflow: [
      { title: 'A task moves into testing', detail: 'ClickUp triggers the workflow when the task reaches the intended QA stage.' },
      { title: 'Read criteria and test the browser flow', detail: 'The QA agent reads acceptance criteria, then runs browser checks through Playwright MCP.' },
      { title: 'Write the result back to the task', detail: 'A PASS or FAIL summary is posted to ClickUp so the test result stays alongside the requirement.' },
    ],
    deliverables: ['ClickUp webhook workflow', 'MCP-connected QA agent', 'Playwright browser-validation loop', 'Task-level QA result summary'],
  },
  'kmitl-xchange': {
    role: 'Team Project Contributor',
    focus: 'Student marketplace across mobile, admin and backend',
    story: [
      'KMITL XChange is an academic team project exploring a student-focused marketplace for second-hand items. The product needs both a clear mobile experience for listing and discovery and an operational way to review submissions and keep the marketplace usable.',
      'The concept is intentionally multi-surface: a Flutter mobile application, Laravel backend, Angular admin experience, Python recommendation work and GCP deployment come together as one connected prototype rather than isolated technical exercises.',
    ],
    responsibilities: ['Contributed within a cross-functional team build.', 'Worked across the connected mobile, admin and backend product scope.', 'Supported a prototype that combines moderation and recommendation concepts.'],
    workflow: [
      { title: 'List and discover items', detail: 'The mobile experience supports a student-facing marketplace flow for second-hand products.' },
      { title: 'Review marketplace activity', detail: 'Administrative tools provide a separate surface for moderation and operational review.' },
      { title: 'Connect the wider product system', detail: 'Backend, recommendation and cloud components support the concept as a coordinated team prototype.' },
    ],
    deliverables: ['Flutter mobile application concept', 'Laravel backend and Angular admin scope', 'Python recommendation component', 'GCP-deployed team prototype'],
  },
};

type VisualSlot = {
  title: string;
  caption: string;
  state: 'reserved' | 'restricted';
  src?: string;
};

type ProjectVisualRecord = {
  disclosure: 'public-ready' | 'limited';
  note: string;
  slots: readonly VisualSlot[];
};

const limitedVisuals = (scope: string): ProjectVisualRecord => ({
  disclosure: 'limited',
  note: `Selected visuals only. ${scope}`,
  slots: [
    { title: 'Public-safe overview', caption: 'A redacted product view or approved interface excerpt.', state: 'restricted' },
    { title: 'Workflow summary', caption: 'A public-safe flow, component or annotated interaction.', state: 'reserved' },
    { title: 'System detail', caption: 'A diagram or outcome view with sensitive information removed.', state: 'restricted' },
  ],
});

const publicReadyVisuals = (scope: string): ProjectVisualRecord => ({
  disclosure: 'public-ready',
  note: `${scope} Screens can be added individually when a public-ready capture is available.`,
  slots: [
    { title: 'Product overview', caption: 'Primary screen, entry point or package example.', state: 'reserved' },
    { title: 'Key workflow', caption: 'The interaction, automation path or user journey.', state: 'reserved' },
    { title: 'System detail', caption: 'A result state, dashboard or implementation detail.', state: 'reserved' },
  ],
});

export const projectVisualRecords: Record<string, ProjectVisualRecord> = {
  'nci-crm': limitedVisuals('Internal CRM data and role-specific screens are not shown in full.'),
  'trr-admin-system': limitedVisuals('Operational dashboards and location information are shared only in approved form.'),
  'sos-wasty': limitedVisuals('CRM and LINE LIFF screens are represented only through approved excerpts.'),
  'ldb-pro': limitedVisuals('Event-participant data is not included in public visuals.'),
  cmdf: limitedVisuals('Product screens and analytics data require a public-safe treatment.'),
  'nfi-classwin': limitedVisuals('The live website is represented through non-sensitive implementation evidence.'),
  'thai-address-select': publicReadyVisuals('This is an open-source npm package.'),
  'pet-community-thailand': publicReadyVisuals('This is an independent full-stack build.'),
  'tradingview-line-alert-bot': publicReadyVisuals('This is a personal notification automation, not a trading service.'),
  'qa-mcp': publicReadyVisuals('The workflow can be shown through task, test and result views.'),
  'kmitl-xchange': limitedVisuals('Team-project visuals can be added once the appropriate assets are selected.'),
};
