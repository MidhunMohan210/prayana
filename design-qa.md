# Design QA

## Evidence

- Source visual truth: `https://togo.uxper.co/home-05/`
- Desktop source capture: `togo-video-reference-desktop.jpg` (1501 × 900 px)
- Mobile source capture: `togo-video-reference-mobile.jpg` (379 × 820 px)
- Desktop implementation: `design-qa-video-desktop.jpg` (1497 × 891 px at approximately 1512 × 900 CSS px, 1× density)
- Mobile implementation: `design-qa-video-mobile.jpg` (375 × 812 px at approximately 390 × 844 CSS px, 1× density)
- Full-view comparison: `design-qa-video-comparison.png` (source left, Prayana adaptation right)
- State: video playing with the overlay content and pause control visible

## Fidelity review

- Fonts and typography: the reference's large three-line statement and small uppercase eyebrow are preserved, adapted to Prayana's Montserrat family and established weight system.
- Spacing and layout rhythm: the section is full width, cinematic on desktop, and reduced to a compact mobile band. Overlay copy and the round control retain the reference's left alignment and hierarchy.
- Colors and visual tokens: a solid dark brand overlay replaces the reference's dark film treatment without gradients or glass effects. White copy and controls maintain strong contrast.
- Image quality and asset fidelity: the exact supplied 3840 × 2160 MP4 is stored locally and rendered with `object-cover`; no source-site media is hotlinked.
- Copy and content: the source layout is adapted with Prayana-specific text: “Travel with purpose” and “Unforgettable journeys, made for you.”

## Interaction and responsive checks

- The video autoplays muted, loops, and uses `playsInline` for mobile compatibility.
- The pause control was clicked and changed to “Play video”; clicking again resumed playback and restored “Pause video”.
- Desktop and mobile captures show no horizontal clipping.
- `npm run lint` passed.
- `npm run build -- --webpack` passed.

## Findings and comparison history

1. Initial P1: the first implementation capture inherited the global dark heading color. Fix: rendered the display line as an accessible role-based heading with an explicit white text fill. Post-fix evidence: `design-qa-video-desktop.jpg`.
2. Initial P2: the mobile video band was taller than the reference. Fix: reduced the mobile height from 380 px to 320 px, the minimum display size to 36 px, and the control gap to 24 px. Post-fix evidence: `design-qa-video-mobile.jpg`.
3. No open P0, P1, or P2 issues remain. The full comparison is sufficient because the typography, media crop, overlay, and control are clearly readable.

## Final result

passed
