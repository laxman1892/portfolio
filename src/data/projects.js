export const projects = [
  {
    title: "Python Ecommerce Backend",
    category: "Backend API",
    stack: ["Django REST Framework", "JWT", "RBAC", "Payments", "API Tests"],
    summary:
      "Built a Django REST Framework ecommerce backend with JWT authentication, custom user roles, product management, cart checkout, orders, payments, shipping, and admin dashboard APIs.",
    highlights: [
      "Implemented buyer, seller, and admin permission flows for authenticated profile and product operations.",
      "Developed order placement from cart with stock validation, stock reduction, cart clearing, payment outcomes, and shipment tracking.",
      "Added automated API tests and documented setup, verification commands, and endpoint behavior in the README.",
    ],
    repositoryUrl: "https://github.com/laxman1892/python-ecommerce-backend",
  },
  {
    title: "Full-Stack Blog Platform",
    category: "Full-stack application",
    stack: ["React.js", "Node.js", "MongoDB", "Authentication", "REST APIs"],
    summary:
      "Built a full-stack publishing platform with authenticated user flows, blog creation, blog retrieval, and persistent storage.",
    highlights: [
      "Developed login, signup, blog creation, and blog reading features.",
      "Connected React frontend screens with Node.js backend endpoints.",
      "Structured user and blog data in MongoDB for reliable retrieval.",
    ],
    repositoryUrl: "https://github.com/laxman1892/full-stack-blog-app",
  },
  {
    title: "Vedanga International School Website",
    category: "Full-stack CMS-style website",
    stack: ["Next.js", "TypeScript", "Django", "REST API", "Admin Workflows"],
    summary:
      "Built a full-stack school website with dynamic public pages, Django-backed content modules, admin workflows, and deployment preparation.",
    highlights: [
      "Implemented modules for news, events, notices, galleries, teams, videos, jobs, and contact submissions.",
      "Created staff-only management workflows for published and unpublished content.",
      "Prepared cPanel deployment assets including Passenger WSGI configuration.",
    ],
    liveUrl: "https://vedanga.edu.np",
  },
  {
    title: "RTC File Sharing",
    category: "Real-time browser app",
    stack: ["React", "Node.js", "Socket.IO", "WebRTC", "DataChannel"],
    summary:
      "Built a browser-based peer-to-peer file sharing app with a Vite React client, Node.js/Express signaling server, Socket.IO, and WebRTC DataChannel transfer.",
    highlights: [
      "Implemented room creation and invite-based pairing through invite links or QR codes.",
      "Used Socket.IO for signaling and WebRTC DataChannel for direct peer-to-peer file transfer.",
      "Configured local development and production build scripts so the server can serve the built client from a single deployment.",
    ],
    repositoryUrl: "https://github.com/laxman1892/rtc-file-sharing",
  },
  {
    title: "Collaborative Planner + Social Challenges",
    category: "In-progress full-stack app",
    stack: ["Next.js", "React", "Django REST Framework", "SimpleJWT", "SQLite"],
    summary:
      "Building a productivity and social accountability app for calendar planning, shared events, personal and group challenges, progress tracking, and achievement badges.",
    highlights: [
      "Created a Django backend with a custom email-based user model, JWT authentication, planner events, invitations, challenges, progress logs, and achievements.",
      "Built a Next.js frontend around authentication, session persistence, event creation, event editing, deletion confirmation, and dashboard-style planner screens.",
      "Structured the app to grow toward PostgreSQL deployment, notifications, leaderboards, maps, and real-time social activity.",
    ],
  },
];
