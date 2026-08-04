export const chapters = [
  {
    id: 1,
    section: "Core — Section A",
    title: "Relations and Functions",
    marks: "~4 (Q2 slot) + 2 in Q1",
    icon: "f∘g",
    concept: "A relation becomes a function when every input maps to exactly one output. This chapter covers checking one-one (injective) and onto (surjective) behaviour, composite functions, and finding inverses.",
    workingExample: {
      title: "Composite functions",
      body: "If f: ℝ→ℝ, f(x) = x³ and g: ℝ→ℝ, g(x) = 2x²+1, find f∘g(x) and g∘f(x).",
      steps: [
        "f∘g(x) means f(g(x)): substitute g(x) into f → f(2x²+1) = (2x²+1)³",
        "g∘f(x) means g(f(x)): substitute f(x) into g → g(x³) = 2(x³)²+1 = 2x⁶+1",
        "Note they're different — composition is generally not commutative"
      ]
    },
    tricks: [
      "One-one check: assume f(x₁)=f(x₂); if the algebra forces x₁=x₂, it's one-one — no calculus needed.",
      "Onto check: solve y=f(x) for x; if a valid x exists for every y in the codomain, it's onto.",
      "To find an inverse, swap x and y in y=f(x), then solve for y again.",
      "f∘g ≠ g∘f in general — always compute in the order written, innermost function first."
    ],
    practice: [
      {
        q: "Show f: A→A where A = ℝ − {2}, f(x) = (x+1)/(x−2) is one-one, and find its inverse.",
        a: "One-one: f(x₁)=f(x₂) ⇒ expand and simplify ⇒ 3x₂=3x₁ ⇒ x₁=x₂. Inverse: y=(x+1)/(x−2) ⇒ x=(2y+1)/(y−1). So f⁻¹(x) = (2x+1)/(x−1)."
      },
      {
        q: "If f(x) = 2x+3 and g(x) = x−1, find (f∘g)(x).",
        a: "f(g(x)) = f(x−1) = 2(x−1)+3 = 2x+1."
      }
    ]
  },
  {
    id: 2,
    section: "Core — Section A",
    title: "Inverse Trigonometric Functions",
    marks: "~4 (Q3 slot) + 2 in Q1",
    icon: "θ",
    concept: "Inverse trig functions undo the trig ratios, restricted to a principal value range so they're genuine functions. Mostly algebraic manipulation using identities.",
    workingExample: {
      title: "Solving inverse trig equations",
      body: "Solve: sin(2 tan⁻¹x) = 1",
      steps: [
        "Let θ = tan⁻¹x, so tan θ = x, and the equation becomes sin(2θ) = 1",
        "sin(2θ) = 1 ⇒ 2θ = π/2 ⇒ θ = π/4",
        "So tan θ = tan(π/4) = 1",
        "Therefore x = 1"
      ]
    },
    tricks: [
      "Memorise sin⁻¹x + cos⁻¹x = π/2 and tan⁻¹x + cot⁻¹x = π/2 — instant simplifiers.",
      "tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) only holds cleanly when xy<1 — check before applying.",
      "For sin(2tan⁻¹x) or cos(2tan⁻¹x): let θ=tan⁻¹x, draw a right triangle, convert to sin/cos of 2θ.",
      "Always sanity-check your final answer lies inside the function's principal value range."
    ],
    practice: [
      {
        q: "Solve for x: tan⁻¹((x−1)/(x+1)) = (1/2)tan⁻¹x (x > 0)",
        a: "Rewrite the left side as tan⁻¹x − π/4, then solve tan⁻¹x − π/4 = (1/2)tan⁻¹x. The well-known result for this classic problem is x = 1/√3."
      },
      {
        q: "Evaluate: sin⁻¹(1/2) + cos⁻¹(1/2)",
        a: "Using sin⁻¹x + cos⁻¹x = π/2 for any valid x, the answer is simply π/2."
      }
    ]
  },
  {
    id: 3,
    section: "Core — Section A",
    title: "Matrices",
    marks: "~6 (system-of-equations Q) + 2 in Q1",
    icon: "[M]",
    concept: "Matrices organise numbers into rows and columns so systems of equations can be handled as single algebraic objects. The matrix method (AX=B, X=A⁻¹B) is the highest-value skill here.",
    workingExample: {
      title: "Matrix method for systems",
      body: "Solve using the matrix method: 1/x + 1/y + 1/z = 9,  2/x + 5/y + 7/z = 52,  2/x + 1/y + 1/z = 0",
      steps: [
        "Substitute u=1/x, v=1/y, w=1/z: u+v+w=9, 2u+5v+7w=52, 2u+v+w=0",
        "This is now AX=B, solvable via X = A⁻¹B",
        "Subtracting equation 1 from equation 3 eliminates v and w: u = −9",
        "Substituting back and solving the resulting 2×2 system gives v = 28, w = −10",
        "So x = 1/u = −1/9,  y = 1/v = 1/28,  z = 1/w = −1/10"
      ]
    },
    tricks: [
      "If a system has repeating patterns like 1/x, 1/y, 1/z — substitute u=1/x etc. first to make it linear.",
      "2×2 inverse shortcut: swap the diagonal entries, negate the off-diagonal ones, divide by the determinant.",
      "A matrix is invertible only if det(A)≠0 — check this before hunting for A⁻¹.",
      "(A+Aᵀ) is always symmetric, (A−Aᵀ) is always skew-symmetric — instant answer for 'show symmetric' questions."
    ],
    practice: [
      {
        q: "If A = [[2,4],[3,5]], show that (A + Aᵀ) is a symmetric matrix.",
        a: "Aᵀ = [[2,3],[4,5]]. A+Aᵀ = [[4,7],[7,10]]. (A+Aᵀ)ᵀ = [[4,7],[7,10]] — identical, so symmetric."
      },
      {
        q: "Find the inverse of A = [[2,1],[1,1]] using the adjoint method.",
        a: "det(A) = 2(1)−1(1) = 1. adj(A) = [[1,−1],[−1,2]]. A⁻¹ = [[1,−1],[−1,2]]."
      }
    ]
  },
  {
    id: 4,
    section: "Core — Section A",
    title: "Determinants",
    marks: "~4 (Q4 slot) + 2 in Q1",
    icon: "|A|",
    concept: "Determinants are a single number computed from a square matrix that captures whether a system has a unique solution, or the area/volume of a figure defined by points/vectors.",
    workingExample: {
      title: "Area of triangle via determinants",
      body: "Using determinants, find k if the area of the triangle with vertices (−2,0), (0,4), (0,k) is 4 square units.",
      steps: [
        "Area formula: Area = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|",
        "Substitute: Area = ½|(−2)(4−k)| = |k−4|",
        "Set |k−4| = 4 ⇒ k−4 = 4 or k−4 = −4",
        "So k = 8 or k = 0"
      ]
    },
    tricks: [
      "Two identical rows or columns ⇒ determinant is 0. Spot this before expanding anything.",
      "Row/column operations (Rᵢ→Rᵢ+kRⱼ) don't change the determinant's value — use them to create zeros first.",
      "Area-of-triangle-via-determinant can come out negative — always take the absolute value.",
      "If the 'area' determinant for three points equals zero, the points are collinear — a fast built-in test."
    ],
    practice: [
      {
        q: "Evaluate the determinant with rows [2,3] and [4,1].",
        a: "det = (2)(1) − (3)(4) = 2 − 12 = −10."
      },
      {
        q: "Without expanding, explain why a determinant with two identical rows equals zero.",
        a: "Swapping two identical rows leaves the matrix unchanged but flips the determinant's sign — so det = −det, forcing det = 0."
      }
    ]
  },
  {
    id: 5,
    section: "Core — Section A",
    title: "Continuity and Differentiability",
    marks: "~8 across two 4-mark Qs",
    icon: "lim",
    concept: "A function is continuous at a point if its value there matches the limit approaching it from both sides. Differentiability is a stronger condition: the slope must be well-defined. Differentiability always implies continuity, never the reverse.",
    workingExample: {
      title: "Testing continuity",
      body: "Check continuity of f(x) = (x² − 4)/(x − 2) for x ≠ 2, and f(2) = 5.",
      steps: [
        "Simplify for x ≠ 2: (x²−4)/(x−2) = x + 2",
        "Find the limit as x → 2: lim = 4",
        "Compare to the defined value: f(2) = 5",
        "Since limit (4) ≠ f(2) (5), f is discontinuous at x = 2"
      ]
    },
    tricks: [
      "To check continuity at a point: compute LHL, RHL, and f(a) separately — never assume they match.",
      "Differentiable always implies continuous, but not the reverse — corners and cusps are the giveaway.",
      "For |x|-type or piecewise functions, always test right at the point where the definition switches.",
      "Chain rule reminder: differentiate the outer function first, then multiply by the derivative of the inner one."
    ],
    practice: [
      {
        q: "Differentiate y = sin(x²) using the chain rule.",
        a: "dy/dx = cos(x²)·2x = 2x·cos(x²)"
      },
      {
        q: "Is f(x) = |x| differentiable at x = 0?",
        a: "No — left-hand derivative is −1, right-hand is +1. Continuous but not differentiable at 0."
      }
    ]
  },
  {
    id: 6,
    section: "Core — Section A",
    title: "Applications of Derivatives",
    marks: "~10 (rate-of-change + maxima/minima)",
    icon: "f′",
    concept: "Derivatives measure rate of change. Tangents/normals, deciding where a function rises or falls, and locating maxima/minima — plus related-rates problems.",
    workingExample: {
      title: "Related rates: the ladder pattern",
      body: "A 13m ladder leans against a wall. The bottom is pulled away at 2 m/s. How fast is the height on the wall decreasing when the foot is 5m from the wall?",
      steps: [
        "Set up: x² + y² = 169",
        "Differentiate w.r.t. time: 2x(dx/dt) + 2y(dy/dt) = 0",
        "At x=5: y = 12. dx/dt = 2. Solve: 5(2) + 12(dy/dt) = 0",
        "dy/dt = −10/12 = −5/6 m/s"
      ]
    },
    tricks: [
      "Increasing where f'(x)>0, decreasing where f'(x)<0 — just factor f'(x) and solve the sign inequality.",
      "Maxima/minima: f'(x)=0 gives critical points; f''(x)<0 ⇒ max, f''(x)>0 ⇒ min.",
      "Related-rates problems (ladder, cone, balloon): write the connecting equation first, then differentiate w.r.t. time.",
      "Optimisation word problems: use the constraint to reduce everything to ONE variable before differentiating."
    ],
    practice: [
      {
        q: "Find the intervals where f(x) = 2x³ − 15x² + 36x + 1 is increasing.",
        a: "f'(x) = 6(x−2)(x−3) > 0 when x<2 or x>3. Decreasing for 2<x<3."
      },
      {
        q: "A closed box with square base has volume 4096 cm³. Find dimensions minimising surface area.",
        a: "x²h=4096, S=2x²+16384/x. dS/dx=0 ⇒ x=16, h=16 — a cube of side 16 cm."
      }
    ]
  },
  {
    id: 7,
    section: "Core — Section A",
    title: "Indefinite Integrals",
    marks: "~4-6",
    icon: "∫dx",
    concept: "Indefinite integration reverses differentiation. Substitution (spotting a function and its derivative together) and standard forms are the core tools.",
    workingExample: {
      title: "Integration by substitution",
      body: "Evaluate: ∫ x(1−x²)/(1+x⁴) dx",
      steps: [
        "Let t = x², dt = 2x dx",
        "Rewrite: ½∫[1/(1+t²) − t/(1+t²)] dt",
        "= ½[tan⁻¹t − ½ ln(1+t²)] + C",
        "Substitute back: ½ tan⁻¹(x²) − ¼ ln(1+x⁴) + C"
      ]
    },
    tricks: [
      "Spot a function and its derivative sitting together in the integrand ⇒ that's your substitution cue.",
      "ILATE priority for integration by parts: Inverse, Log, Algebraic, Trig, Exponential — pick 'u' in that order.",
      "sec²x and 1+tan²x are identical — swapping between them often unlocks a stuck integral.",
      "Never forget '+ C' — examiners deduct marks for a missing constant of integration."
    ],
    practice: [
      {
        q: "Evaluate: ∫ x·e^(x²) dx",
        a: "Let t=x². ½∫e^t dt = ½e^(x²) + C."
      },
      {
        q: "Evaluate: ∫ sec²x/(1+tan²x) dx",
        a: "1+tan²x = sec²x, so the integrand is 1. Integral = x + C."
      }
    ]
  },
  {
    id: 8,
    section: "Core — Section A",
    title: "Definite Integrals & Applications",
    marks: "~6",
    icon: "∫ₐᵇ",
    concept: "Definite integrals give a numeric value between two limits. The King's Rule property ∫₀ᵃf(x)dx = ∫₀ᵃf(a−x)dx turns intimidating integrals into solvable ones.",
    workingExample: {
      title: "King's Rule for definite integrals",
      body: "Evaluate: ∫₀^π [x tanx / (secx + tanx)] dx",
      steps: [
        "Simplify: tanx/(secx+tanx) = sinx/(1+sinx)",
        "I = ∫₀^π x·sinx/(1+sinx) dx. Apply King's rule with (π−x)",
        "2I = π·J where J = ∫₀^π sinx/(1+sinx)dx = π − 2",
        "So I = π(π−2)/2"
      ]
    },
    tricks: [
      "King's Rule: ∫₀ᵃf(x)dx = ∫₀ᵃf(a−x)dx — the single most powerful trick for scary-looking definite integrals.",
      "Even function on [−a,a]: integral = 2∫₀ᵃ. Odd function: integral = 0. Check symmetry before grinding through algebra.",
      "Expressions like sinx/(1+sinx) often simplify beautifully after dividing by cosx or rationalizing.",
      "No '+C' needed for definite integrals — just substitute the limits at the very end."
    ],
    practice: [
      {
        q: "Evaluate: ∫₀¹ x(1−x)⁴ dx",
        a: "Using the Beta shortcut m!n!/(m+n+1)! with m=1,n=4: = 24/720 = 1/30."
      },
      {
        q: "Evaluate: ∫₀^(π/2) sin²x dx",
        a: "Using sin²x=(1−cos2x)/2: = π/4."
      }
    ]
  },
  {
    id: 9,
    section: "Core — Section A",
    title: "Differential Equations",
    marks: "~4 + 2 in Q1",
    icon: "dy/dx",
    concept: "A differential equation relates a function to its derivatives. Solving one means finding the family of functions satisfying it — separate variables, or substitute when x,y appear as a combination like (x+y).",
    workingExample: {
      title: "Substitution method: v=x+y",
      body: "Solve: dy/dx = (x+y+1)/(x+y−1)",
      steps: [
        "Let v = x+y, so dy/dx = dv/dx − 1",
        "Substitute: dv/dx = 2v/(v−1)",
        "Separate and integrate: v/2 − ½ ln|v| = x + C",
        "Substitute back v=x+y: y − x − ln|x+y| = C′"
      ]
    },
    tricks: [
      "If x and y only ever appear together as (x+y), substitute v=x+y to make the equation separable.",
      "Variable separable method: get all y-terms with dy on one side, all x-terms with dx on the other, then integrate both sides.",
      "Linear DE dy/dx+Py=Q: the integrating factor is always e^∫Pdx — memorise this cold.",
      "Order = highest derivative present. Degree = the power of that highest derivative."
    ],
    practice: [
      {
        q: "Solve: dy/dx = y/x",
        a: "Separate: dy/y=dx/x. Integrate: y = kx — a family of lines through the origin."
      },
      {
        q: "What's the order and degree of (d²y/dx²)³ + dy/dx = x?",
        a: "Order 2, degree 3."
      }
    ]
  },
  {
    id: 10,
    section: "Core — Section A",
    title: "Probability",
    marks: "~10 (two questions, incl. Bayes')",
    icon: "P",
    concept: "Builds on basic probability with conditional probability, independence, Bayes' theorem, and probability distributions including binomial.",
    workingExample: {
      title: "Bayes' theorem: the box pattern",
      body: "Three boxes: A has 2 gold+1 silver, B has 1 gold+2 silver, C has 3 silver. A box is picked at random and a coin drawn is silver. Find P(from Box C).",
      steps: [
        "P(A)=P(B)=P(C)=1/3",
        "P(silver|A)=1/3, P(silver|B)=2/3, P(silver|C)=1",
        "P(silver) = 1/9+2/9+3/9 = 2/3",
        "P(C|silver) = (1/3)/(2/3) = 1/2"
      ]
    },
    tricks: [
      "'At least one' problems: compute 1 − P(none) instead of adding multiple cases — almost always faster.",
      "Bayes' 'box/bag' problems: build a mini table of P(box)×P(event|box) for every box before dividing.",
      "Independent (P(A∩B)=P(A)P(B)) and mutually exclusive (P(A∩B)=0) are NOT the same thing — don't mix them up.",
      "Binomial distribution: mean=np, variance=npq — two equations, two unknowns if both are given."
    ],
    practice: [
      {
        q: "Two dice are thrown. Find P(sum = 7 | at least one die shows a 4).",
        a: "11 outcomes have at least one 4; 2 of these sum to 7. P = 2/11."
      },
      {
        q: "A coin is tossed 5 times. Find P(exactly 3 heads).",
        a: "C(5,3)(0.5)⁵ = 10/32 = 5/16."
      }
    ]
  },
  {
    id: 11,
    section: "Science — Section B",
    title: "Vectors",
    marks: "~6-8 of the 20-mark section",
    icon: "v⃗",
    concept: "Vectors have magnitude and direction. Covers vector algebra, dot product (angles, projections), cross product (perpendicularity, area), and scalar triple product (volume).",
    workingExample: {
      title: "Perpendicular vectors",
      body: "If a⃗ and b⃗ are perpendicular, |a⃗+b⃗|=13 and |a⃗|=5, find |b⃗|.",
      steps: [
        "Since a⃗⊥b⃗, a⃗·b⃗ = 0",
        "|a⃗+b⃗|² = |a⃗|²+|b⃗|²",
        "169 = 25 + |b⃗|²",
        "|b⃗| = 12"
      ]
    },
    tricks: [
      "Perpendicular vectors ⇒ dot product = 0. Parallel vectors ⇒ cross product = 0. These two checks solve most vector problems instantly.",
      "|a⃗+b⃗|² = |a⃗|²+|b⃗|²+2(a⃗·b⃗) — expand this way whenever sums and magnitudes are involved.",
      "Unit vector = vector ÷ its own magnitude — compute the magnitude first, always.",
      "a⃗·(b⃗×c⃗)=0 means the three vectors are coplanar — a quick test worth remembering."
    ],
    practice: [
      {
        q: "Find the unit vector in the direction of a⃗ = (4,−3,0).",
        a: "|a⃗|=5. Unit vector = (4/5, −3/5, 0)."
      },
      {
        q: "Find a⃗×b⃗ for a⃗=(1,0,0), b⃗=(0,1,0).",
        a: "(0,0,1) — the k̂ direction."
      }
    ]
  },
  {
    id: 12,
    section: "Science — Section B",
    title: "Three-Dimensional Geometry",
    marks: "~8-10 of the 20-mark section",
    icon: "xyz",
    concept: "Extends vectors into 3D geometry: equations of lines/planes, angles, and distances. Most problems reduce to comparing direction ratios via the dot product.",
    workingExample: {
      title: "Angle between lines",
      body: "Find the angle between the lines 2x=3y=−z and 6x=−y=−4z.",
      steps: [
        "Direction ratios of line 1: (3,2,−6). Line 2: (2,−12,−3)",
        "cos θ = |(3)(2)+(2)(−12)+(−6)(−3)| / (√49·√157)",
        "= |6−24+18|/... = 0",
        "θ = 90° — the lines are perpendicular"
      ]
    },
    tricks: [
      "Angle between two lines only needs their direction ratios — you never need actual points on the line.",
      "Perpendicular lines: dot product of direction ratios = 0. Parallel lines: direction ratios are proportional.",
      "Distance from point to plane ax+by+cz+d=0: use |ax₁+by₁+cz₁+d|/√(a²+b²+c²) directly — no derivation needed.",
      "Equation of a plane through 3 points: set up the determinant form directly — faster than solving simultaneous equations."
    ],
    practice: [
      {
        q: "Find the direction cosines of the line joining (1,2,3) and (4,6,3).",
        a: "Direction ratios (3,4,0), magnitude 5. Direction cosines: (3/5,4/5,0)."
      },
      {
        q: "Find the distance of (2,3,−5) from the plane x+2y−2z−9=0.",
        a: "|2+6+10−9|/3 = 3."
      }
    ]
  },
  {
    id: 13,
    section: "Science — Section B",
    title: "Application of Integrals",
    marks: "~6 of the 20-mark section",
    icon: "∫∫",
    concept: "Uses definite integrals to find area enclosed between curves — sketch first, find intersections, integrate the difference.",
    workingExample: {
      title: "Area between curves",
      body: "Find the area bounded by x² = y and x + y = 2.",
      steps: [
        "Intersections: x²+x−2=0 ⇒ x=−2 or x=1",
        "Line lies above parabola between these",
        "Area = ∫₋₂¹ [(2−x)−x²] dx = 7/6 − (−10/3)",
        "= 9/2 square units"
      ]
    },
    tricks: [
      "Always sketch a rough graph first — knowing which curve sits on top tells you what to subtract from what.",
      "Find intersection points by equating the two curve equations — these become your integration limits.",
      "Area = ∫(upper curve − lower curve)dx across the interval — always check which function is bigger first.",
      "If the region is easier to describe with horizontal strips, integrate with respect to y instead of forcing x."
    ],
    practice: [
      {
        q: "Find the area bounded by y=x² and y=x.",
        a: "Between x=0,1: Area = ∫(x−x²)dx = 1/6."
      },
      {
        q: "Set up the integral for the area under y=sinx from 0 to π.",
        a: "∫₀^π sinx dx (evaluates to 2)."
      }
    ]
  },
  {
    id: 14,
    section: "Commerce — Section C",
    title: "Numerical Applications",
    marks: "~8-10 of the 20-mark section",
    icon: "₹",
    concept: "Applies calculus and algebra to business problems: cost/revenue/profit, break-even analysis, and marginal cost.",
    workingExample: {
      title: "Break-even analysis",
      body: "Fixed cost ₹24,000. Selling price ₹8/unit, variable cost 25% of revenue. Find break-even point.",
      steps: [
        "Revenue R(x)=8x. Variable cost=2x. Cost C(x)=24000+2x",
        "Break-even: 8x = 24000+2x",
        "6x=24000 ⇒ x=4000 units",
        "Revenue at break-even = ₹32,000"
      ]
    },
    tricks: [
      "Break-even point: set Revenue = Cost and solve for x — no calculus required.",
      "'Marginal' always means 'differentiate' — Marginal Cost = dC/dx, Marginal Revenue = dR/dx.",
      "Average Cost = Total Cost ÷ x. To minimise it, differentiate AC and set it to zero.",
      "Maximum profit occurs exactly where Marginal Revenue = Marginal Cost."
    ],
    practice: [
      {
        q: "C(x)=x³/3−45x²+900x+36. Find marginal cost when x=10.",
        a: "MC=x²−90x+900. At x=10: MC=100."
      },
      {
        q: "If AC=2x+5+18/x, find the Marginal Cost function.",
        a: "C=2x²+5x+18. MC=4x+5."
      }
    ]
  },
  {
    id: 15,
    section: "Commerce — Section C",
    title: "Linear Regression",
    marks: "~6-10 of the 20-mark section",
    icon: "r",
    concept: "Regression finds the best-fit line describing how one variable changes with another, using means, standard deviations, and correlation coefficient r.",
    workingExample: {
      title: "Regression equation",
      body: "Given x̄=18, ȳ=100, σₓ=14, σᵧ=20, r=0.8, find regression equation of y on x.",
      steps: [
        "b_yx = r×(σᵧ/σₓ) = 0.8×(20/14) = 8/7",
        "y − 100 = (8/7)(x − 18)",
        "y = (8/7)x + 556/7"
      ]
    },
    tricks: [
      "b_yx = r×(σᵧ/σₓ) and b_xy = r×(σₓ/σᵧ) — memorise which ratio pairs with which line.",
      "The regression line of y on x always passes through (x̄, ȳ) — use y−ȳ = b_yx(x−x̄) directly.",
      "r² = b_yx × b_xy — a fast way to recover r if both regression coefficients are given.",
      "r always lies between −1 and 1 — if your computed r falls outside that, you've made an arithmetic slip."
    ],
    practice: [
      {
        q: "If b_yx=1.2 and b_xy=0.8, find r.",
        a: "r=±√(1.2×0.8)≈±0.98; positive slopes ⇒ r≈0.98."
      },
      {
        q: "What does r=0 tell you about the two regression lines?",
        a: "They're perpendicular — one horizontal, one vertical."
      }
    ]
  },
  {
    id: 16,
    section: "Science/Commerce",
    title: "Linear Programming",
    marks: "~4-6 where offered",
    icon: "Z",
    concept: "Linear Programming finds the best value of a linear objective subject to linear constraints. Check every corner point of the feasible region.",
    workingExample: {
      title: "Maximisation problem",
      body: "A carpenter has 90,80,50 running feet of teak/plywood/rosewood. Product A needs 2,1,1; B needs 1,2,1. A sells ₹48, B sells ₹40. Maximise income.",
      steps: [
        "Constraints: 2x+y≤90, x+2y≤80, x+y≤50, x,y≥0",
        "Corners: (0,0),(45,0),(40,10),(20,30),(0,40)",
        "Z=48x+40y values: 0,2160,2320,2160,1600",
        "Max Z=2320 at (40,10)"
      ]
    },
    tricks: [
      "The optimal value of a linear objective ALWAYS occurs at a corner of the feasible region — never check the interior.",
      "Shade the feasible region by testing (0,0) in each inequality — if the origin satisfies it, shade toward the origin.",
      "List every corner point, plug each into Z, then just pick the largest/smallest — no extra cleverness needed.",
      "Don't forget x≥0, y≥0 — they usually contribute two of your corner points sitting right on the axes."
    ],
    practice: [
      {
        q: "Set up: chairs earn ₹20, tables earn ₹30. Chair=2hrs, table=3hrs, 12hrs available.",
        a: "Maximise Z=20x+30y s.t. 2x+3y≤12, x,y≥0."
      },
      {
        q: "Why does the optimum always occur at a corner point?",
        a: "A linear objective has no interior max/min — moving in the improving direction always pushes to the boundary, and ultimately a corner."
      }
    ]
  }
];

export const mindsetTips = [
  "Every mathematician was once confused by exactly this topic. Confusion is the first step, not a stop sign.",
  "You don't need to love math to get good at it — you need reps. The passion usually shows up after the confidence does.",
  "A wrong answer isn't failure, it's data. Find the one step that broke, fix that link, move on.",
  "Exams reward patterns, not genius. Learn the 3–4 tricks per chapter and most 'hard' questions start looking familiar.",
  "The fastest way to stop fearing a topic is one ugly, imperfect first attempt at it. Perfection can wait."
];

export const patternNotes = [
  {
    label: "Total paper",
    value: "100 marks",
    detail: "Confirmed from the 2017–2020 papers: 3 hours, Section A + one of Section B or C."
  },
  {
    label: "Section A (compulsory)",
    value: "80 marks",
    detail: "Question 1 is 10 sub-parts × 2 marks (20 marks, rapid mixed-topic). Then single-topic questions worth 4 marks each, then a few worth 6 marks each."
  },
  {
    label: "Section B or C (choice)",
    value: "20 marks",
    detail: "Section B = Vectors + 3D Geometry + Application of Integrals (Science stream). Section C = Numerical Applications + Regression + LPP (Commerce stream)."
  },
  {
    label: "Recurring patterns found",
    value: "Confirmed",
    detail: "Rate-of-change 'ladder against a wall' problems, Bayes' theorem 'bag of balls/coins' problems, and 'system of 3 equations via matrices' all reappear across the years."
  }
];

export const predictedQuestions = [
  {
    section: "Likely Question-1 style (2 marks each)",
    items: [
      {
        q: "If f: ℝ→ℝ, f(x)=3x−2 and g: ℝ→ℝ, g(x)=x²+1, find f∘g(x).",
        marks: "2",
        steps: [
          "f∘g(x) = f(g(x)) = f(x²+1)",
          "= 3(x²+1) − 2",
          "= 3x² + 1"
        ]
      },
      {
        q: "Solve: cos(2 sin⁻¹x) = 1/2",
        marks: "2",
        steps: [
          "Let θ = sin⁻¹x, so the equation becomes cos(2θ) = 1/2",
          "Use cos(2θ) = 1−2sin²θ = 1−2x²",
          "1−2x² = 1/2 ⇒ 2x² = 1/2 ⇒ x² = 1/4",
          "x = ±1/2"
        ]
      },
      {
        q: "Find the determinant: |2 3; 4 1|",
        marks: "2",
        steps: [
          "det = (2)(1) − (3)(4)",
          "= 2 − 12",
          "= −10"
        ]
      }
    ]
  },
  {
    section: "Section A — likely 4/6 mark questions",
    items: [
      {
        q: "Solve using the matrix method: 1/x+1/y+1/z=6, 1/x−1/y+1/z=2, 1/x+1/y−1/z=0",
        marks: "6",
        steps: [
          "Substitute u=1/x, v=1/y, w=1/z: u+v+w=6, u−v+w=2, u+v−w=0",
          "Subtract eq2 from eq1: 2v=4 ⇒ v=2",
          "From eq3: u+2−w=0 ⇒ u−w=−2. From eq1: u+2+w=6 ⇒ u+w=4",
          "Adding these: 2u=2 ⇒ u=1, then w=3",
          "So x=1/u=1, y=1/v=1/2, z=1/w=1/3"
        ]
      },
      {
        q: "Using properties of determinants, prove |1 a a²; 1 b b²; 1 c c²| = (a−b)(b−c)(c−a)",
        marks: "4",
        steps: [
          "Apply R₁→R₁−R₂ and R₂→R₂−R₃ to create zeros in the first column",
          "This factors out (a−b) from row 1 and (b−c) from row 2",
          "Expanding the simplified determinant along column 1 leaves one 2×2 determinant",
          "That evaluates out to give the full result (a−b)(b−c)(c−a) after tracking signs"
        ]
      },
      {
        q: "Find k so that f(x) = kx² for x≤2, and f(x)=3 for x>2, is continuous at x=2.",
        marks: "4",
        steps: [
          "For continuity: lim(x→2⁻) f(x) = f(2) = lim(x→2⁺) f(x)",
          "f(2) = k(2)² = 4k (x=2 falls in the x≤2 branch)",
          "The right-hand limit is 3 (constant branch)",
          "Set 4k = 3 ⇒ k = 3/4"
        ]
      },
      {
        q: "An open cylindrical can (no top) must have volume 3π m³. Find the radius that minimises the total surface area.",
        marks: "6",
        steps: [
          "Volume: V = πr²h = 3π ⇒ h = 3/r²",
          "Surface area (base + curved side, no top): S = πr² + 2πrh = πr² + 6π/r",
          "dS/dr = 2πr − 6π/r². Set to 0: 2πr = 6π/r² ⇒ r³ = 3",
          "r = 3^(1/3) minimises S (confirm with the second derivative test)"
        ]
      }
    ]
  },
  {
    section: "Section B — Vectors / 3D Geometry / Integrals",
    items: [
      {
        q: "Find a unit vector perpendicular to both a⃗=(2,−1,2) and b⃗=(1,1,−2).",
        marks: "4",
        steps: [
          "a⃗×b⃗ = ((−1)(−2)−(2)(1), (2)(1)−(2)(−2), (2)(1)−(−1)(1)) = (0, 6, 3)",
          "Magnitude = √(0+36+9) = √45 = 3√5",
          "Unit vector = (0,6,3)/(3√5) = (0, 2/√5, 1/√5)"
        ]
      },
      {
        q: "Find the equation of the plane through (1,2,3), perpendicular to the line with direction ratios (2,−1,2).",
        marks: "4",
        steps: [
          "A plane perpendicular to a line uses that line's direction ratios as its normal vector",
          "Plane: 2(x−1) − 1(y−2) + 2(z−3) = 0",
          "Expand: 2x−2−y+2+2z−6 = 0",
          "2x − y + 2z − 6 = 0"
        ]
      },
      {
        q: "Find the area bounded by the curves y²=4x and x²=4y.",
        marks: "6",
        steps: [
          "Find intersections: substitute y=x²/4 into y²=4x ⇒ x⁴/16=4x ⇒ x⁴−64x=0 ⇒ x=0 or x=4",
          "At x=4, y=4. Between x=0 and 4, y=2√x (from y²=4x) lies above y=x²/4",
          "Area = ∫₀⁴ [2√x − x²/4] dx = [(4/3)x^(3/2) − x³/12]₀⁴",
          "At x=4: (4/3)(8) − 64/12 = 32/3 − 16/3 = 16/3 sq units"
        ]
      }
    ]
  },
  {
    section: "Section C — Commerce (Numerical Applications / Regression / LPP)",
    items: [
      {
        q: "For 10 pairs of data: Σx=50, Σy=60, Σxy=350, Σx²=290. Find the regression coefficient b_yx and the regression line of y on x.",
        marks: "4",
        steps: [
          "x̄=5, ȳ=6",
          "b_yx = [Σxy − n·x̄·ȳ] / [Σx² − n·x̄²] = [350−300]/[290−250] = 50/40 = 1.25",
          "Regression line: y − 6 = 1.25(x − 5)",
          "y = 1.25x − 0.25"
        ]
      },
      {
        q: "A dietician needs at least 24 units protein and 32 units carbs. Food X (₹5/unit) gives 2 protein+4 carbs; Food Y (₹3/unit) gives 3 protein+2 carbs. Minimise cost.",
        marks: "6",
        steps: [
          "Minimise Z=5x+3y subject to 2x+3y≥24, 4x+2y≥32 (i.e. 2x+y≥16), x,y≥0",
          "Feasible corner points: (0,16), (6,4), (12,0)",
          "Z at each: (0,16)→48, (6,4)→42, (12,0)→60",
          "Minimum cost ₹42, using 6 units of X and 4 units of Y"
        ]
      }
    ]
  }
];
