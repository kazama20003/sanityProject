# Catalog E-commerce

A modern e-commerce platform built with Next.js 15, Sanity CMS, and Clerk authentication.

## Features

- 🛍️ Product browsing by categories
- 💰 Special offers and discounts
- 🔐 Secure authentication with Clerk
- 📝 Content management with Sanity
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast performance with Next.js 15 and Turbopack

## Tech Stack

- **Framework:** Next.js 15
- **Content Management:** Sanity
- **Authentication:** Clerk
- **Styling:** Tailwind CSS
- **UI Components:** 
  - Radix UI
  - Framer Motion
  - Lucide React Icons
- **Development Tools:**
  - TypeScript
  - ESLint
  - Turbopack

## Getting Started

First, run the development server:

```bash
# Install dependencies
npm install

# Start the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

You'll need to set up the following environment variables:

- Clerk authentication keys
- Sanity project configuration
- Any other API keys required for the project

## Content Management

This project uses Sanity as a headless CMS. To manage your content:

1. Access the Sanity Studio at `/studio` route
2. Use the Sanity dashboard to manage:
   - Products
   - Categories
   - Discounts
   - Special offers

## Authentication

User authentication is handled by Clerk, providing:
- Secure sign-up/sign-in
- User profile management
- Session handling

## Development

- `npm run dev`: Starts development server with Turbopack
- `npm run build`: Creates production build
- `npm run start`: Starts production server
- `npm run lint`: Runs ESLint
- `npm run typegen`: Generates Sanity schema types

## Deployment

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new).

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is private and not open for public use.
