export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Handstand Development",
    tagline: "From wall dependency to consistent, effortless freestanding balance.",
    description: "Designed for athletes who can hold against a wall but cannot reliably balance freestanding. We correct shoulder flexion restrictions, calibrate finger pressure mechanics, and replace kicking anxiety with repeatable bail reflexes.",
    deliverables: [
      "Wrist & shoulder structural screen",
      "Bail reflexes & kick-up calibration drills",
      "Daily balance drill progression (15-20 min protocols)",
      "Weekly video form breakdown & alignment cues"
    ],
    idealFor: "Athletes stuck under 10-second holds or kicking erratically.",
    image: "/images/skills/handstand.jpg"
  },
  {
    number: "02",
    title: "Advanced Handstand Skills",
    tagline: "Shapes, transitions, push-ups and one-arm balance work.",
    description: "For athletes with a stable 30+ second straight handstand seeking mastery over shape transitions (tuck, straddle, Mexican, 7-shape), deficit handstand push-ups, and the beginning stages of one-arm handstand balance.",
    deliverables: [
      "Shape transition mechanics & pelvic control",
      "Deficit overhead pressing strength protocols",
      "Weight-shifting & block drill progressions",
      "One-arm alignment & side-tilt conditioning"
    ],
    idealFor: "Athletes with solid basic balance wanting advanced versatility.",
    image: "/images/skills/one-arm-handstand.jpg"
  },
  {
    number: "03",
    title: "Press to Handstand",
    tagline: "Lifting into inversion with pure control, compression, and mobility.",
    description: "Unlock the straddle press and pike press. We systematically combine active hamstring flexibility, pancake compression, and elevated shoulder protraction so you lift smoothly rather than muscling through.",
    deliverables: [
      "Hamstring & hip flexor compression screen",
      "Tuck & straddle negative lowering protocols",
      "Loaded pike flexibility routines",
      "Toe-slide & deficit elevation drills"
    ],
    idealFor: "Athletes lacking the compression or mobility to press up.",
    image: "/images/skills/press-handstand.jpg"
  },
  {
    number: "04",
    title: "Flexibility & Splits",
    tagline: "Build active, loaded mobility for pancake, front splits, and middle splits.",
    description: "Passive stretching rarely translates to skill mastery. Our protocols use loaded isometric contractions (PNF) and end-range strength training to reshape nervous system tolerance and joint capsule mobility safely.",
    deliverables: [
      "Pelvic alignment & hip capsule assessment",
      "Loaded active mobility routines (PNF protocols)",
      "Joint resilience & adductor strengthening",
      "Bi-weekly progression measurements"
    ],
    idealFor: "Tight athletes needing active mobility to unlock bodyweight skills.",
    image: "/images/skills/middle-splits.jpg"
  },
  {
    number: "05",
    title: "Planche & Front Lever",
    tagline: "Horizontal leverage mastery and straight-arm tendon longevity.",
    description: "Straight-arm skills require intense tendon adaptation. We build the specific connective tissue capacity in your distal biceps and lats to progress safely through tuck, advanced tuck, straddle, and full holds.",
    deliverables: [
      "Biceps tendon & elbow conditioning prehab",
      "Band-assisted and eccentric overload programming",
      "Scapular protraction & depression metrics",
      "Periodized volume to prevent tendonitis"
    ],
    idealFor: "Athletes seeking elite horizontal static holds without injury.",
    image: "/images/skills/planche.jpg"
  },
  {
    number: "06",
    title: "Strength & Conditioning",
    tagline: "Foundational pulling, pushing, and core mechanics to support all skills.",
    description: "A strong chassis makes skill acquisition dramatically faster. We optimize weighted pull-ups, dips, core compression, and rotational stability to create an athletic foundation ready for high-level calisthenics.",
    deliverables: [
      "Push-to-pull structural ratio balancing",
      "Weighted calisthenics overload periodization",
      "Rotational & anti-extension core protocols",
      "Recovery, deload, and fatigue management"
    ],
    idealFor: "Athletes looking for a complete, structured strength blueprint.",
    image: "/images/skills/calisthenics.jpg"
  }
];
