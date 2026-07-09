# Codemify Homepage Test Plan

## Application Overview

Test plan for Codemify homepage (https://codemify.com/) covering page load, hero CTAs, courses section, value proposition content, and key external actions.

## Test Scenarios

### 1. Codemify Homepage

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads and renders successfully

**File:** `tests/codemify-homepage.plan.md`

**Steps:**
  1. Navigate to https://codemify.com/
    - expect: The page loads successfully with HTTP 200 status.
    - expect: The page title contains "Codemify - QA Engineer Courses".
    - expect: Main homepage sections are visible: hero, "What is QA?", "Our courses", and "Why are we the best in QA education?"
  2. Wait for the main hero content to appear
    - expect: Hero headline "START A NEW CAREER IN TECH" is visible.
    - expect: Hero description text is visible.
    - expect: No critical page elements are missing from the hero section.

#### 1.2. Hero section CTA and anchor navigation

**File:** `tests/codemify-homepage.plan.md`

**Steps:**
  1. On the homepage, click the "Start Here" button in the hero section
    - expect: The page scrolls to the target anchor labeled "Start Here" or navigates to the appropriate section.
    - expect: The URL updates with the anchor fragment if applicable.
  2. Click the "Try intro week" link
    - expect: The link opens the intro week checkout page: https://courses.codemify.com/offers/yfxocHF9/checkout.
    - expect: The navigation occurs without broken link errors.

#### 1.3. Course cards and course section validation

**File:** `tests/codemify-homepage.plan.md`

**Steps:**
  1. Verify the "Our courses" section is visible
    - expect: The section heading "Our courses" appears.
    - expect: The Manual QA and Automation QA cards are present.
  2. Check the Manual QA course card details
    - expect: The card contains text "Manual QA".
    - expect: The card lists "2 months" duration, "Live webinars" 3 times a week, and "Interview Prep" 50 rounds.
    - expect: The "Learn more" button is visible.
  3. Check the Automation QA course card details
    - expect: The card contains text "Automation QA".
    - expect: The card lists "3,5 months" duration, "Live webinars" 3 times a week, and "Interview Prep" 86 rounds.
    - expect: The "Learn more" button is visible.

#### 1.4. Value proposition and career journey content

**File:** `tests/codemify-homepage.plan.md`

**Steps:**
  1. Scroll to the "Why are we the best in QA education?" section
    - expect: The heading appears clearly.
    - expect: Value statements such as "Internship in the US Based startup", "Interview preparation", "10+ years in the industry", and "Expert YouTube channel" are visible.
  2. Scroll to the career journey call-to-action area
    - expect: The heading "Start Your QA Career Journey" is visible.
    - expect: The subheading about following the step-by-step plan is visible.
  3. Verify the three career path cards in the journey section
    - expect: First Free Lesson and Intro Week content appear.
    - expect: Their associated action buttons "Try Free Lesson" and "Join Intro Week" are visible.

#### 1.5. External action links and consultation flow

**File:** `tests/codemify-homepage.plan.md`

**Steps:**
  1. Click the "One-on-One consultation" link
    - expect: The link opens https://link.codemify.com/homepage?_ga=... in a new tab or navigates correctly.
    - expect: The target destination loads successfully.
  2. Click the "Book a call" button
    - expect: The link opens https://calendly.com/codemify/consultation.
    - expect: The Calendly booking page loads without errors.
  3. Click the "Explore the Courses Now" link
    - expect: The link navigates to /program.
    - expect: The program page loads or the URL changes correctly.
