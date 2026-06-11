# UX Audit V2

## Review Lens

This pass reviewed the app against common product standards used in modern productivity and learning tools:

* A clear daily operating model.
* One primary next action per screen.
* Explicit object lifecycle states.
* Visible progress, completion, and recovery states.
* No dead-end controls.
* Data quality signals before practice.
* Analytics that connect back to action.

## Core Issues Found

### Home

The home page had useful metrics, but it did not yet behave like a daily command center. The learner needed a prioritized plan that explains what to do next.

Resolution:

* Added a Today Plan with action rows for review, streak maintenance, vocabulary capture, and weak-area inspection.
* Kept the primary review CTA, but made secondary learning actions visible.

### Vocabulary Intake

The add-word flow captured data, but the process needed stronger setup guidance and readiness checks.

Resolution:

* Added a setup checklist for term, confirmed meaning, example, and source.
* Disabled saving until required fields are present.
* Added quality badges on vocabulary records: Ready, Needs setup, or Needs confirmation.

### Review Session

The review flow showed a card, but it did not clearly frame the session lifecycle.

Resolution:

* Added session progress, reviewed count, and remaining count.
* Added a completion state when the due queue is clear.
* Removed fallback behavior where review silently switched to non-due words.

### Analytics

Analytics were informative, but the learner needed clearer operational meaning.

Resolution:

* Streak now reports current streak, longest streak, reviews completed today, daily goal, and remaining reviews.
* Analytics now includes streak maintenance and source/import context.

## Updated Product Standard

The app should now follow this loop:

1. Home identifies today's plan.
2. Learner reviews due vocabulary.
3. Review session gives progress and completion feedback.
4. Learner captures new vocabulary with confirmed setup.
5. Vocabulary records show readiness and quality state.
6. Analytics explains what changed and what to do next.

This makes the product closer to modern tools such as Linear and Notion in clarity of status, while preserving the learning-loop expectations of educational platforms.

## Pearl Style Translation

The Pearl case study was used as inspiration for tone and interaction patterns:

* Reflective weekly synthesis instead of only dashboard metrics.
* Theme tags that make patterns feel tangible.
* "Notes to self" and "continuous threads" adapted into language-learning commitments.
* Softer editorial surfaces with calm accent colors.
* Progress summaries that feel personal without hiding the underlying data.

The app should not copy Pearl's journaling domain or visual identity directly. The useful pattern is a study tool that reflects with the learner: it notices vocabulary patterns, points out weak areas, and turns analytics into a small next step.

## V3 Professional Polish Pass

Research references used for this pass:

* NN/g usability heuristics: visibility of system status, consistency and standards, error prevention, recognition over recall, and aesthetic minimalism.
* NN/g visual hierarchy guidance: stronger grouping, scale, color, and contrast to guide attention.
* W3C target-size guidance: interactive controls should remain large enough and spaced enough on touch screens.
* Pearl inspiration: reflective weekly summaries, theme tags, and progress surfaces that feel personal without becoming decorative noise.

Issues found and resolved:

* The home page could send a learner into an empty review flow when no cards were due. The primary action now changes to Add word, with Analytics as the supporting action.
* Mobile dashboard cards were too large and pushed core progress below the fold. Metrics now use a compact two-column grid on mobile.
* Mobile navigation hid labels, which forced recall instead of recognition. Navigation labels now remain visible until very narrow screens.
* Browser default focus styling introduced an orange outline that clashed with the brand system. Focus states now use a lavender product token.
* Some old tinted surfaces were hard-coded and made the palette feel inconsistent. The CSS now uses cooler ink, lavender, graphite, and blue tokens with no green or beige styling.
* The vocabulary page lacked feedback after search/filtering. A result strip now shows how many entries are visible and which category context is active.
