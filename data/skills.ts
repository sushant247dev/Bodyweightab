export interface SkillItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  focus: string;
  description: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
  progressionMilestones: string[];
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "handstand",
    number: "01",
    title: "Handstand",
    subtitle: "Straight Line Mechanics & Balance Consistency",
    category: "Foundation",
    focus: "Wrist conditioning, scapular elevation, hollow body alignment",
    description: "Developing effortless, reproducible freestanding balance. Moving beyond kicking and hoping to disciplined entry control, alignment stacking, and 60+ second holds.",
    image: "/images/skills/handstand.jpg",
    aspectRatio: "portrait",
    progressionMilestones: ["Chest-to-wall endurance (60s)", "Bail safety & pirouette", "Free kick-up consistency", "Hollow-line balance control"]
  },
  {
    id: "handstand-pushups",
    number: "02",
    title: "Handstand Push-Ups",
    subtitle: "Overhead Pressing Strength & Eccentric Control",
    category: "Overhead Power",
    focus: "Anterior deltoids, triceps lockout, tripod descent path",
    description: "Building true vertical pressing power from the floor without back arching or wall assistance. Controlled negatives transitioning into full concentric depth.",
    image: "/images/skills/handstand-pushup.jpg",
    aspectRatio: "portrait",
    progressionMilestones: ["Elevated pike push-ups", "Eccentric wall HSPU", "Freestanding deficit negatives", "Full depth freestanding HSPU"]
  },
  {
    id: "one-arm-handstand",
    number: "03",
    title: "One-Arm Handstand",
    subtitle: "Weight Transfer, Side Tilt & Micro-Corrections",
    category: "Elite Balance",
    focus: "Unilateral shoulder depression/elevation, finger grip sensitivity",
    description: "The absolute pinnacle of balance and neuromuscular refinement. Mastering delicate weight displacement, straddle stabilization, and finger-tip micro-adjustments.",
    image: "/images/skills/one-arm-handstand.jpg",
    aspectRatio: "portrait",
    progressionMilestones: ["Diamond & block shifts", "Finger-assisted one arm", "Straddle side-tilt stabilization", "Freestanding one-arm hold"]
  },
  {
    id: "press-to-handstand",
    number: "04",
    title: "Press to Handstand",
    subtitle: "Active Compression, Shoulder Elevation & Hamstring Length",
    category: "Mobility & Strength",
    focus: "Thoracic extension, hip compression, scapular protraction",
    description: "Lifting into the handstand without kicking or momentum. Blending deep hamstring mobility, pancake flexibility, and continuous shoulder protraction.",
    image: "/images/skills/press-handstand.jpg",
    aspectRatio: "square",
    progressionMilestones: ["Pancake floor stretch", "Elevated straddle press negatives", "Toe-slide press drills", "Effortless floor press"]
  },
  {
    id: "l-sit-v-sit",
    number: "05",
    title: "L-Sit & V-Sit",
    subtitle: "Scapular Depression & Active Core Compression",
    category: "Compression",
    focus: "Depressed scaps, quad lockout, lower abdominal pull",
    description: "Rigid straight-arm support with elevated lower body. Unlocking full hip flexor compression, triceps engagement, and transitioning towards high V-sit angles.",
    image: "/images/skills/l-sit.jpg",
    aspectRatio: "landscape",
    progressionMilestones: ["Tuck L-sit on parallel bars", "Full floor L-sit (30s)", "Advanced straddle L-sit", "High 45° V-sit hold"]
  },
  {
    id: "middle-splits",
    number: "06",
    title: "Middle Splits & Flexibility",
    subtitle: "End-Range Hip Mobility & Active Adductor Strength",
    category: "Flexibility",
    focus: "Pelvic tilt, adductor loaded stretches, glute stability",
    description: "True athletic flexibility is active, not passive. Developing the end-range strength and nervous system tolerance to open full 180° middle and pancake splits safely.",
    image: "/images/skills/middle-splits.jpg",
    aspectRatio: "landscape",
    progressionMilestones: ["Loaded horse stance (5x5)", "Isometric adductor contractions", "PNF pancake protocols", "Floor-level flat middle splits"]
  },
  {
    id: "planche",
    number: "07",
    title: "Planche",
    subtitle: "Straight-Arm Protraction & Horizontal Leverage",
    category: "Straight-Arm Strength",
    focus: "Bicep tendon resilience, serratus anterior, anterior delts",
    description: "Defying gravity through brute leverage and tendon preparation. Overcoming extreme horizontal torque through methodical progressions from tuck to straddle and full planche.",
    image: "/images/skills/planche.jpg",
    aspectRatio: "portrait",
    progressionMilestones: ["Planche lean (45s)", "Full tuck planche hold", "Advanced tuck to straddle", "Full horizontal planche"]
  },
  {
    id: "front-lever",
    number: "08",
    title: "Front Lever",
    subtitle: "Posterior Chain Tension & Lat Depression",
    category: "Straight-Arm Pull",
    focus: "Lats, rear delts, teres major, pelvic posterior tilt",
    description: "Suspending the entire body horizontally beneath the bar. Developing unmatched pulling leverage, lat engagement, and unbreakable core tension.",
    image: "/images/skills/front-lever.jpg",
    aspectRatio: "square",
    progressionMilestones: ["Dragon flag mastery", "Scapular retraction pulls", "Straddle front lever hold", "Full horizontal front lever"]
  }
];
