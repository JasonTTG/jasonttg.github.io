// Add new portfolio projects here. The homepage renders automatically.
// Recommended image size: 1600x900 (16:9). GIF/WebP also work.
const PROJECTS = [
  {
    title: "Combat Systems Prototype",
    type: "Gameplay Programming",
    year: "2026",
    featured: true,
    image: "assets/projects/combat-placeholder.svg",
    description: "A modular third-person combat prototype focused on responsive player controls and reusable gameplay architecture.",
    highlights: [
      "Designed a component-based combat architecture with reusable attacks and abilities.",
      "Integrated animation state, hit detection, damage events, and input buffering.",
      "Built debug tooling to inspect combat state and tune gameplay values quickly."
    ],
    tags: ["C++", "Unreal Engine", "Gameplay Systems", "Animation"],
    links: [
      { label: "Source", url: "https://github.com/YOUR_USERNAME" },
      { label: "Demo", url: "#" }
    ]
  },
  {
    title: "Enemy AI Sandbox",
    type: "AI Programming",
    year: "2026",
    image: "assets/projects/ai-placeholder.svg",
    description: "A reusable enemy AI framework for perception, navigation, combat decisions, and state transitions.",
    highlights: [
      "Implemented perception-driven target acquisition and configurable behavior states.",
      "Separated decision logic from movement and combat execution for easier iteration.",
      "Added visual debugging tools for awareness, targets, and state changes."
    ],
    tags: ["C++", "AI", "Behavior Trees", "Debug Tools"],
    links: [
      { label: "Source", url: "https://github.com/YOUR_USERNAME" }
    ]
  },
  {
    title: "Level Design Tool",
    type: "Tools Programming",
    year: "2025",
    image: "assets/projects/tool-placeholder.svg",
    description: "An editor-facing tool that speeds up content placement and reduces repetitive setup work.",
    highlights: [
      "Automated repetitive scene setup and object configuration.",
      "Created validation checks to catch common content errors before runtime.",
      "Focused on clear UX so non-programmers could use the tool confidently."
    ],
    tags: ["C#", "Unity", "Editor Tools", "Workflow"],
    links: [
      { label: "Source", url: "https://github.com/YOUR_USERNAME" }
    ]
  }
];
