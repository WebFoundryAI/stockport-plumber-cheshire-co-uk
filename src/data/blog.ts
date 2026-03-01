import { BRAND } from './brand';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-of-blocked-drain",
    title: "7 Warning Signs of a Blocked Drain in Stockport Homes",
    metaTitle: "7 Warning Signs of a Blocked Drain | Stockport Plumber Advice",
    metaDescription: "Spot the early warning signs of a blocked drain in your Stockport home. From sluggish water to foul odours, learn when it is time to call a local Cheshire drainage specialist.",
    excerpt: "Stockport properties face unique drainage challenges due to the area's clay-rich soil and Victorian-era pipework. Here are seven tell-tale signs that a blockage is developing.",
    content: `Stockport sits on the Cheshire clay belt, and this heavy soil type puts extra pressure on underground drainage pipes. Combined with the fact that many homes in areas like Edgeley, Reddish and Heaton Moor still rely on original Victorian clay drains, blockages are a common headache for local residents. Recognising the early warning signs can save you from a full-blown emergency and the expense that comes with it.

## 1. Water That Takes Its Time

If your kitchen sink or bathroom basin empties noticeably slower than it used to, sediment or grease is probably narrowing the pipe. In Stockport terraces, where shared drainage runs are common along back alleys between rows of houses, a slow drain can be the first hint of a blockage that affects your neighbours too.

## 2. Unusual Gurgling Noises

A healthy drain is essentially silent. Gurgling or bubbling sounds from a plughole or toilet pan indicate trapped air, which happens when water has to squeeze past an obstruction. Residents in Bramhall and Cheadle Hulme often report this after autumn leaf fall blocks gully grates that feed into shared surface-water systems.

## 3. Foul Smells Rising from Plugholes

Decomposing food waste, soap scum and fats can get trapped in bends and joints, producing a distinctive rotten-egg odour. The problem tends to worsen during warmer months. Older Stockport properties near the River Goyt and River Mersey floodplain may also notice smells when water tables rise and push sewer gases upward through ageing pipe seals.

## 4. Toilet Water Rises Before Draining

When you flush and the water level climbs unusually high before slowly receding, there is restriction somewhere downstream. In terraced streets across Heaton Norris and Portwood this can point to a shared lateral drain blockage that several households contribute to.

## 5. Water Backing Up Through Other Fixtures

If running the kitchen tap causes water to appear in a downstairs shower tray, or flushing upstairs forces bubbles out of a ground-floor toilet, the main drain serving your property is likely compromised. This cross-contamination symptom demands immediate professional attention.

## 6. Several Drains Affected at Once

A single blocked sink is usually a localised issue. When multiple fixtures slow down together, the culprit is almost certainly the main underground run. Properties near Hazel Grove and Marple that sit on sloping ground can experience this when tree roots from nearby gardens penetrate old clay joints, a problem we encounter regularly along the Middlewood Way corridor.

## 7. Damp Walls or Unexplained Puddles Outside

Persistent damp at skirting-board level or soggy patches on a lawn near a manhole cover can indicate a cracked or collapsed pipe leaking waste into the surrounding clay soil. Left unchecked in the Cheshire clay, this moisture destabilises foundations and can cause subsidence.

## Taking Action Quickly

Minor slow drainage might respond to a plunger, but if any of these signs persist for more than a day or two, professional investigation is the safest route. Our engineers at ${BRAND.brandName} use [CCTV drain cameras](/services/cctv-drain-surveys/) to pinpoint the exact location and cause, then clear the obstruction with [high-pressure jetting](/services/drain-jetting/) that scours pipe walls clean.

For complete blockages anywhere from [Stockport town centre](/locations/stockport/) to the villages on the edge of the Peak District, our [emergency drainage team](/services/emergency-drain-services/) operates around the clock. We carry all the equipment needed on board, so there is no waiting for parts.

Call ${BRAND.phoneFormatted} for a no-obligation assessment, or [book online](/contact/) at a time that suits you.`,
    author: "Stockport Plumber",
    publishDate: "2026-01-15",
    category: "Drain Maintenance",
    tags: ["blocked drains", "drain problems", "home maintenance", "plumbing tips"],
    readingTime: 6,
    featured: true
  },
  {
    slug: "prevent-blocked-drains-kitchen",
    title: "Keeping Your Kitchen Drains Clear: A Stockport Homeowner's Guide",
    metaTitle: "Prevent Kitchen Drain Blockages | Tips for Stockport Homes",
    metaDescription: "Practical advice for Stockport and Cheshire homeowners on preventing kitchen drain blockages. Discover which daily habits protect your pipes and when to call a professional.",
    excerpt: "Kitchen blockages account for the majority of call-outs we attend across Stockport and Cheshire. Most are entirely preventable with a few simple changes.",
    content: `Of every ten emergency calls we receive from households in Stockport, Cheadle and Bramhall, at least six involve a kitchen drain. Cooking fats, food scraps, coffee grounds and soap residue gradually coat pipe walls until water can no longer pass. The good news is that a handful of straightforward habits can keep your kitchen flowing freely for years.

## The Grease Problem in Stockport Kitchens

Fats, oils and grease, often shortened to FOG in the trade, are the number one cause of kitchen blockages nationwide. When warm, they pour easily down the plughole. Once they hit the cooler underground pipework beneath your Stockport property, they solidify against the walls. Each cooking session adds another layer, and in the clay soils around Edgeley and Heaton Chapel the surrounding ground temperature stays low enough to speed up this hardening process even in summer.

## Habits That Protect Your Pipes

### Collect Grease Separately

Rather than rinsing a frying pan straight into the sink, let the fat cool and scrape it into a container. Many Stockport households keep a small tub beside the hob for exactly this purpose. Once full, seal it and place it in your general waste bin. Stockport Council's recycling guidance confirms that cooking oil should not go down the drain.

### Fit a Mesh Strainer

A stainless-steel strainer over the plughole catches rice grains, vegetable peelings and small food scraps before they enter the pipe. It costs a few pounds from any hardware shop on the A6 through Hazel Grove or in the Merseyway centre and prevents the majority of blockages we attend.

### Scrape and Wipe Before Washing

Wipe plates with kitchen roll before placing them in the washing-up bowl. This removes the thin film of grease that dishwater alone spreads further into your drainage system.

### Flush With Hot Water Weekly

Boil a full kettle and pour it slowly down the kitchen drain once a week. The heat liquefies any grease beginning to form on the pipe walls and carries it away. This is particularly useful for homes in Marple and Romiley, where longer pipe runs from kitchen to main sewer give grease more surface area to cling to.

## A Natural Monthly Clean

For a deeper maintenance routine that avoids harsh chemicals:

1. Tip half a cup of bicarbonate of soda into the drain
2. Follow with half a cup of white vinegar
3. Allow the fizzing reaction to work for fifteen minutes
4. Flush thoroughly with a full kettle of boiling water

This dissolves organic deposits without corroding the copper or cast-iron fittings still found in many pre-war Stockport houses.

## What to Keep Out of the Drain

- **Coffee grounds** settle in pipe bends and form a dense sludge
- **Flour and pasta water** create a sticky paste that traps other debris
- **Eggshells** fragment into sharp pieces that snag passing waste
- **Rice** expands when wet and swells inside trap bends
- **Chemical cleaners** may shift a small blockage but corrode older pipework with regular use

## When Prevention Is Not Enough

If your kitchen drain slows despite good habits, there may be a structural issue such as root ingress from a neighbouring garden or a fractured joint in the underground run. A professional [CCTV drain survey](/services/cctv-drain-surveys/) reveals the true state of your pipes in high definition. Where grease has already built up thickly, our [drain jetting service](/services/drain-jetting/) strips it away with pressurised water, restoring full bore to the pipe.

For a [blocked kitchen sink](/services/blocked-drains/blocked-sink/) that will not clear with a plunger, our Stockport-based engineers normally resolve the issue within an hour of arrival. We serve homes from the Heatons through to the Peak District fringe.

Get in touch with ${BRAND.brandName} on ${BRAND.phoneFormatted} for practical advice or to book a visit, or [request a quote online](/contact/).`,
    author: "Stockport Plumber",
    publishDate: "2026-01-10",
    category: "Drain Maintenance",
    tags: ["kitchen drains", "prevention tips", "drain maintenance", "grease blockages"],
    readingTime: 6
  },
  {
    slug: "cctv-drain-survey-home-buyers",
    title: "Buying a Home in Stockport? Why a CCTV Drain Survey Is Essential",
    metaTitle: "Pre-Purchase CCTV Drain Survey | Stockport & Cheshire Buyers Guide",
    metaDescription: "Considering a property in Stockport or Cheshire? A pre-purchase CCTV drain survey can uncover hidden pipe damage and save you thousands. Read our local buyer's guide.",
    excerpt: "Stockport's housing stock ranges from Victorian mill-town terraces to modern estates. Whatever you are buying, a drain survey protects your investment.",
    content: `Stockport has one of the most varied property landscapes in the north-west. Streets of red-brick terraces in Edgeley and Reddish sit alongside interwar semis in Cheadle and new-build developments on the outskirts near Woodford. Each era of construction used different drainage materials and methods, and each brings its own set of potential problems. A CCTV drain survey before you exchange contracts can save you from inheriting an expensive underground surprise.

## What a CCTV Drain Survey Involves

An engineer feeds a small, high-definition camera on a flexible cable into the drainage system via manholes or rodding points. The footage streams in real time to a monitor, and every metre of pipe is recorded. At the end you receive a written report with annotated screenshots and, in most cases, the full video file. There is no digging, no disruption, and the entire process typically takes between one and two hours for a standard residential property.

## Why Conventional Surveys Miss Drainage Issues

A homebuyer's report or even a full building survey covers the visible structure above ground. Drains sit beneath soil, concrete and tarmac, so unless there is already an obvious symptom like subsidence or damp, a surveyor will not flag them. In Stockport, where the Rivers Mersey and Goyt converge and the water table can be high, hidden drain damage is more common than many buyers expect.

## Problems Our Cameras Reveal in Stockport Properties

### Victorian Clay Pipe Deterioration

Much of Stockport's terraced housing dates from the late 1800s, built to support the booming hat-making and cotton industries. The original salt-glazed clay pipes served well for a century, but joints have loosened, sections have cracked, and tree roots have found their way in. We routinely find root masses several metres long in properties along the tree-lined streets of Davenport and Cale Green.

### Pitch Fibre Collapse

Homes built in the 1950s and 1960s across Bredbury, Woodley and parts of Hazel Grove often used pitch fibre, a tar-impregnated material that was cheap and quick to install. Decades later, these pipes blister, delaminate and collapse inward. A CCTV survey clearly shows the deformation, and we can advise whether relining or replacement is the better option.

### Cheshire Clay Soil Movement

The heavy clay subsoil beneath much of the Stockport borough expands when wet and contracts when dry. This seasonal movement shifts pipe joints apart and cracks rigid connections. Properties at the base of slopes, particularly around Marple Bridge and Compstall near the Peak District boundary, are especially susceptible.

### Incorrect or Illegal Connections

Extensions, loft conversions and garage conversions sometimes introduce new plumbing that is incorrectly connected. Surface water drains joined to foul sewers, or waste pipes routed into soakaways, create compliance issues that become the new owner's responsibility.

## Typical Repair Costs Without a Survey

Buying without checking the drains is a gamble. Here are representative costs if problems emerge after completion:

- Clearing a root-infested drain: from £250
- Relining a cracked section: £1,500 to £3,000
- Excavating and replacing a collapsed run: £4,000 to £12,000
- Full drainage system replacement: £12,000 to £25,000 or more

A pre-purchase CCTV survey with ${BRAND.brandName} costs a fraction of these figures and arms you with evidence to negotiate or walk away.

## Negotiating With Confidence

If the survey reveals defects, you can request a price reduction equal to the estimated repair cost, ask the seller to carry out repairs before completion, or withdraw your offer entirely. Several of our Cheshire clients have recovered the cost of their survey many times over through successful renegotiation.

## Choosing the Right Survey Provider

Look for a company that offers HD footage you can keep, a clear written report with recommendations, and honest advice rather than pressure to buy unnecessary repairs. At ${BRAND.brandName}, we provide [pre-purchase drain surveys](/services/cctv-drain-surveys/pre-purchase-survey/) across [Stockport](/locations/stockport/) and surrounding areas including Bramhall, Poynton and Wilmslow. If repairs are needed, we also handle [pipe relining](/services/drain-repairs/pipe-relining/) and [excavation work](/services/drain-repairs/drain-excavation/).

Call ${BRAND.phoneFormatted} to arrange your survey, or [book online](/contact/). We can often attend within 48 hours.`,
    author: "Stockport Plumber",
    publishDate: "2026-01-05",
    category: "CCTV Surveys",
    tags: ["CCTV survey", "home buying", "property survey", "drain inspection"],
    readingTime: 7,
    featured: true
  },
  {
    slug: "emergency-drain-problems-what-to-do",
    title: "Drain Emergency in Stockport: What to Do While Waiting for Help",
    metaTitle: "Drain Emergency in Stockport | Steps to Take Before the Engineer Arrives",
    metaDescription: "Facing a sewage backup or flooding drain in Stockport? Follow these steps to protect your property and family while our Cheshire-based engineers are on their way.",
    excerpt: "Flooded drains demand fast action. Here is a practical checklist for Stockport homeowners dealing with a drainage crisis.",
    content: `Heavy rainfall on Stockport's clay soils, ageing combined sewers in the town centre, and the proximity of the River Mersey and Goyt all contribute to drainage emergencies that can strike with little warning. Whether it is a sewage backup in your Edgeley terrace or a flooded garden in Bramhall after a downpour, the steps you take in the first twenty minutes make a measurable difference to the damage your property sustains.

## Situations That Count as Emergencies

Not every slow drain is an emergency. The following circumstances do warrant immediate action and a call to a professional:

- Sewage rising through an indoor drain, toilet or manhole
- Water flooding into your home from external drains
- Two or more fixtures backing up at the same time
- A powerful sewage odour inside the property
- Waste water visible on your driveway, garden or the public footpath

Areas along the Mersey floodplain, including Portwood, Heaton Norris and Shaw Heath, are especially prone during intense rainfall when storm water overwhelms the combined sewer network.

## Immediate Steps for Stockport Residents

### Step 1: Stop Sending Water Down the Drains

Cease all water usage straight away. Do not flush toilets, run taps, or start the dishwasher. Every litre you add pushes the blockage further or forces waste back into your home. If you have a washing machine mid-cycle, pause it if you can.

### Step 2: Shut the Stopcock if Water Keeps Rising

Your internal stopcock is normally beneath the kitchen sink or in a cupboard near the front door. Turning it clockwise shuts off the mains supply to your house, which stops any automatic feed (such as a toilet cistern refilling) from adding to the problem.

### Step 3: Protect Belongings and Surfaces

Move anything you can carry away from the affected area. Lift small rugs, roll larger carpets back from wet zones, and place electronics on tables or shelves. Lay old towels across doorways to slow the spread of water into adjoining rooms.

### Step 4: Ventilate the Space

Sewage releases methane and hydrogen sulphide, both of which are harmful in enclosed spaces. Open windows and external doors. If the smell is overpowering, leave the property and wait outside until help arrives.

### Step 5: Keep Everyone Safe

Sewage carries bacteria including E. coli and other pathogens. Keep children and pets well away. If you must walk through contaminated water, wear wellington boots and rubber gloves, and wash your hands and forearms thoroughly with antibacterial soap afterwards.

### Step 6: Record Everything for Insurance

Once you and your family are safe, photograph the affected areas, note the time the problem started, and keep a list of damaged items. Home insurance policies in the SK postcode area typically cover escape of water, but you will need evidence to support your claim.

## Mistakes to Avoid

### Chemical Drain Cleaners

Pouring caustic liquid into a fully blocked system does nothing useful. The chemical sits in the standing water, generating heat and fumes, while the blockage remains untouched. It also creates a hazard for the engineer who arrives to clear the pipe.

### Lifting Manhole Covers Without Protection

The combined sewers beneath many Stockport streets carry both rainwater and foul waste. Lifting a cover without proper PPE exposes you to harmful gases and contaminated water. Leave manhole access to the professionals.

### Waiting to See if It Clears Itself

Blockages caused by fat buildup, root ingress or collapsed sections of pipe will not resolve on their own. Each hour of delay allows more water to accumulate and increases the cost of clean-up.

## What Happens When Our Team Arrives

Once you call ${BRAND.brandName}, we dispatch an engineer from our Stockport base. Our vans carry [CCTV cameras](/services/cctv-drain-surveys/), [high-pressure jetting rigs](/services/drain-jetting/), electro-mechanical cutters and a full set of rodding equipment. The engineer will:

1. Identify the safest access point
2. Locate the blockage with a push-rod camera
3. Clear the obstruction, usually with jetting
4. Verify the pipe is free-flowing with a second camera pass
5. Advise on any follow-up repairs or preventative measures

Our [emergency drain service](/services/emergency-drain-services/) covers the full Stockport borough, from [Reddish](/locations/reddish/) and Denton in the west to [Marple](/locations/marple/) and New Mills on the Peak District border. We also attend [flooding emergencies](/services/emergency-drain-services/flooding-emergency/) and [sewage emergencies](/services/emergency-drain-services/sewage-emergency/) around the clock.

Call ${BRAND.phoneFormatted} now for immediate help, or [submit an urgent request online](/contact/). We aim to reach any Stockport or Cheshire address within 60 to 90 minutes.`,
    author: "Stockport Plumber",
    publishDate: "2025-12-28",
    category: "Emergency Services",
    tags: ["emergency drains", "flooding", "sewage backup", "drain emergency"],
    readingTime: 7
  },
  {
    slug: "drain-jetting-vs-drain-rods",
    title: "Drain Jetting or Drain Rods: Which Works Best for Stockport Blockages?",
    metaTitle: "Drain Jetting vs Rods | Stockport Drainage Expert Advice",
    metaDescription: "Wondering whether to try drain rods or call for professional jetting? Our Stockport engineers explain which approach suits different blockages in Cheshire properties.",
    excerpt: "DIY drain rods have their place, but for most blockages in Stockport's older pipework, professional jetting delivers a longer-lasting result.",
    content: `Stockport's drainage network reflects the town's layered history. Mill-era clay pipes, post-war pitch fibre, 1980s plastic and modern PVC all coexist beneath the same streets. The method you choose to clear a blockage needs to match the pipe material, the nature of the obstruction, and the accessibility of the drain. Here we compare traditional drain rods with high-pressure water jetting so you can make an informed decision.

## How Drain Rods Work

Drain rods are metre-long flexible poles that screw together end to end. You feed them into the pipe through a manhole or open rodding eye and push towards the blockage. A rubber plunger or corkscrew attachment on the tip attempts to break up or dislodge the obstruction. Sets are available from most Stockport hardware shops and the DIY sheds along the A6 corridor.

### Where Rods Are Useful

- Soft blockages close to the access point, such as a clump of wet wipes snagged a metre or two into the pipe
- Situations where you need a temporary fix while waiting for a professional
- Accessible manholes in rear gardens or driveways

### Where Rods Fall Short

- They push debris further downstream rather than removing it, which can turn a partial blockage into a complete one
- They cannot effectively clear fat and grease that coats pipe walls
- In Stockport's narrow Victorian clay pipes, rods can crack fragile joints and dislodge collar connections
- Their effective range is roughly 15 metres, far short of many main-drain runs beneath terrace rows in Reddish and Heaton Norris

## How Professional Jetting Works

A petrol or diesel-powered pump drives water through a narrow-bore hose at pressures of up to 4,000 PSI. The nozzle at the tip has forward-facing jets that slice through blockages and rear-facing jets that propel the hose forward and flush debris back towards the access point. The result is a pipe that is not merely unblocked but thoroughly cleaned.

### Advantages for Stockport Properties

- **Root cutting**: Many Stockport gardens contain mature trees whose roots penetrate old clay joints. Specialised root-cutting nozzles sever these roots without excavation, a common requirement along the wooded stretches near the Goyt Valley and Etherow Country Park.
- **Grease stripping**: The Cheshire clay keeps underground pipes cool, accelerating grease solidification. Jetting is the only practical way to remove a thick grease lining from a long domestic run.
- **Extended reach**: Jetting hoses routinely clear pipes 50 to 100 metres from the access point, essential in Marple and Compstall where properties sometimes sit far from the public sewer.
- **Pipe-wall cleaning**: By removing all buildup, jetting restores the full bore of the pipe and significantly delays the next blockage.

### Limitations of Jetting

- It requires professional equipment and trained operators
- It is not suitable for badly damaged or collapsed pipes, where the water pressure could worsen the break
- A reliable water supply is needed on site, although our vans carry their own tanks

## Which Method Suits Your Situation?

| Scenario | Rods | Jetting |
|---|---|---|
| Wipes or paper blockage near manhole | Suitable | Overkill |
| Grease buildup in kitchen run | Ineffective | Ideal |
| Tree root ingress | Ineffective | Effective with root cutter |
| Recurring blockages | Temporary fix only | Long-term solution |
| Commercial kitchen waste | Inadequate | Essential |
| Preventative maintenance | Not applicable | Recommended annually |

## The Approach Our Stockport Engineers Take

When you contact ${BRAND.brandName} about a blocked drain, we follow a consistent process:

1. **Assess access** - locate manholes, rodding eyes and gully traps around the property
2. **Camera survey** - feed a [CCTV camera](/services/cctv-drain-surveys/) into the pipe to identify the blockage type and location
3. **Select the nozzle** - match the jetting head to the obstruction (root cutter, de-greasing nozzle, spinning head, etc.)
4. **Clear and flush** - remove the blockage and flush the pipe clean
5. **Verify** - a second camera pass confirms the pipe is clear and highlights any structural issues that may need [repair](/services/drain-repairs/)
6. **Advise** - explain what caused the problem and recommend steps to prevent it recurring

## Cost Perspective

A set of drain rods costs around £25 to £50. If they solve the problem, that is good value. However, if they push the blockage deeper, crack a pipe joint, or simply fail to shift a fat plug, you then pay for professional jetting anyway, potentially at emergency rates. Many of our Stockport customers find that a single professional jetting visit costs less than repeated DIY attempts that only provide temporary relief.

For dependable [drain jetting across Stockport](/locations/stockport/drain-jetting/) and Cheshire, call ${BRAND.brandName} on ${BRAND.phoneFormatted} or [get a quote online](/contact/). We also serve [Cheadle](/locations/cheadle/), [Hazel Grove](/locations/hazel-grove/), [Manchester](/locations/manchester/) and the wider region.`,
    author: "Stockport Plumber",
    publishDate: "2025-12-20",
    category: "Drain Services",
    tags: ["drain jetting", "drain rods", "blocked drains", "drain clearing"],
    readingTime: 7
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category);
  return [...new Set(categories)];
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

// Blog posts related to each service - used for cross-linking on service pages
export const SERVICE_BLOG_POSTS: Record<string, string[]> = {
  "blocked-drains": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "drain-unblocking": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "cctv-drain-surveys": ["cctv-drain-survey-home-buyers", "signs-of-blocked-drain"],
  "drain-jetting": ["drain-jetting-vs-drain-rods", "prevent-blocked-drains-kitchen"],
  "emergency-drain-services": ["emergency-drain-problems-what-to-do", "signs-of-blocked-drain"],
  "drain-repairs": ["cctv-drain-survey-home-buyers", "drain-jetting-vs-drain-rods"],
};

export function getRelatedBlogPosts(serviceSlug: string): BlogPost[] {
  const relatedSlugs = SERVICE_BLOG_POSTS[serviceSlug] || [];
  return relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
