/**
 * ============================================================================
 * DESIGN LAYOUT PLACEHOLDERS ONLY
 * ============================================================================
 * NOTE TO COACH:
 * The testimonials below are structured design placeholders with fictional names
 * (Ethan Parker, Noah Bennett, Mason Carter, Ryan Mitchell) intended solely
 * to test and establish the visual layout, typographic rhythm, and responsive
 * panel dimensions of the website.
 *
 * DO NOT represent these as real client endorsements in production.
 * Replace the items in this array with genuine feedback from your actual clients.
 * ============================================================================
 */

export interface TestimonialItem {
  id: string;
  clientIdentifier: string;
  quote: string;
  clientName: string;
  coachingGoal: string;
  skillAchievement: string;
  trainingDuration: string;
  initials: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-01",
    clientIdentifier: "CLIENT // HS-084",
    quote: "I had been stuck on my handstand for months. Having a structured progression and someone correcting my technique completely changed how I approached training. Within eight weeks, my freestanding hold went from an inconsistent 5 seconds to a relaxed, calm 45 seconds.",
    clientName: "Ethan Parker",
    coachingGoal: "Handstand Consistency & Alignment",
    skillAchievement: "Consistent 45s Freestanding Hold & Clean Bail",
    trainingDuration: "12 Weeks Coaching",
    initials: "EP"
  },
  {
    id: "testimonial-02",
    clientIdentifier: "CLIENT // PR-112",
    quote: "I spent over a year following random YouTube tutorials trying to unlock the press to handstand. The customized pancake flexibility drills and compression cues were the exact missing link. The feedback on my hip elevation was something I could never have diagnosed on my own.",
    clientName: "Noah Bennett",
    coachingGoal: "Press to Handstand & Pancake Compression",
    skillAchievement: "First Freestanding Straddle Press Unlocked",
    trainingDuration: "16 Weeks Coaching",
    initials: "NB"
  },
  {
    id: "testimonial-03",
    clientIdentifier: "CLIENT // FL-209",
    quote: "The personalized programming saved my elbows. I was dealing with constant distal bicep soreness from attempting front levers without proper connective tissue conditioning. We rebuilt my pulling foundation methodically, and I finally achieved a rock-solid horizontal hold without pain.",
    clientName: "Mason Carter",
    coachingGoal: "Front Lever & Straight-Arm Pulling",
    skillAchievement: "Full Horizontal Front Lever (8s Hold)",
    trainingDuration: "20 Weeks Coaching",
    initials: "MC"
  },
  {
    id: "testimonial-04",
    clientIdentifier: "CLIENT // OA-305",
    quote: "Transitioning from a regular two-arm handstand to shape variations and one-arm weight shifts felt impossible until we broke down the micro-adjustments in finger pressure and shoulder depression. The frame-by-frame video reviews each week kept me accountable and focused.",
    clientName: "Ryan Mitchell",
    coachingGoal: "Advanced Handstand Shapes & Weight-Shifting",
    skillAchievement: "5-Second Clean One-Arm Handstand on Right",
    trainingDuration: "24 Weeks Coaching",
    initials: "RM"
  }
];
