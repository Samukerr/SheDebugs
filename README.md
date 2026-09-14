# SheDebugs

> **Building digital solutions. Connecting talent. Debugging the future.**

SheDebugs is a South African technology company focused on software development, digital solutions, and technical talent opportunities.

The SheDebugs website serves as the company's digital presence, showcasing its services, mission, partnerships, and opportunities while providing a foundation for future client and talent platforms.

## Live Website

**[SheDebugs](https://she-debugs.vercel.app/)**

## About the Project

The SheDebugs website was designed and developed as a modern, responsive web platform for a technology company focused on creating opportunities within the software development ecosystem.

The platform communicates the SheDebugs brand while providing users with information about:

* Software development services
* Partnership opportunities
* Technology and talent solutions
* Opportunities for young professionals
* Services for businesses and startups
* Contact and engagement opportunities

The website follows a dark, modern developer-focused design with green accents and a clean interface that reflects the SheDebugs identity.

## Features

### Landing Page

* Modern developer-focused UI
* Responsive navigation
* Mobile hamburger menu
* Clear calls-to-action
* Brand-focused hero section
* Responsive layout across screen sizes

### About

Provides information about:

* SheDebugs' mission
* The company's vision
* The problem it aims to solve
* Its focus on technology and opportunities
* The company's role within the technology ecosystem

### Partnerships

The partnership section is designed to connect SheDebugs with organisations looking to:

* Access young technology talent
* Collaborate on software projects
* Support skills development
* Create internship and learnership opportunities
* Participate in technology initiatives

### Authentication

The frontend includes authentication flows for:

* User registration
* User login
* Access token handling
* Refresh token handling
* Backend API integration

Authentication requests are designed to communicate with the SheDebugs backend API.

### Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The navigation and page layouts adapt to different screen sizes for a consistent user experience.

# Tech Stack

## Frontend

| Technology   | Purpose                                      |
| ------------ | -------------------------------------------- |
| Next.js      | React framework and application architecture |
| React        | Building reusable UI components              |
| TypeScript   | Type-safe development                        |
| Tailwind CSS | Styling and responsive UI                    |
| JavaScript   | Application logic and interactions           |
| HTML5        | Semantic page structure                      |
| CSS          | Additional styling and layout                |

## Backend

The website is designed to communicate with a separate backend application.

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| Java            | Backend programming language     |
| Spring Boot     | REST API and backend application |
| Spring Security | Authentication and authorization |
| PostgreSQL      | Relational database              |
| JWT             | Token-based authentication       |
| BCrypt          | Password hashing                 |

## Deployment and Development

| Technology         | Purpose                         |
| ------------------ | ------------------------------- |
| Vercel             | Frontend deployment and hosting |
| Git                | Version control                 |
| GitHub             | Source code management          |
| VS Code            | Development environment         |
| Postman            | API testing                     |
| pgAdmin / DataGrip | Database management             |

# Architecture

The project follows a frontend/backend separation approach.

```text
                    ┌─────────────────────┐
                    │      User / Client  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Next.js Frontend  │
                    │ React + TypeScript   │
                    │    Tailwind CSS      │
                    └──────────┬──────────┘
                               │
                         REST API / JWT
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Spring Boot API   │
                    │ Java + Spring       │
                    │ Security            │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    PostgreSQL DB    │
                    └─────────────────────┘
```

This architecture allows the frontend and backend to be developed, tested, and deployed independently.

# Project Structure

A simplified version of the frontend structure:

```text
shedebugs/
│
├── app/
│   ├── about/
│   ├── partnership/
│   ├── login/
│   ├── register/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── navigation/
│   ├── sections/
│   └── ui/
│
├── public/
│   ├── images/
│   └── assets/
│
├── styles/
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

> The exact structure may evolve as additional platform functionality is introduced.

# Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* A code editor such as VS Code

Check your installations:

```bash
node --version
npm --version
git --version
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd shedebugs
```

Install dependencies:

```bash
npm install
```

---

## Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

# Environment Variables

Create a `.env.local` file in the project root.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

Environment variables should never contain sensitive credentials in source control.

Make sure `.env.local` is included in `.gitignore`.

# Authentication Flow

The authentication system uses JWT-based authentication.

The general flow is:

```text
User
 │
 ▼
Login / Register
 │
 ▼
Next.js Frontend
 │
 ▼
Spring Boot API
 │
 ▼
Validate Credentials
 │
 ▼
Generate JWT
 │
 ▼
Return Access + Refresh Tokens
 │
 ▼
Frontend Stores Tokens
 │
 ▼
Authenticated Requests
```

The backend uses BCrypt password hashing to protect user passwords.

# Design System

The SheDebugs interface uses a modern developer-oriented visual identity.

### Primary Design Characteristics

* Dark interface
* Green technology accents
* Minimal and clean layouts
* Developer-inspired visuals
* Responsive components
* Strong typography
* Clear calls-to-action

### Brand Concept

The SheDebugs identity combines technology, software development, and debugging culture.

The bug/code concept represents the company's goal of identifying problems, building solutions, and creating opportunities within the technology ecosystem.

# Responsive Design

The website follows a responsive-first approach.

The UI adapts to:

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

Special consideration is given to:

* Navigation
* Typography
* Buttons
* Section spacing
* Cards
* Forms
* Mobile hamburger menus

---

# Testing

During development, the application can be tested locally using:

```bash
npm run dev
```

API endpoints can be tested independently using tools such as Postman.

Frontend testing should include:

* Navigation
* Authentication
* Form validation
* API requests
* Responsive layouts
* Mobile navigation
* Error handling
* Browser compatibility

---

# Deployment

The frontend is deployed using Vercel.

The general deployment workflow is:

```text
Developer
    │
    ▼
Git
    │
    ▼
GitHub
    │
    ▼
Vercel
    │
    ▼
Production Website
```

Changes pushed to the configured GitHub repository can be deployed through Vercel's deployment pipeline.

# Future Development

The SheDebugs platform is intended to evolve beyond a company website.

Planned functionality may include:

* User dashboards
* Talent profiles
* Business profiles
* Talent-to-business matching
* Job and opportunity listings
* Internship and learnership opportunities
* Developer portfolios
* Role-based access control
* Admin dashboard
* Application management
* Business/talent communication
* Platform analytics
* AI-assisted talent matching
  
# Project Goals

The long-term goal of the SheDebugs platform is to use technology to help bridge the gap between skilled young professionals and organisations that need technology talent.

The platform aims to:

* Create opportunities for unemployed graduates and developers
* Help businesses access technology talent
* Encourage practical software development experience
* Support digital transformation
* Build technology partnerships
* Reduce barriers to entering the technology industry
  
#Founding

SheDebugs was founded with the goal of using technology to create opportunities for young professionals while helping businesses access digital skills and software development solutions.

#License

This project is currently proprietary and belongs to SheDebugs.

Unauthorized copying, redistribution, or commercial use of the source code is not permitted without permission from the owner.

#Contact

For business, partnership, or collaboration enquiries, please contact SheDebugs through the official website.

**Website:** https://she-debugs.vercel.app/

**Built with code, purpose, and plenty of debugging by SheDebugs.**


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
