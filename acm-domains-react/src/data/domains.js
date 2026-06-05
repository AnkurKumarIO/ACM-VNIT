/**
 * All 8 ACM VNIT domain cards.
 * Descending deck order: A → 7
 */
export const DOMAINS = [
  {
    id: 'app',
    rank: 'A',
    suit: '♠',
    color: '#4A9FF5',
    glow: 'rgba(74,159,245,0.35)',
    title: 'App Development',
    shortTitle: 'App\nDevelopment',
    description:
      'Engineering seamless mobile experiences across platforms with a focus on high-performance architecture and reactive UI patterns.',
    tags: ['Flutter', 'React Native', 'SwiftUI', 'Kotlin'],
  },
  {
    id: 'web',
    rank: 'K',
    suit: '♣',
    color: '#4AE6A0',
    glow: 'rgba(74,230,160,0.35)',
    title: 'Web Development',
    shortTitle: 'Web\nDevelopment',
    description:
      'Building the foundational fabric of the modern web using robust full-stack frameworks and scalable architectures.',
    tags: ['Next.js', 'GoLang', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'aiml',
    rank: 'Q',
    suit: '♦',
    color: '#B44AF5',
    glow: 'rgba(180,74,245,0.35)',
    title: 'AI / Machine Learning',
    shortTitle: 'AI / Machine\nLearning',
    description:
      'Developing intelligent systems through neural networks, predictive modeling, and cutting-edge research in artificial intelligence.',
    tags: ['PyTorch', 'TensorFlow', 'Python', 'Pandas'],
  },
  {
    id: 'design',
    rank: 'J',
    suit: '♥',
    color: '#F54A8A',
    glow: 'rgba(245,74,138,0.35)',
    title: 'Design',
    shortTitle: 'Design',
    description:
      'The visual blueprint. Crafting user-first interfaces and motion graphics that marry modern aesthetics with functional purpose.',
    tags: ['Figma', 'After Effects', 'Blender', 'UI/UX'],
  },
  {
    id: 'cybersec',
    rank: '10',
    suit: '★',
    color: '#F5A44A',
    glow: 'rgba(245,164,74,0.35)',
    title: 'Cybersecurity',
    shortTitle: 'Cyber\nSecurity',
    description:
      'Securing the perimeter. Offensive and defensive security research, penetration testing, and vulnerability assessment.',
    tags: ['Burp Suite', 'OWASP', 'CTF', 'Wireshark'],
  },
  {
    id: 'cp',
    rank: '9',
    suit: '♣',
    color: '#4AE6A0',
    glow: 'rgba(74,230,160,0.35)',
    title: 'Competitive Programming',
    shortTitle: 'Competitive\nProgramming',
    description:
      'Sharpening algorithmic thinking through coding contests, data structures, optimization techniques, and problem-solving under pressure.',
    tags: ['C++', 'Codeforces', 'LeetCode', 'DSA'],
  },
  {
    id: 'opensource',
    rank: '8',
    suit: '♦',
    color: '#F5D44A',
    glow: 'rgba(245,212,74,0.35)',
    title: 'Open Source Development',
    shortTitle: 'Open Source\nDevelopment',
    description:
      'Building impactful software collaboratively through open-source contributions, version control workflows, and community-driven innovation.',
    tags: ['Git', 'GitHub', 'Linux', 'GSSoC'],
  },
  {
    id: 'clouddevops',
    rank: '7',
    suit: '♠',
    color: '#4A9FF5',
    glow: 'rgba(74,159,245,0.35)',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud &\nDevOps',
    description:
      'Automating deployment pipelines, managing cloud infrastructure, and ensuring scalable, reliable software delivery.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];
