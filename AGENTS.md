# AGENTS.md

## Project Overview

This project is a modern landing page for Prayana Holidays.

Current Prayana website:
https://prayanaholidays.com/

Competitor/reference website:
https://wecaretourz.com/

The competitor website is only a reference for structure, content presentation,
and expected quality. Do not copy its code, layout, text, images, or design
pixel-for-pixel.

The final website must have an original Prayana Holidays identity.

## Current Scope

Build only a static landing page.

Do not add:

- Backend
- Database
- Authentication
- Admin panel
- Online booking
- Payment integration
- API routes
- Customer dashboard

The project may become dynamic later, so repeated content should be stored in
simple JavaScript data files.

## Technology

- Next.js App Router
- JavaScript only
- Tailwind CSS
- Next.js Image
- Lucide React for icons
- Framer Motion only when subtle animation is required

Do not use TypeScript.

Do not create:

- `.ts` files
- `.tsx` files
- TypeScript interfaces
- TypeScript configuration
- Advanced abstractions

## Coding Style

- Write simple, readable JavaScript.
- Prefer functional React components.
- Keep components small and easy to modify.
- Avoid unnecessary abstractions.
- Avoid unnecessary dependencies.
- Use reusable components only when they reduce real duplication.
- Use clear names for files, variables, functions, and components.
- Add comments only when the logic is not obvious.
- Do not modify unrelated files.
- Do not generate the entire website at once.

## Design Direction

The design should feel:

- Modern
- Premium
- Minimal
- Trustworthy
- Warm and welcoming
- Suitable for families, couples, groups, and international travellers

Use:

- Large travel photography
- Generous white space
- Clear typography
- Clean tour-package cards
- One main brand colour
- Neutral supporting colours
- Subtle borders, shadows, and rounded corners
- Clear WhatsApp and enquiry calls to action

Avoid:

- Excessive animation
- Heavy gradients
- Glassmorphism
- Custom cursors
- Continuous moving elements
- Crowded layouts
- Excessive sliders
- Large background videos
- Generic AI-looking sections

## Project Structure

Use this general structure:

```text
src/
  app/
  components/
    layout/
    sections/
    ui/
  data/
  lib/

public/
  images/
    hero/
    packages/
    destinations/
    about/
    testimonials/