# French Vocabulary Trainer

## Product Requirements Document (V1)

### Overview

French Vocabulary Trainer is a personal language-learning platform designed to help learners acquire, retain, and actively use French vocabulary through spaced repetition, contextual learning, audio pronunciation, and TCF-focused practice.

The product is initially being built for a learner preparing for the TCF Canada exam, with a particular focus on building a strong B2/C1 vocabulary range and improving long-term recall.

Unlike traditional flashcard tools, the platform focuses on:

* Vocabulary retention
* Real-world usage
* Exam-oriented structures
* Pronunciation support
* Personal progress tracking
* Spaced repetition

The platform should feel like a hybrid between Quizlet, Anki, and a personal TCF vocabulary coach.

---

## Problem Statement

Learning vocabulary is difficult because:

* New words are quickly forgotten.
* Words are often learned without context.
* Learners struggle to recall words during speaking and writing.
* Existing tools focus heavily on memorisation rather than usage.
* Vocabulary is rarely connected to real-life situations or exam scenarios.

The goal is to create a system where vocabulary is continuously revisited until it becomes part of active language use.

---

## Target User

### Primary User

French learner preparing for:

* TCF Canada
* TEF Canada
* DELF B2
* General B2/C1 French proficiency

Characteristics:

* Learns vocabulary from books, classes, conversations, and reading.
* Maintains personal vocabulary lists.
* Wants structured revision.
* Wants contextual examples.
* Wants pronunciation support.
* Wants long-term retention.

---

## Core Product Goals

1. Store vocabulary in a central database.
2. Practice vocabulary using multiple learning methods.
3. Automatically schedule reviews using spaced repetition.
4. Provide real-world context for every word.
5. Provide pronunciation support.
6. Track mastery over time.
7. Support TCF-focused learning.

---

## Design and Product Process Principles

The product should feel modern, personal, and calm, drawing inspiration from tools such as Linear, Notion, and high-quality educational platforms.

Design direction:

* Use a clean, focused interface with strong information hierarchy and minimal visual clutter.
* Prioritize fast daily workflows over decorative screens.
* Make the home page feel like a personal learning command center, not a marketing landing page.
* Use gentle personalization, progress language, and learner status to make the product feel aware of the user's journey.
* Show meaningful analytics through clear charts, compact summaries, and drill-down views.
* Keep vocabulary, review sessions, analytics, and imports tightly connected so insights lead directly to action.
* Use tasteful motion and transitions only when they help orientation, feedback, or motivation.
* Design for repeated daily use: quick review entry, low friction, readable lists, and easy editing.

Process references:

* Linear: crisp task flows, restrained interface density, keyboard-friendly interaction, and status-driven work views.
* Notion: flexible personal knowledge base structure, editable records, tags, filters, and user-owned organization.
* Educational platforms: progress tracking, practice loops, mastery states, review history, and motivational feedback.
* Pearl by Lele Zhang: reflective summaries, pattern recognition, warm personalization, and visualizations that make growth feel tangible.

Pearl-inspired product behaviors should be adapted for language learning:

* Weekly vocabulary reflection that summarizes what improved, what is still difficult, and what to review next.
* Inline learning prompts on word detail pages, such as "try using this in an opinion sentence" or "this structure often appears in argumentation".
* Pattern recognition across reviews, such as repeated difficulty with connectors, formal verbs, or abstract nouns.
* Visual progress maps that show vocabulary growth by time, level, category, and mastery.
* Short personal insights written in a supportive tone, based on real review behavior.

The product should be polished and emotionally encouraging without becoming playful at the expense of clarity. It should feel like a serious study tool with enough warmth to keep the learner coming back.

---

## MVP Features

### Authentication

Users can:

* Sign up
* Log in
* Log out
* Reset password

Authentication options:

* Email + Password
* Google Login

Recommended: Supabase Auth

---

### Vocabulary Database

Each word contains:

* French Word
* English Meaning
* Category
* Level
* Part of Speech
* Example Sentence
* English Translation
* Common Structures
* Audio Pronunciation
* TCF Priority
* Status
* Date Added
* Source
* Tags

Example:

Word:
susciter

Meaning:
to generate / provoke

Category:
Society

Level:
B2

Example:
Cette question suscite de nombreux débats.

Translation:
This question generates a lot of debate.

Structure:
susciter un débat

Priority:
High

---

### Initial Vocabulary Dataset

The application will launch with an existing curated vocabulary database compiled from the user's French learning materials.

Current dataset:

* 649+ unique French words and expressions
* Duplicate entries removed
* Vocabulary collected from textbooks, notes, reading materials, and French study resources
* Includes a mixture of:
  * General vocabulary
  * Everyday expressions
  * TCF-oriented vocabulary
  * B1/B2/C1 structures
  * Connectors and argumentation phrases

Examples include:

* approfondir
* contester
* inévitable
* parvenir à
* remettre en cause
* remettre à plus tard
* bouleverser
* susciter
* nuancer
* contribuer à
* atténuer
* renforcer
* sensibiliser

The imported vocabulary will serve as the foundation of the application and will be available immediately after launch.

Future vocabulary additions will be imported in batches through CSV uploads and merged into the existing database.

Requirements:

* Prevent duplicate entries during import.
* Allow manual editing of existing entries.
* Track the source of imported vocabulary.
* Automatically assign new words a status of "New".
* Allow bulk categorisation and tagging.

The vocabulary database should be treated as a growing personal knowledge base rather than a static flashcard deck.

---

### Import Vocabulary

Users can:

* Upload CSV
* Upload Excel
* Paste vocabulary manually

Import behavior:

* Validate required fields before import.
* Normalize French words and expressions before duplicate checks.
* Merge new batches into the existing database without creating duplicate entries.
* Store an import source for each word or batch.
* Assign imported words an initial status of "New".
* Support bulk category, level, TCF priority, and tag assignment.
* Report import results, including created entries, skipped duplicates, and invalid rows.

Future:

* Extract vocabulary from images
* OCR support
* AI-assisted vocabulary extraction

---

### Practice Modes

#### Flashcards

* French -> English
* English -> French
* Reveal answer
* Mark difficulty

#### Multiple Choice

* Show word
* Provide four options
* Choose correct meaning

#### Typing Practice

* Show French word
* User types meaning
* Compare answer

#### Fill in the Blank

* Sentence shown
* Missing vocabulary
* User completes sentence

#### Listening Practice

* Play audio
* User identifies word
* User identifies meaning

---

## Spaced Repetition System

After every review:

* Again
* Hard
* Good
* Easy

Scheduling:

* Again: 10 minutes
* Hard: 1 day
* Good: 3 days
* Easy: 7 days

Future versions may use a full Anki-style algorithm.

---

## Word Mastery Levels

* New
* Learning
* Familiar
* Active
* Mastered

Words move automatically based on review performance.

---

## Audio Support

Each word should have:

* Play Word
* Play Example Sentence

Recommended:

* Browser Text-to-Speech (MVP)

Future:

* Native audio generation

---

## Categories

Examples:

* Education
* Technology
* Work
* Society
* Environment
* Politics
* Travel
* Health
* Business
* Finance
* General Vocabulary
* TCF Expressions

---

## Personalized Home Page

The home page should feel personal and status-driven. It should answer three questions immediately:

* What is my current French vocabulary status?
* What should I study today?
* Am I improving over time?

Display:

* Personalized greeting using the learner's name.
* Current learner status based on vocabulary progress, such as "Building B2 Foundation", "Strengthening Active Recall", or "TCF Review Sprint".
* Today's review queue with due word count and estimated session time.
* Primary action to start the recommended review session.
* Secondary actions for TCF Mode, adding vocabulary, and reviewing weak words.
* Progress summary for total words, new words, learning words, familiar words, active words, and mastered words.
* Weekly streak and review consistency.
* Recent imports, including source and number of accepted words.
* Weakest categories and levels needing attention.
* Recently mastered words.

The home page should not be a static landing page. It should be the learner's operating dashboard and should update as soon as vocabulary is imported, reviewed, edited, or mastered.

---

## Real Analytics

Analytics should be calculated from actual user activity and vocabulary records, not manually entered values.

Track:

* Total vocabulary size.
* Words by status: New, Learning, Familiar, Active, Mastered.
* Words by CEFR level: B1, B2, C1, unknown.
* Words by category and tag.
* Reviews completed per day, week, and month.
* Reviews due today and overdue.
* Average accuracy across all practice modes.
* Accuracy by practice mode.
* Accuracy by category, level, and TCF priority.
* Retention rate based on successful reviews after scheduled intervals.
* Mastery growth over time.
* Active recall rate for French -> English and English -> French directions.
* Most difficult words based on repeated "Again" or incorrect answers.
* Fastest-improving words based on recent successful review streaks.
* Import growth over time, grouped by source.
* Study consistency, including current streak and longest streak.

Analytics views:

* Overview: key progress metrics and today's work.
* Progress: mastery growth, review volume, streaks, and retention trends.
* Vocabulary: breakdown by status, level, category, tag, and source.
* Weak Areas: words, categories, levels, and structures with low recall.
* TCF Readiness: argumentation vocabulary, connectors, formal structures, and high-priority TCF words.

Each analytics card should support drill-down into the underlying vocabulary list so the learner can act on the insight immediately.

Data requirements:

* Store every review attempt with word ID, user ID, practice mode, answer direction, result, difficulty rating, timestamp, and response time when available.
* Store review scheduling data, including next review date, last reviewed date, ease/difficulty rating, and consecutive successful reviews.
* Store import batch metadata, including source, upload date, accepted rows, skipped duplicates, and invalid rows.
* Store vocabulary status changes over time so mastery growth can be charted.

Example analytics:

* "You have 84 words due today."
* "Your B2 Society vocabulary accuracy is 76% this week."
* "Connectors are improving: 18 mastered, 7 still learning."
* "12 words from your textbook import are now active."
* "Your most difficult words this week are remettre en cause, nuancer, and atténuer."

---

## Word Detail Page

Display:

* Word
* Meaning
* Audio
* Examples
* Translations
* Structures
* Synonyms
* Related Words
* Mastery Status
* Review History

---

## TCF Mode

Special mode focused on exam preparation.

Practice:

* Argumentation vocabulary
* Opinion vocabulary
* Connectors
* Debate expressions
* Formal structures

Examples:

* nuancer
* remettre en cause
* susciter
* parvenir à
* contribuer à
* atténuer
* renforcer
* sensibiliser

---

## User Flow

Login

↓

Dashboard

↓

Review Due Words

↓

Practice Session

↓

Mark Difficulty

↓

Update Progress

↓

Schedule Next Review

↓

Dashboard Updated

---

## Technical Stack

Frontend:

* React
* Vite
* TypeScript
* Tailwind

Backend:

* Supabase

Database:

* PostgreSQL (Supabase)

Authentication:

* Supabase Auth

Hosting:

* Vercel

Storage:

* Supabase Storage

---

## Future Roadmap

### Phase 2

* AI-generated examples
* AI-generated explanations
* AI-generated quizzes
* Vocabulary recommendations

### Phase 3

* Mobile app
* Offline mode
* Community decks
* Shared decks
* Teacher accounts

### Phase 4

* Speaking practice
* Pronunciation scoring
* Conversation simulator
* TCF oral preparation
* AI examiner mode

---

## Success Metrics

* Daily Active Users
* Review Completion Rate
* Vocabulary Retention Rate
* Average Mastery Growth
* Words Learned Per Month
