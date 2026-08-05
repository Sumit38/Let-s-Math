const chapters = [
    {
        id: 1,
        title: "Relations and Functions",
        icon: "f∘g",
        marks: "~4 marks",
        concept: "A relation becomes a function when every input maps to exactly one output. Check one-one (injective) and onto (surjective) behaviour, composite functions, and finding inverses. Understanding function notation f: A → B and operations on functions are crucial.",
        tricks: [
            "One-one check: Assume f(x₁)=f(x₂); if algebra forces x₁=x₂, it's one-one",
            "Onto check: Solve y=f(x) for x; if valid x exists for every y, it's onto",
            "To find inverse: Swap x and y in y=f(x), then solve for y again",
            "f∘g ≠ g∘f in general — always compute in the order written, innermost first"
        ],
        practice: [
            { q: "Show f(x) = (x+1)/(x−2) is one-one and find its inverse", a: "Assume f(x₁)=f(x₂): (x₁+1)/(x₁−2) = (x₂+1)/(x₂−2) ⟹ x₁=x₂ (one-one). Inverse: y=(x+1)/(x−2), swap: x=(y+1)/(y−2), solve: f⁻¹(x) = (2x+1)/(x−1)" },
            { q: "If f(x) = 2x+3 and g(x) = x−1, find (f∘g)(x)", a: "(f∘g)(x) = f(g(x)) = f(x−1) = 2(x−1)+3 = 2x+1" },
            { q: "If f(x) = x² and g(x) = √x, find (g∘f)(x) and (f∘g)(x)", a: "(g∘f)(x) = g(x²) = √(x²) = |x|. (f∘g)(x) = f(√x) = (√x)² = x. Note: g∘f ≠ f∘g (unless x≥0)" },
            { q: "Check if f(x) = 3x−5 is onto from ℝ→ℝ. Find inverse.", a: "Solve y = 3x−5 for x: x = (y+5)/3 (valid for every y). Onto ✓. Inverse: f⁻¹(x) = (x+5)/3" },
            { q: "Find domain of f(x) = 1/√(x²−9)", a: "Need x²−9 > 0 (not just ≥). x² > 9 ⟹ |x| > 3. Domain: (−∞,−3) ∪ (3,∞)" }
        ],
        diagram: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Domain Box -->
            <rect x="24" y="48" width="112" height="130" fill="none" stroke="#3A8F84" stroke-width="3" rx="8"/>
            <text x="80" y="28" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">Domain</text>
            <text x="80" y="68" text-anchor="middle" font-size="16" fill="#1E4A7A" font-weight="bold">A</text>

            <!-- Domain Elements -->
            <circle cx="64" cy="88" r="6" fill="#E2A23B"/>
            <circle cx="64" cy="128" r="6" fill="#E2A23B"/>
            <circle cx="64" cy="168" r="6" fill="#E2A23B"/>

            <!-- Mapping Arrows -->
            <line x1="69" y1="88" x2="391" y2="88" stroke="#E2A23B" stroke-width="2.5"/>
            <line x1="69" y1="128" x2="391" y2="128" stroke="#E2A23B" stroke-width="2.5"/>
            <line x1="69" y1="168" x2="391" y2="168" stroke="#E2A23B" stroke-width="2.5"/>

            <!-- Arrow tips -->
            <polygon points="391,88 386,85 386,91" fill="#E2A23B"/>
            <polygon points="391,128 386,125 386,131" fill="#E2A23B"/>
            <polygon points="391,168 386,165 386,171" fill="#E2A23B"/>

            <!-- Codomain Box -->
            <rect x="344" y="48" width="112" height="130" fill="none" stroke="#3A8F84" stroke-width="3" rx="8"/>
            <text x="400" y="28" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">Codomain</text>
            <text x="400" y="68" text-anchor="middle" font-size="16" fill="#1E4A7A" font-weight="bold">B</text>

            <!-- Codomain Elements -->
            <circle cx="416" cy="88" r="6" fill="#3A8F84"/>
            <circle cx="416" cy="128" r="6" fill="#3A8F84"/>
            <circle cx="416" cy="168" r="6" fill="#3A8F84"/>

            <!-- Description -->
            <text x="240" y="220" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">Function: f(x) = x</text>
            <text x="240" y="238" text-anchor="middle" font-size="9" fill="#1E4A7A">✓ Each element in A → ONE in B</text>
            <text x="240" y="254" text-anchor="middle" font-size="9" fill="#1E4A7A">✓ One-One and Onto (Bijective)</text>
        </svg>`
    },
    {
        id: 2,
        title: "Inverse Trigonometric Functions",
        icon: "θ",
        marks: "~4 marks",
        concept: "Inverse trig functions solve real-world angle problems. Real-life: Surveyor measures: \"If building height = 50m and shadow length = 100m, what's the sun's angle?\" Answer: θ = tan⁻¹(50/100) ≈ 26.57°. Camera: \"Lens sees object at 30° elevation. What's the actual height?\" Navigation: \"Ship bearing is 45° from north.\" Aircraft: \"Climb angle for takeoff = sin⁻¹(rate/speed)\". Master sin⁻¹, cos⁻¹, tan⁻¹, and their principal value ranges (crucial for getting real-world angles right).",
        tricks: [
            "sin⁻¹x + cos⁻¹x = π/2 and tan⁻¹x + cot⁻¹x = π/2 — instant simplifiers",
            "tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) only holds when xy<1",
            "For sin(2tan⁻¹x): let θ=tan⁻¹x, draw right triangle, convert using double angle formula",
            "Always verify final answer lies within the principal value range of the function"
        ],
        practice: [
            { q: "Solve: cos(2 sin⁻¹x) = 1/2", a: "Let θ=sin⁻¹x, so cos(2θ) = 1−2sin²θ = 1−2x². Set 1−2x² = 1/2 ⟹ x² = 1/4 ⟹ x = ±1/2" },
            { q: "Evaluate: sin⁻¹(1/2) + cos⁻¹(1/2)", a: "Using sin⁻¹x + cos⁻¹x = π/2 for x=1/2: Answer = π/2" },
            { q: "Find tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3)", a: "Using tan⁻¹a + tan⁻¹b = tan⁻¹[(a+b)/(1−ab)] for ab<1, and properties: Result = π" },
            { q: "Solve: tan⁻¹x = sin⁻¹(3/5)", a: "Let sin⁻¹(3/5) = α, then sin α = 3/5, so cos α = 4/5, tan α = 3/4. Therefore x = 3/4" },
            { q: "Principal value of sin⁻¹(−√3/2)", a: "sin⁻¹ range is [−π/2, π/2]. sin⁻¹(−√3/2) = −π/3" }
        ],
        diagram: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="20" text-anchor="middle" font-size="15" fill="#66FF00" font-weight="bold">y = sin⁻¹(x)</text>

            <!-- Grid lines -->
            <line x1="50" y1="140" x2="350" y2="140" stroke="#A9AFC4" stroke-width="0.5" opacity="0.2"/>
            <line x1="200" y1="50" x2="200" y2="220" stroke="#A9AFC4" stroke-width="0.5" opacity="0.2"/>

            <!-- Axes -->
            <line x1="50" y1="220" x2="350" y2="220" stroke="#3A8F84" stroke-width="2.5"/>
            <line x1="200" y1="50" x2="200" y2="220" stroke="#3A8F84" stroke-width="2.5"/>

            <!-- Axis arrows -->
            <polygon points="350,220 345,217 345,223" fill="#3A8F84"/>
            <polygon points="200,50 197,55 203,55" fill="#3A8F84"/>

            <!-- Axis labels - LARGER AND BRIGHTER -->
            <text x="368" y="227" font-size="14" fill="#00FFDD" font-weight="bold">x</text>
            <text x="207" y="35" font-size="14" fill="#00FFDD" font-weight="bold">y</text>

            <!-- X-axis tick marks and labels - LARGER -->
            <text x="90" y="242" text-anchor="middle" font-size="12" fill="#66FF00" font-weight="bold">-1</text>
            <line x1="90" y1="215" x2="90" y2="225" stroke="#3A8F84" stroke-width="1.5"/>

            <text x="200" y="242" text-anchor="middle" font-size="12" fill="#66FF00" font-weight="bold">0</text>
            <line x1="200" y1="215" x2="200" y2="225" stroke="#3A8F84" stroke-width="1.5"/>

            <text x="310" y="242" text-anchor="middle" font-size="12" fill="#66FF00" font-weight="bold">1</text>
            <line x1="310" y1="215" x2="310" y2="225" stroke="#3A8F84" stroke-width="1.5"/>

            <!-- Y-axis tick marks and labels - LARGER -->
            <text x="175" y="145" text-anchor="end" font-size="12" fill="#FFD700" font-weight="bold">π/2</text>
            <line x1="195" y1="140" x2="205" y2="140" stroke="#3A8F84" stroke-width="1.5"/>

            <text x="175" y="230" text-anchor="end" font-size="12" fill="#FFD700" font-weight="bold">-π/2</text>
            <line x1="195" y1="220" x2="205" y2="220" stroke="#3A8F84" stroke-width="1.5"/>

            <!-- The curve: sin⁻¹(x) -->
            <path d="M 90 210 Q 110 195 130 180 Q 150 165 170 150 Q 190 135 200 125 Q 210 115 230 100 Q 250 85 270 75 Q 290 70 310 72"
                  fill="none" stroke="#3A8F84" stroke-width="3.5" stroke-linecap="round"/>

            <!-- Key points on curve - LARGER -->
            <circle cx="90" cy="210" r="5" fill="#E2A23B"/>
            <circle cx="200" cy="120" r="5" fill="#E2A23B"/>
            <circle cx="310" cy="72" r="5" fill="#E2A23B"/>

            <!-- Point labels - LARGER AND CLEARER -->
            <text x="70" y="205" font-size="11" fill="#E2A23B" font-weight="bold">(-1, -π/2)</text>
            <text x="200" y="45" text-anchor="middle" font-size="11" fill="#E2A23B" font-weight="bold">(1, π/2)</text>
            <text x="225" y="135" font-size="11" fill="#E2A23B" font-weight="bold">(0, 0)</text>

            <!-- Information boxes -->
            <rect x="10" y="250" width="360" height="28" fill="#FFFFFF" stroke="#00FFDD" stroke-width="2" rx="4"/>
            <text x="20" y="265" font-size="10" fill="#1E4A7A" font-weight="bold">Domain: [-1, 1]  |  Range: [-π/2, π/2]  |  Strictly Increasing  |  Odd Function</text>
        </svg>`
    },
    {
        id: 3,
        title: "Matrices",
        icon: "[M]",
        marks: "~6 marks",
        concept: "Matrices organize numbers into rows and columns for real-world problems. Real-life example: A bakery sells 3 items (Bread, Cake, Cookies). Day 1 sales: B=50, C=30, K=40. Day 2 sales: B=60, C=25, K=45. Write as matrix to track inventory! Matrix method AX=B solves systems: If 2 Bread + 1 Cake = ₹100 and 1 Bread + 2 Cake = ₹110, find prices using matrix inversion. Essential for solving simultaneous equations efficiently.",
        tricks: [
            "For repeating patterns like 1/x, 1/y, 1/z — substitute u=1/x first to linearize",
            "2×2 inverse shortcut: swap diagonal entries, negate off-diagonal, divide by determinant",
            "Matrix invertible only if det(A)≠0 — always check before hunting for A⁻¹",
            "(A+Aᵀ) is always symmetric, (A−Aᵀ) is always skew-symmetric",
            "Real-world: Use matrices for inventory tracking, supply chain, production planning"
        ],
        practice: [
            { q: "Find inverse of A = [[2,1],[1,1]]", a: "det(A) = 2−1 = 1. A⁻¹ = (1/1)[[1,−1],[−1,2]] = [[1,−1],[−1,2]]" },
            { q: "Show (A + Aᵀ) is symmetric for A = [[1,2],[3,4]]", a: "A = [[1,2],[3,4]], Aᵀ = [[1,3],[2,4]]. A+Aᵀ = [[2,5],[5,8]]. (A+Aᵀ)ᵀ = [[2,5],[5,8]] ✓ Symmetric" },
            { q: "Solve the system: 2x+y=5, 3x+2y=8 using matrix form", a: "[[2,1],[3,2]][[x],[y]] = [[5],[8]]. A⁻¹ = [[2,−1],[−3,2]]. Solution: x=2, y=1" },
            { q: "If A = [[1,2],[0,1]] and B = [[3,4],[1,2]], find AB and BA", a: "AB = [[5,8],[1,2]], BA = [[3,8],[1,4]]. Note: AB ≠ BA (matrices don't commute)" },
            { q: "Find trace and determinant of A = [[4,2],[1,3]]", a: "Trace = 4+3 = 7. Determinant = 12−2 = 10" }
        ],
        diagram: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg">
            <!-- Title: Real-World Example -->
            <text x="190" y="18" text-anchor="middle" font-size="14" fill="#66FF00" font-weight="bold">🍞 Bakery Pricing Problem</text>

            <!-- Problem Statement - BETTER ALIGNED -->
            <rect x="15" y="25" width="350" height="35" fill="#FFFFFF" stroke="#70AD47" stroke-width="1.5" rx="4"/>
            <text x="190" y="40" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="500">2 Bread + 1 Cake = ₹100  |  1 Bread + 2 Cake = ₹110</text>
            <text x="190" y="55" text-anchor="middle" font-size="9" fill="#1E4A7A">Find: Price of Bread (x) and Cake (y)</text>

            <!-- Matrix A (Coefficients) -->
            <text x="65" y="80" font-size="11" fill="#E2A23B" font-weight="bold" text-anchor="middle">Coefficients:</text>
            <rect x="30" y="85" width="70" height="50" fill="none" stroke="#3A8F84" stroke-width="2" rx="3"/>
            <text x="40" y="105" font-size="14" fill="#1E4A7A" font-weight="bold">2  1</text>
            <text x="40" y="125" font-size="14" fill="#1E4A7A" font-weight="bold">1  2</text>
            <text x="65" y="145" text-anchor="middle" font-size="9" fill="#1E4A7A">Matrix A</text>

            <!-- Multiply sign -->
            <text x="130" y="110" font-size="18" fill="#1E4A7A" font-weight="bold" text-anchor="middle">×</text>

            <!-- Matrix X (Unknowns) -->
            <text x="170" y="80" font-size="11" fill="#E2A23B" font-weight="bold" text-anchor="middle">Unknowns:</text>
            <rect x="145" y="85" width="50" height="50" fill="none" stroke="#3A8F84" stroke-width="2" rx="3"/>
            <text x="155" y="105" font-size="14" fill="#1E4A7A" font-weight="bold">x</text>
            <text x="155" y="125" font-size="14" fill="#1E4A7A" font-weight="bold">y</text>
            <text x="170" y="145" text-anchor="middle" font-size="9" fill="#1E4A7A">Matrix X</text>

            <!-- Equals sign -->
            <text x="215" y="110" font-size="18" fill="#1E4A7A" font-weight="bold" text-anchor="middle">=</text>

            <!-- Matrix B (Results) -->
            <text x="275" y="80" font-size="11" fill="#E2A23B" font-weight="bold" text-anchor="middle">Results:</text>
            <rect x="245" y="85" width="60" height="50" fill="none" stroke="#E2A23B" stroke-width="2" rx="3"/>
            <text x="260" y="105" font-size="14" fill="#1E4A7A" font-weight="bold">100</text>
            <text x="260" y="125" font-size="14" fill="#1E4A7A" font-weight="bold">110</text>
            <text x="275" y="145" text-anchor="middle" font-size="9" fill="#1E4A7A">Matrix B</text>

            <!-- Solution Method -->
            <rect x="20" y="160" width="340" height="85" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1.5" rx="4"/>
            <text x="190" y="178" text-anchor="middle" font-size="11" fill="#E2A23B" font-weight="bold">📋 How to Solve</text>

            <text x="30" y="198" font-size="10" fill="#1E4A7A">Step 1: Write equations as AX = B</text>
            <text x="30" y="213" font-size="10" fill="#1E4A7A">Step 2: Find inverse of A (if det(A) ≠ 0)</text>
            <text x="30" y="228" font-size="10" fill="#1E4A7A">Step 3: Multiply both sides by A⁻¹: X = A⁻¹B</text>

            <text x="220" y="198" font-size="10" fill="#70AD47" font-weight="bold">✓ x = 30 (Bread)</text>
            <text x="220" y="213" font-size="10" fill="#70AD47" font-weight="bold">✓ y = 40 (Cake)</text>
            <text x="220" y="228" font-size="9" fill="#1E4A7A">(Verify: 2(30)+40=100 ✓)</text>
        </svg>`
    },
    {
        id: 4,
        title: "Determinants",
        icon: "|A|",
        marks: "~4 marks",
        concept: "Determinants solve geometric and system problems. Real-life: Surveyor finds **area of triangular land plot** with vertices at (0,0), (100,50), (80,120): Area = |det|/2 = 3400 m². Architect: Check if 3 walls are **collinear** (determinant = 0 means they're on same line, error!). Engineer: **Solve 2 force equations** F₁+F₂=100N and 2F₁−F₂=50N using Cramer's Rule with determinants. Programmer: Detect **singular matrices** (det=0 means matrix has no inverse, can't solve). Determinants = single number capturing system information.",
        tricks: [
            "Two identical rows or columns ⟹ determinant is 0 (spot this before expanding!)",
            "Row/column operations don't change value — create zeros first to simplify",
            "Area of triangle via determinant can be negative — always take absolute value",
            "If area determinant = 0, the three points are collinear"
        ],
        practice: [
            { q: "Evaluate |2 3; 4 1|", a: "det = (2)(1) − (3)(4) = 2 − 12 = −10" },
            { q: "Explain why det with two identical rows equals zero", a: "Swapping identical rows flips the sign: det = −det, so 2·det = 0, thus det = 0" },
            { q: "Find |1 2 3; 0 4 5; 1 2 2|", a: "Expand along row 1: 1(8−10) − 2(0−5) + 3(0−4) = −2+10−12 = −4" },
            { q: "Find area of triangle with vertices (0,0), (3,0), (0,4)", a: "Area = (1/2)|det[[0,0,1],[3,0,1],[0,4,1]]| = (1/2)|−12| = 6 sq units" },
            { q: "For what value of k is |1 2; 3 k| = 0?", a: "k−6 = 0 ⟹ k = 6" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="14" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">📐 Determinant = "Magic Number"</text>

            <!-- What it does -->
            <rect x="10" y="22" width="360" height="32" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="20" y="35" font-size="8" fill="#1E4A7A" font-weight="bold">✓ Tells if problem has unique solution</text>
            <text x="20" y="48" font-size="8" fill="#1E4A7A" font-weight="bold">✓ Measures area/volume of transformation</text>

            <!-- Formula -->
            <rect x="10" y="58" width="360" height="28" fill="#FFFFFF" stroke="#3A8F84" stroke-width="1" rx="3"/>
            <text x="20" y="70" font-size="8" fill="#1E4A7A" font-weight="bold">For Matrix | a  b | → det = (a × d) − (b × c)</text>
            <text x="190" y="70" font-size="8" fill="#1E4A7A" font-weight="bold">| c  d |</text>
            <text x="20" y="82" font-size="7" fill="#1E4A7A">Multiply main diagonal, subtract other diagonal</text>

            <!-- Example Part 1 -->
            <rect x="10" y="90" width="360" height="42" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="20" y="102" font-size="8" fill="#1E4A7A" font-weight="bold">Example: | 2  3 |</text>
            <text x="95" y="102" font-size="8" fill="#1E4A7A">| 4  1 |</text>
            <text x="20" y="115" font-size="7" fill="#1E4A7A">Step 1: 2 × 1 = 2  |  Step 2: 3 × 4 = 12</text>
            <text x="20" y="127" font-size="8" fill="#1E4A7A" font-weight="bold">Result: 2 − 12 = −10  ✓ (Unique solution)</text>

            <!-- Key Meaning -->
            <rect x="10" y="122" width="360" height="28" fill="#FFFFFF" stroke="#3A8F84" stroke-width="1" rx="3"/>
            <text x="20" y="134" font-size="8" fill="#1E4A7A" font-weight="bold">If det ≠ 0 → Solution is unique ✓</text>
            <text x="20" y="147" font-size="8" fill="#1E4A7A" font-weight="bold">If det = 0 → No unique solution ✗</text>

            <!-- Visual Hint -->
            <text x="190" y="170" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">Main Diagonal (↘) minus Other Diagonal (↙)</text>
            <path d="M 120 180 L 160 220" stroke="#E2A23B" stroke-width="2" opacity="0.6"/>
            <path d="M 160 180 L 120 220" stroke="#3A8F84" stroke-width="2" opacity="0.6"/>
            <text x="90" y="245" font-size="7" fill="#E2A23B">Main (↘)</text>
            <text x="260" y="245" font-size="7" fill="#3A8F84">Other (↙)</text>
        </svg>`
    },
    {
        id: 5,
        title: "Continuity and Differentiability",
        icon: "lim",
        marks: "~8 marks",
        concept: "Continuity = smooth without jumps. Differentiability = smooth slope. Real-life: **Road design**: highway curve must be continuous (no cracks) and differentiable (no sharp corners—passengers get hurt!). **Bridge**: continuous but might have corner → differentiable fails → dangerous. **Video frame rate**: jump in pixel value (discontinuous) = glitch. **Robot arm**: must be differentiable or jerks occur. **Stock price**: continuous (no teleporting), but corners at sudden news events. Calculus theorem: If differentiable ⟹ continuous; but continuous ≠> differentiable (corners exist!).",
        tricks: [
            "To check continuity at a point: compute LHL, RHL, and f(a) separately — never assume",
            "Differentiable always implies continuous, but reverse is FALSE",
            "For piecewise functions: always test right at point where definition switches",
            "Chain rule reminder: differentiate outer first, then multiply by derivative of inner"
        ],
        practice: [
            { q: "Differentiate y = sin(x²) using chain rule", a: "dy/dx = cos(x²) · d(x²)/dx = cos(x²) · 2x = 2x·cos(x²)" },
            { q: "Is f(x) = |x| differentiable at x = 0?", a: "LHD = −1, RHD = +1. Since LHD ≠ RHD, not differentiable at 0 (but continuous)" },
            { q: "Check continuity of f(x) = {x², x≤1; 2x−1, x>1} at x=1", a: "lim(x→1⁻) f(x) = 1, lim(x→1⁺) f(x) = 1, f(1) = 1. Continuous ✓" },
            { q: "Find derivative of f(x) = |x−2| at x=2", a: "f(x) = {2−x, x<2; x−2, x≥2}. LHD = −1, RHD = +1. Not differentiable at x=2" },
            { q: "Is f(x) = sin(1/x) continuous at x=0?", a: "f(0) undefined, and lim(x→0) sin(1/x) oscillates wildly. Not continuous at x=0" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">🛣️ Road Design: Continuity vs Differentiability</text>

            <!-- Explanation -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Continuous = no jumps/breaks | Differentiable = no sharp corners</text>

            <!-- Axis labels -->
            <text x="25" y="120" font-size="10" fill="#1E4A7A">Height</text>
            <text x="190" y="250" text-anchor="middle" font-size="10" fill="#1E4A7A">Distance →</text>

            <!-- Grid -->
            <line x1="50" y1="200" x2="350" y2="200" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="50" x2="50" y2="200" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Left: Differentiable (smooth) -->
            <text x="110" y="55" font-size="11" fill="#3A8F84" font-weight="bold">✓ Differentiable</text>
            <path d="M 60 195 Q 100 100 140 195" fill="none" stroke="#3A8F84" stroke-width="3" stroke-linecap="round"/>
            <circle cx="100" cy="140" r="3" fill="#E2A23B"/>
            <text x="100" y="165" text-anchor="middle" font-size="9" fill="#1E4A7A">Smooth curve</text>
            <text x="100" y="178" text-anchor="middle" font-size="8" fill="#1E4A7A">Safe road: no jerks</text>

            <!-- Right: Continuous but not differentiable (corner) -->
            <text x="260" y="55" font-size="11" fill="#danger" font-weight="bold">⚠️ Continuous only</text>
            <line x1="220" y1="195" x2="260" y2="100" stroke="#danger" stroke-width="3"/>
            <line x1="260" y1="100" x2="300" y2="195" stroke="#danger" stroke-width="3"/>
            <circle cx="260" cy="100" r="3" fill="#E2A23B"/>
            <text x="260" y="125" text-anchor="middle" font-size="9" fill="#1E4A7A">Sharp corner</text>
            <text x="260" y="138" text-anchor="middle" font-size="8" fill="#1E4A7A">Dangerous: abrupt turn</text>

            <!-- Key Concept Box -->
            <rect x="15" y="215" width="350" height="42" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="30" y="232" font-size="10" fill="#1E4A7A" font-weight="bold">Key Rule: Differentiable ⟹ Continuous</text>
            <text x="30" y="248" font-size="9" fill="#1E4A7A">But Continuous ⇏ Differentiable (corners exist at continuous points!)</text>
        </svg>`
    },
    {
        id: 6,
        title: "Applications of Derivatives",
        icon: "f′",
        marks: "~10 marks",
        concept: "Derivatives measure rate of change in real-world situations. Real-life examples: Speed = d(distance)/dt. When you press the accelerator, you're increasing the rate of change! Profit optimization: A factory earns Profit = 100x − x² where x = units produced. Find max profit by setting dP/dx=0. Temperature rate of change, water level rising, population growth — all use derivatives. Apply to find maxima/minima and solve optimization problems to maximize profit or minimize costs.",
        tricks: [
            "Increasing where f'(x)>0, decreasing where f'(x)<0 — factor f'(x) and solve inequality",
            "Critical points: f'(x)=0. Then f''(x)<0⟹max, f''(x)>0⟹min",
            "Real-world optimization: Maximize profit (revenue − cost) or minimize production cost",
            "Optimization: use constraint to reduce to ONE variable before differentiating"
        ],
        practice: [
            { q: "Find where f(x) = 2x³ − 15x² + 36x + 1 increases", a: "f'(x) = 6x² − 30x + 36 = 6(x²−5x+6) = 6(x−2)(x−3). f'(x)>0 when x<2 or x>3. Increases on (−∞,2)∪(3,∞)" },
            { q: "Box with volume 4096 cm³, minimize surface area", a: "V=x²h=4096⟹h=4096/x². S=2x²+4xh=2x²+16384/x. dS/dx=4x−16384/x²=0⟹x=16. Cube 16×16×16" },
            { q: "Find local maxima/minima of f(x) = x³−3x", a: "f'(x) = 3x²−3 = 0 ⟹ x = ±1. f''(x) = 6x. f''(−1) = −6 < 0 (max), f''(1) = 6 > 0 (min). Max at x=−1, min at x=1" },
            { q: "A ladder 10m long leans against a wall. If top slides down at 1 m/s, how fast does bottom move when top is 6m high?", a: "x²+y²=100. 2x(dx/dt)+2y(dy/dt)=0. When y=6: x=8. 2(8)(dx/dt)+2(6)(−1)=0 ⟹ dx/dt = 3/4 m/s" },
            { q: "Find critical points and nature of f(x) = x⁴−4x³+6x²", a: "f'(x) = 4x³−12x²+12x = 4x(x²−3x+3). Only critical point: x=0. f''(0)=0 (needs 3rd derivative test). Inflection point at x=0" }
        ],
        diagram: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="210" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">💰 Factory Profit Optimization</text>

            <!-- Problem -->
            <text x="210" y="33" text-anchor="middle" font-size="9" fill="#1E4A7A">Profit P(x) = 100x − x² | Find maximum profit</text>

            <!-- Y-Axis -->
            <line x1="70" y1="240" x2="70" y2="50" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="35" y="130" font-size="10" fill="#1E4A7A" font-weight="bold">Profit (₹)</text>

            <!-- X-Axis -->
            <line x1="70" y1="240" x2="380" y2="240" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="225" y="265" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">Units Produced (x)</text>

            <!-- Profit curve: parabola opening down -->
            <path d="M 80 235 Q 120 180 160 130 Q 190 85 210 60 Q 230 85 270 130 Q 310 180 360 235"
                  fill="none" stroke="#3A8F84" stroke-width="4" stroke-linecap="round"/>

            <!-- Maximum point - large, visible -->
            <circle cx="210" cy="60" r="7" fill="#E2A23B"/>
            <circle cx="210" cy="60" r="4" fill="#F39C12"/>

            <!-- Dashed line from max to x-axis -->
            <line x1="210" y1="60" x2="210" y2="240" stroke="#E2A23B" stroke-width="2.5" stroke-dasharray="4,4"/>

            <!-- Title above maximum -->
            <text x="210" y="42" text-anchor="middle" font-size="11" fill="#E2A23B" font-weight="bold">Maximum Profit</text>

            <!-- X-axis label for maximum point -->
            <text x="210" y="285" text-anchor="middle" font-size="10" fill="#F39C12" font-weight="bold">x = 50 units</text>

            <!-- Profit value label -->
            <text x="245" y="65" font-size="9" fill="#E2A23B" font-weight="bold">P(50) = ₹2500</text>

            <!-- Solution Box -->
            <rect x="15" y="295" width="390" height="22" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1.5" rx="2"/>
            <text x="25" y="310" font-size="8" fill="#1E4A7A">Solution: Find critical point → P'(x) = 100 − 2x = 0 → x = 50 → Maximum Profit = ₹2500</text>
        </svg>`
    },
    {
        id: 7,
        title: "Indefinite Integrals",
        icon: "∫dx",
        marks: "~4-6 marks",
        concept: "Indefinite integrals are **antiderivatives** — they undo differentiation. Real-life: **Velocity → Distance**: If velocity v(t) = 2t+3 m/s, distance = ∫(2t+3)dt = t² + 3t + C. The '+C' captures \"how far you started.\" **Drug concentration**: If elimination rate is -0.5C, concentration C(t) = Ae^(-0.5t). **Profit from revenue**: If revenue rate dR/dx = 100-2x, total revenue = ∫(100-2x)dx = 100x − x² + C. **Spring potential energy**: ∫kx dx = kx²/2 + C. Integration by parts (ILATE) and substitution are power tools for complex functions.",
        tricks: [
            "Spot a function and its derivative in the integrand ⟹ that's your substitution cue",
            "ILATE priority for ∫u dv: Inverse, Log, Algebraic, Trig, Exponential — pick u in that order",
            "sec²x and 1+tan²x are identical — swapping often unlocks stuck integrals",
            "Never forget '+ C' — examiners deduct marks for missing constant"
        ],
        practice: [
            { q: "Evaluate: ∫x·e^(x²) dx", a: "Let t=x², dt=2x dx. ∫e^(x²)·x dx = (1/2)∫e^t dt = (1/2)e^(x²) + C" },
            { q: "Evaluate: ∫sec²x/(1+tan²x) dx", a: "Since 1+tan²x = sec²x, integrand = 1. ∫1 dx = x + C" },
            { q: "Find ∫x·sin(x) dx using integration by parts", a: "u=x, dv=sin(x)dx. du=dx, v=−cos(x). ∫x·sin(x)dx = −x·cos(x) + ∫cos(x)dx = −x·cos(x) + sin(x) + C" },
            { q: "Evaluate ∫(2x+3)/(x²+3x+2) dx", a: "Note: d/dx(x²+3x+2) = 2x+3. So ∫(2x+3)/(x²+3x+2)dx = ln|x²+3x+2| + C" },
            { q: "Find ∫√(1−x²) dx", a: "Let x = sin(θ), dx = cos(θ)dθ. ∫cos²(θ)dθ = (θ + sin(θ)cos(θ))/2 + C = (sin⁻¹x + x√(1−x²))/2 + C" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">🚗 Velocity → Distance (Real-World)</text>

            <!-- Problem -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Car velocity: v(t) = 2t + 3 m/s | Find: distance traveled (antiderivative)</text>

            <!-- The relationship -->
            <rect x="15" y="45" width="350" height="50" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="30" y="62" font-size="10" fill="#E2A23B" font-weight="bold">Why Integration?</text>
            <text x="30" y="78" font-size="9" fill="#1E4A7A">d(distance)/dt = velocity  →  distance = ∫velocity dt</text>
            <text x="30" y="92" font-size="9" fill="#1E4A7A">Integration UNDOES differentiation (finds antiderivative)</text>

            <!-- Solution -->
            <rect x="15" y="105" width="350" height="110" fill="#FFFFFF" stroke="#3A8F84" stroke-width="1" rx="3"/>
            <text x="30" y="122" font-size="10" fill="#3A8F84" font-weight="bold">Solution:</text>

            <text x="30" y="140" font-size="10" fill="#1E4A7A">Given: v(t) = 2t + 3</text>
            <text x="30" y="158" font-size="10" fill="#1E4A7A">Distance = ∫(2t + 3) dt = t² + 3t + C</text>
            <text x="30" y="176" font-size="10" fill="#1E4A7A">The '+C' = initial distance (constant of integration)</text>
            <text x="30" y="194" font-size="10" fill="#E2A23B" font-weight="bold">If started at position 0: C=0 → distance = t² + 3t meters</text>
            <text x="30" y="209" font-size="9" fill="#1E4A7A">Example: At t=5 seconds → distance = 25 + 15 = 40 meters</text>

            <!-- Key formulas -->
            <text x="190" y="240" text-anchor="middle" font-size="9" fill="#1E4A7A">Key: ∫sin(x)dx = −cos(x)+C | ∫cos(x)dx = sin(x)+C | ∫eˣdx = eˣ+C</text>
        </svg>`
    },
    {
        id: 8,
        title: "Definite Integrals & Applications",
        icon: "∫ₐᵇ",
        marks: "~6 marks",
        concept: "Definite integrals calculate real-world quantities: Area under a curve (land area, work done). Real-life: If velocity = 2t+3 m/s, find distance traveled from t=0 to t=5 seconds using ∫₀⁵(2t+3)dt. Construction: Calculate material needed for curved roof. Electricity: Total charge transferred = ∫ current dt. King's Rule ∫₀ᵃf(x)dx = ∫₀ᵃf(a−x)dx simplifies complex problems.",
        tricks: [
            "King's Rule: ∫₀ᵃf(x)dx = ∫₀ᵃf(a−x)dx — most powerful trick for scary-looking integrals",
            "Real-world application: Distance = ∫velocity dt, Work = ∫force·distance, Charge = ∫current dt",
            "Even function on [−a,a]: integral = 2∫₀ᵃ. Odd function: integral = 0",
            "No '+C' for definite integrals — just substitute limits at the end"
        ],
        practice: [
            { q: "Evaluate: ∫₀¹ x(1−x)⁴ dx", a: "Using Beta function shortcut m!n!/(m+n+1)! with m=1,n=4: = 1!·4!/6! = 24/720 = 1/30" },
            { q: "Evaluate: ∫₀^(π/2) sin²x dx", a: "Using sin²x = (1−cos2x)/2: ∫₀^(π/2) (1−cos2x)/2 dx = [x/2 − sin2x/4]₀^(π/2) = π/4" },
            { q: "Evaluate: ∫₁² (1/x) dx", a: "[ln|x|]₁² = ln 2 − ln 1 = ln 2" },
            { q: "Find ∫₀^(π/4) sec²x dx", a: "[tan x]₀^(π/4) = 1 − 0 = 1" },
            { q: "Evaluate ∫₀¹ 2xe^x dx using integration by parts", a: "u=2x, dv=e^x dx. [2xe^x − 2e^x]₀¹ = 2e − 2e + 2 = 2" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">📏 Definite Integrals = Area Under Curve</text>

            <!-- Explanation -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Key Difference: Definite has LIMITS (a to b) → gives ONE number (area)</text>

            <!-- Graph showing area -->
            <line x1="50" y1="200" x2="350" y2="200" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="60" x2="50" y2="200" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Curve with shaded area -->
            <path d="M 80 185 Q 120 120 160 100 Q 200 90 240 100 Q 280 120 320 185" fill="#3A8F84" opacity="0.25"/>
            <path d="M 80 185 Q 120 120 160 100 Q 200 90 240 100 Q 280 120 320 185" fill="none" stroke="#3A8F84" stroke-width="3"/>

            <!-- Vertical limits -->
            <line x1="80" y1="200" x2="80" y2="185" stroke="#E2A23B" stroke-width="2"/>
            <line x1="320" y1="200" x2="320" y2="185" stroke="#E2A23B" stroke-width="2"/>

            <!-- Labels -->
            <text x="80" y="220" text-anchor="middle" font-size="11" fill="#E2A23B" font-weight="bold">x=a</text>
            <text x="320" y="220" text-anchor="middle" font-size="11" fill="#E2A23B" font-weight="bold">x=b</text>
            <text x="190" y="50" text-anchor="middle" font-size="11" fill="#1E4A7A" font-weight="bold">∫ₐᵇ f(x) dx</text>

            <!-- Information Box -->
            <rect x="15" y="235" width="350" height="22" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="2"/>
            <text x="25" y="250" font-size="9" fill="#1E4A7A">Example: ∫₀⁵(2t+3)dt = [t²+3t]₀⁵ = (25+15) − 0 = 40 meters traveled ✓</text>
        </svg>`
    },
    {
        id: 9,
        title: "Differential Equations",
        icon: "dy/dx",
        marks: "~4 marks",
        concept: "Differential equations model **how things change over time**. Real-life: **Population growth**: dp/dt = kp models bacteria doubling (k>0) or decay (k<0). **Radioactive decay**: dN/dt = -λN describes half-life. **Cooling coffee**: dT/dt = -k(T-T_room) Newton's Law. **Bank account with interest**: dA/dt = rA compounds continuously. **Disease spread**: dI/dt = βSI−γI (SEIR model for COVID). **Rocket motion**: m(dv/dt) = F−mg from Newton's 2nd law. Separable equations (get x's and y's on opposite sides) are the most practical tool for physicists and engineers.",
        tricks: [
            "If x and y appear only as (x+y), substitute v=x+y to make separable",
            "Variable separable: get all y-terms with dy on one side, all x-terms with dx on other, integrate both",
            "Linear DE dy/dx+Py=Q: integrating factor is e^∫P dx — memorise this cold",
            "Order = highest derivative present. Degree = power of that highest derivative"
        ],
        practice: [
            { q: "Solve: dy/dx = y/x", a: "Separable: dy/y = dx/x. Integrate: ln|y| = ln|x| + C₁. Thus y = kx (family of lines through origin)" },
            { q: "Order and degree of (d²y/dx²)³ + dy/dx = x", a: "Order = 2 (highest derivative is d²y/dx²). Degree = 3 (power of d²y/dx²)" },
            { q: "Solve: dy/dx = 2x, y(0)=3", a: "y = ∫2x dx = x² + C. Using y(0)=3: 3 = 0 + C, so C=3. Solution: y = x² + 3" },
            { q: "Solve the separable equation: dy/dx = y²", a: "dy/y² = dx. ∫y⁻² dy = ∫dx. −1/y = x + C. Solution: y = −1/(x+C)" },
            { q: "Solve dy/dx + y = e^x (linear DE)", a: "Integrating factor: e^(∫1 dx) = e^x. Multiply: e^x(dy/dx) + e^x·y = e^(2x). d/dx(e^x·y) = e^(2x). e^x·y = e^(2x)/2 + C. y = e^x/2 + Ce^(−x)" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">☕ Cooling Coffee (Newton's Law)</text>

            <!-- Problem -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Room temp: 25°C | Coffee initial: 95°C | Cooling rate: dT/dt = -k(T-25)</text>

            <!-- Axes -->
            <line x1="50" y1="200" x2="350" y2="200" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="60" x2="50" y2="200" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Labels -->
            <text x="20" y="120" font-size="9" fill="#1E4A7A">Temp (°C)</text>
            <text x="200" y="220" text-anchor="middle" font-size="9" fill="#1E4A7A">Time →</text>

            <!-- Solution curves for different k values -->
            <path d="M 60 80 Q 120 100 180 150 Q 220 180 350 198" fill="none" stroke="#E2A23B" stroke-width="2.5"/>
            <path d="M 60 100 Q 110 130 170 170 Q 210 190 350 199" fill="none" stroke="#3A8F84" stroke-width="2.5"/>
            <path d="M 60 130 Q 100 155 160 185 Q 200 198 350 199.5" fill="none" stroke="#teal" stroke-width="2.5"/>

            <!-- Horizontal asymptote (room temp) -->
            <line x1="50" y1="200" x2="350" y2="200" stroke="#danger" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="40" y="215" font-size="9" fill="#danger">Room: 25°C</text>

            <!-- Legend -->
            <text x="180" y="90" font-size="9" fill="#E2A23B" font-weight="bold">k=0.1</text>
            <text x="180" y="135" font-size="9" fill="#3A8F84" font-weight="bold">k=0.2</text>
            <text x="180" y="180" font-size="9" fill="#teal" font-weight="bold">k=0.4</text>

            <!-- Key info -->
            <rect x="15" y="235" width="350" height="22" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="2"/>
            <text x="25" y="250" font-size="9" fill="#1E4A7A">Solution: T(t) = 25 + 70e^(-kt) | Larger k = faster cooling | Approaches room temp</text>
        </svg>`
    },
    {
        id: 10,
        title: "Probability",
        icon: "P",
        marks: "~10 marks",
        concept: "Probability measures how likely an event is in real-world scenarios. Playing cards: P(drawing a spade) = 13/52 = 25%. Weather: \"60% chance of rain tomorrow\". Medical tests: \"If you test positive, probability you actually have disease = ?\" (Bayes). Lotteries: \"1 in 10 million chance.\" Manufacturing: \"If 3% of parts are defective, in batch of 1000, expect 30 defective.\" Dice games: Fair die has P(rolling 6) = 1/6 for each face. Understand: independent events (coin flips), conditional probability (weather given pressure), and optimization (maximize winning chance).",
        tricks: [
            "'At least one' problems: compute 1 − P(none) instead of summing cases — almost always faster",
            "Bayes' box problems: build mini table of P(box)×P(event|box) for each box before dividing",
            "Independent vs mutually exclusive: P(A∩B)=P(A)P(B) vs P(A∩B)=0 — completely different!",
            "Binomial: mean=np, variance=npq — use when both given to find n and p",
            "Playing cards: 52 total, 4 suits (13 each), 4 ranks of same type — use to identify favorable outcomes easily"
        ],
        practice: [
            { q: "Playing Cards: From a standard 52-card deck, what's P(drawing a red card)?", a: "Red cards = Hearts + Diamonds = 13 + 13 = 26 cards. P(red) = 26/52 = 1/2 = 0.5 (50%)" },
            { q: "Playing Cards: What's P(drawing an Ace from a 52-card deck)?", a: "Total Aces = 4 (one per suit). P(Ace) = 4/52 = 1/13 ≈ 0.077 or 7.7%" },
            { q: "Two dice rolled. Find P(sum = 7)", a: "Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. Total = 36. P = 6/36 = 1/6" },
            { q: "Bag has 3 red, 4 blue, 2 green balls. P(drawing red or blue)?", a: "P(red or blue) = P(red) + P(blue) = 3/9 + 4/9 = 7/9" },
            { q: "Coin tossed 4 times. P(exactly 2 heads)?", a: "C(4,2) × (1/2)² × (1/2)² = 6 × 1/16 = 6/16 = 3/8" },
            { q: "Playing Cards: P(drawing a King OR a Queen)?", a: "Kings = 4, Queens = 4, Total favorable = 8. P(King or Queen) = 8/52 = 2/13 ≈ 15.4%" },
            { q: "Two dice: Find P(sum=7 | at least one 4)", a: "Outcomes with at least one 4: 11 total. Of these, (3,4) and (4,3) sum to 7: 2 outcomes. P = 2/11" },
            { q: "Coin tossed 5 times. Find P(exactly 3 heads)", a: "C(5,3) × (0.5)⁵ = 10/32 = 5/16" }
        ],
        diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
            <!-- Axes -->
            <line x1="64" y1="280" x2="464" y2="280" stroke="#A9AFC4" stroke-width="3"/>
            <line x1="64" y1="40" x2="64" y2="280" stroke="#A9AFC4" stroke-width="3"/>

            <!-- Y-axis labels -->
            <text x="56" y="285" text-anchor="end" font-size="11" fill="#1E4A7A">0</text>
            <text x="56" y="215" text-anchor="end" font-size="11" fill="#1E4A7A">0.25</text>
            <text x="56" y="145" text-anchor="end" font-size="11" fill="#1E4A7A">0.50</text>

            <!-- Grid lines (light) -->
            <line x1="64" y1="215" x2="464" y2="215" stroke="#A9AFC4" stroke-width="0.5" opacity="0.3"/>
            <line x1="64" y1="145" x2="464" y2="145" stroke="#A9AFC4" stroke-width="0.5" opacity="0.3"/>

            <!-- Bars -->
            <rect x="80" y="258" width="36" height="22" fill="#3A8F84" rx="3"/>
            <rect x="132" y="195" width="36" height="85" fill="#3A8F84" rx="3"/>
            <rect x="184" y="90" width="36" height="190" fill="#E2A23B" rx="3"/>
            <rect x="236" y="90" width="36" height="190" fill="#E2A23B" rx="3"/>
            <rect x="288" y="195" width="36" height="85" fill="#3A8F84" rx="3"/>
            <rect x="340" y="258" width="36" height="22" fill="#3A8F84" rx="3"/>

            <!-- X-axis labels (Number of Heads) -->
            <text x="98" y="305" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">0</text>
            <text x="150" y="305" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">1</text>
            <text x="202" y="305" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">2</text>
            <text x="254" y="305" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">3</text>
            <text x="306" y="305" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">4</text>
            <text x="358" y="305" text-anchor="middle" font-size="12" fill="#1E4A7A" font-weight="bold">5</text>

            <!-- Probability labels on bars -->
            <text x="98" y="295" text-anchor="middle" font-size="8" fill="#E2A23B" font-weight="bold">1/32</text>
            <text x="150" y="260" text-anchor="middle" font-size="8" fill="#E2A23B" font-weight="bold">5/32</text>
            <text x="202" y="75" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">10/32 ⭐</text>
            <text x="254" y="75" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">10/32 ⭐</text>
            <text x="306" y="260" text-anchor="middle" font-size="8" fill="#E2A23B" font-weight="bold">5/32</text>
            <text x="358" y="295" text-anchor="middle" font-size="8" fill="#E2A23B" font-weight="bold">1/32</text>

            <!-- Axis titles -->
            <text x="450" y="305" font-size="11" fill="#1E4A7A" font-weight="bold">Num</text>
            <text x="30" y="160" font-size="11" fill="#1E4A7A" font-weight="bold">Prob</text>

            <!-- Title and subtitle -->
            <text x="270" y="25" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">Binomial: n=5, p=0.5</text>

            <!-- Footer info -->
            <text x="270" y="318" text-anchor="middle" font-size="9" fill="#1E4A7A">Peak at X=2,3 (31.25% each) • Symmetric</text>
        </svg>`
    },
    {
        id: 11,
        title: "Vectors",
        icon: "v⃗",
        marks: "~6-8 marks",
        concept: "Vectors = magnitude + direction. Real-life: **GPS navigation**: v⃗ = (North, East, Up) components. **Force**: F⃗ = (3N, 4N) has magnitude 5N at angle tan⁻¹(4/3). **Airplane**: velocity = speed in direction (heading). **Game physics**: Player position + velocity·time = next position. **Dot product**: How much force goes in direction of motion. v⃗·F⃗ = 0 ⟹ perpendicular forces do no work. **Cross product**: Torque = r⃗×F⃗ (perpendicularity creates spin). **Volume**: box volume = |(a⃗×b⃗)·c⃗|. Graphics engines use vectors constantly; physics engines too.",
        tricks: [
            "Perpendicular vectors ⟹ dot product = 0. Parallel vectors ⟹ cross product = 0",
            "|a⃗+b⃗|² = |a⃗|²+|b⃗|²+2(a⃗·b⃗) — expand this way whenever sums and magnitudes involved",
            "Unit vector = vector ÷ its own magnitude — compute magnitude first, always",
            "a⃗·(b⃗×c⃗)=0 means three vectors coplanar — quick test"
        ],
        practice: [
            { q: "Unit vector in direction of a⃗ = (4,−3,0)", a: "|a⃗| = √(16+9) = 5. Unit vector = (4/5, −3/5, 0)" },
            { q: "Find a⃗×b⃗ for a⃗=(1,0,0), b⃗=(0,1,0)", a: "a⃗×b⃗ = (0·0−0·1, 0·0−1·0, 1·1−0·0) = (0, 0, 1) = k̂ direction" },
            { q: "Find a⃗·b⃗ for a⃗ = (2,3,−1) and b⃗ = (1,−1,2)", a: "a⃗·b⃗ = 2(1) + 3(−1) + (−1)(2) = 2 − 3 − 2 = −3" },
            { q: "Find angle between a⃗ = (1,0,1) and b⃗ = (0,1,0)", a: "|a⃗| = √2, |b⃗| = 1, a⃗·b⃗ = 0. cos θ = 0 ⟹ θ = 90°" },
            { q: "Check if a⃗ = (1,2,2) and b⃗ = (4,1,−3) are perpendicular", a: "a⃗·b⃗ = 1(4) + 2(1) + 2(−3) = 4 + 2 − 6 = 0. Yes, perpendicular ✓" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">🧭 GPS Navigation with Vectors</text>

            <!-- Problem -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Displacement vectors show movement in 2D space</text>

            <!-- Coordinate axes -->
            <line x1="60" y1="200" x2="340" y2="200" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="60" y1="200" x2="60" y2="60" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Labels -->
            <text x="350" y="205" font-size="10" fill="#1E4A7A">East</text>
            <text x="50" y="50" font-size="10" fill="#1E4A7A">North</text>

            <!-- Vector A: 3 units East, 4 units North -->
            <line x1="60" y1="200" x2="150" y2="120" stroke="#3A8F84" stroke-width="3" marker-end="url(#arrowA)"/>
            <text x="130" y="145" font-size="11" fill="#3A8F84" font-weight="bold">a⃗ = (3,4)</text>
            <text x="120" y="165" font-size="9" fill="#1E4A7A">|a⃗| = 5 km</text>

            <!-- Vector B: 4 units East, 2 units North -->
            <line x1="60" y1="200" x2="200" y2="150" stroke="#E2A23B" stroke-width="3" marker-end="url(#arrowB)"/>
            <text x="180" y="140" font-size="11" fill="#E2A23B" font-weight="bold">b⃗ = (4,2)</text>
            <text x="170" y="170" font-size="9" fill="#1E4A7A">|b⃗| = √20 ≈ 4.47 km</text>

            <!-- Angle between vectors -->
            <path d="M 100 180 A 40 40 0 0 0 120 160" fill="none" stroke="#text-muted" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="95" y="180" font-size="10" fill="#1E4A7A">θ</text>

            <!-- Information Box -->
            <rect x="15" y="215" width="350" height="42" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="25" y="230" font-size="9" fill="#E2A23B" font-weight="bold">Dot Product: a⃗·b⃗ = 3(4) + 4(2) = 20</text>
            <text x="25" y="245" font-size="9" fill="#1E4A7A">cos(θ) = 20/(5×√20) ≈ 0.894  →  θ ≈ 26.6° between routes</text>

            <defs>
                <marker id="arrowA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <path d="M 0 0 L 10 3 L 0 6 Z" fill="#3A8F84"/>
                </marker>
                <marker id="arrowB" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <path d="M 0 0 L 10 3 L 0 6 Z" fill="#E2A23B"/>
                </marker>
            </defs>
        </svg>`
    },
    {
        id: 12,
        title: "Three-Dimensional Geometry",
        icon: "xyz",
        marks: "~8-10 marks",
        concept: "Real-world 3D space: navigation, architecture, aviation. Real-life: **Airplane path**: Find line through (0,0,0) in direction (1,2,3). At time t, position = (t, 2t, 3t). **Building: wall equation**: Plane x+2y−2z=9 (like blueprint coordinates). **Distance from point to wall**: How far is office (2,3,−5) from wall plane? Use distance formula. **Angle between flights**: Two aircraft on paths with directions (1,0,1) and (0,1,1). Angle = cos⁻¹(dot product / magnitudes). **Vertical separation**: If plane A at height z₁ and plane B at z₂, safe if |z₁−z₂| > min distance. Aviation, architecture, gaming—all use 3D geometry constantly.",
        tricks: [
            "Angle between lines needs only direction ratios — no actual points required",
            "Perpendicular lines: dot product of direction ratios = 0. Parallel: ratios proportional",
            "Distance from point to plane ax+by+cz+d=0: use |ax₁+by₁+cz₁+d|/√(a²+b²+c²) directly",
            "Plane through 3 points: determinant form faster than solving simultaneous equations"
        ],
        practice: [
            { q: "Direction cosines of line joining (1,2,3) and (4,6,3)", a: "Direction ratios: (3,4,0), magnitude 5. Direction cosines: (3/5, 4/5, 0)" },
            { q: "Distance of (2,3,−5) from plane x+2y−2z−9=0", a: "|2+6+10−9|/√(1+4+4) = 9/3 = 3" },
            { q: "Find distance between parallel lines r⃗ = (î + 2ĵ) + t(2î + ĵ) and r⃗ = (2î + 3ĵ) + s(2î + ĵ)", a: "Distance = |[(−î−ĵ)×(2î+ĵ)]|/|(2î+ĵ)| = |−3k̂|/√5 = 3/√5 = 3√5/5" },
            { q: "Find equation of plane through (1,2,3) perpendicular to (2,−1,1)", a: "2(x−1) − (y−2) + (z−3) = 0. Simplify: 2x − y + z − 3 = 0" },
            { q: "Distance between point (1,1,1) and line r⃗ = (0,0,0) + t(1,1,1)", a: "Using formula: d = |[(point−origin)×direction]|/|direction| = 0 (point lies on line)" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">✈️ Airplane Safety: 3D Geometry</text>

            <!-- Problem -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Two aircraft at different altitudes: ensure safe separation</text>

            <!-- 3D axes -->
            <line x1="80" y1="160" x2="80" y2="60" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="80" y1="160" x2="180" y2="160" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="80" y1="160" x2="40" y2="200" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Axis labels -->
            <text x="85" y="55" font-size="11" fill="#1E4A7A" font-weight="bold">Altitude (z)</text>
            <text x="185" y="165" font-size="11" fill="#1E4A7A" font-weight="bold">East (x)</text>
            <text x="20" y="210" font-size="11" fill="#1E4A7A" font-weight="bold">North (y)</text>

            <!-- Airplane A at higher altitude -->
            <circle cx="120" cy="100" r="6" fill="#E2A23B"/>
            <text x="130" y="95" font-size="10" fill="#E2A23B" font-weight="bold">✈ A: (3,2,10km)</text>
            <line x1="80" y1="160" x2="120" y2="100" stroke="#E2A23B" stroke-width="2" stroke-dasharray="2,2"/>

            <!-- Airplane B at lower altitude -->
            <circle cx="140" cy="130" r="6" fill="#3A8F84"/>
            <text x="150" y="125" font-size="10" fill="#3A8F84" font-weight="bold">✈ B: (3,2,8km)</text>
            <line x1="80" y1="160" x2="140" y2="130" stroke="#3A8F84" stroke-width="2" stroke-dasharray="2,2"/>

            <!-- Vertical separation indicator -->
            <line x1="145" y1="100" x2="145" y2="130" stroke="#danger" stroke-width="2"/>
            <text x="165" y="118" font-size="9" fill="#danger" font-weight="bold">Δz=2km (Safe!)</text>

            <!-- Information Box -->
            <rect x="15" y="215" width="350" height="42" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="25" y="232" font-size="9" fill="#E2A23B" font-weight="bold">Distance Between Aircraft:</text>
            <text x="25" y="248" font-size="9" fill="#1E4A7A">d = √[(3-3)² + (2-2)² + (10-8)²] = √4 = 2km ✓ Safe separation maintained</text>
        </svg>`
    },
    {
        id: 13,
        title: "Application of Integrals",
        icon: "∫∫",
        marks: "~6 marks",
        concept: "Real-world area problems. Real-life: **Land surveying**: Farmer's field bounded by river y=x² and fence y=2x. Area = ∫(2x−x²)dx from 0 to 2 = 4/3 acres. **Bridge deck**: Cross-section between girder curves. **Tunnel**: Area of oval tunnel entrance. **Water tank**: If depth varies as d=10−x², volume = π∫(10−x²)² dx. **Fabric**:  dress pattern between two curves = material needed. Sketch first, spot which curve is on top, find intersections (limits), integrate upper−lower. Picture = crucial first step.",
        tricks: [
            "Always sketch graph first — knowing which curve sits on top tells you what to subtract",
            "Find intersections by equating curve equations — these become your limits",
            "Area = ∫(upper−lower)dx across interval — always verify which function is bigger",
            "If easier to describe region with horizontal strips, integrate w.r.t. y instead"
        ],
        practice: [
            { q: "Area bounded by y=x² and y=x", a: "Intersections: x²=x ⟹ x=0 or 1. Between 0 and 1, y=x is above y=x². Area = ∫₀¹(x−x²)dx = [x²/2−x³/3]₀¹ = 1/2−1/3 = 1/6" },
            { q: "Set up integral for area under y=sinx from 0 to π", a: "∫₀^π sinx dx (evaluates to 2)" },
            { q: "Area enclosed by y=x and y=x³", a: "Intersections: x = x³ ⟹ x(1−x²)=0 ⟹ x=0,±1. Between −1 and 1, y=x above y=x³. Area = ∫₋₁¹(x−x³)dx = [x²/2−x⁴/4]₋₁¹ = 1/2 − 1/4 − (1/2 − 1/4) = 1/4 + 1/4 = 1/2" },
            { q: "Volume under z = x² + y² over region 0≤x≤2, 0≤y≤2", a: "V = ∫₀²∫₀²(x²+y²)dy dx = ∫₀²[x²y+y³/3]₀² dx = ∫₀²(2x²+8/3)dx = [2x³/3+8x/3]₀² = 16/3 + 16/3 = 32/3" },
            { q: "Area between y = 4−x² and y = 0", a: "Intersections: 4−x² = 0 ⟹ x = ±2. Area = ∫₋₂²(4−x²)dx = [4x−x³/3]₋₂² = (8−8/3) − (−8+8/3) = 16/3 + 16/3 = 32/3" }
        ],
        diagram: `<svg viewBox="0 0 450 310" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="225" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">🚜 Farm Land Between River & Fence</text>

            <!-- Problem statement -->
            <rect x="15" y="20" width="420" height="28" fill="#FFFFFF" stroke="#3A8F84" stroke-width="1" rx="2"/>
            <text x="25" y="33" font-size="8" fill="#1E4A7A">Find area between river y=x² and fence y=2x | Limits: x=0 to x=2</text>
            <text x="25" y="43" font-size="8" fill="#E2A23B">Answer: ∫₀²(2x−x²)dx = 4/3 square units</text>

            <!-- Y-Axis -->
            <line x1="80" y1="250" x2="80" y2="60" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="35" y="150" font-size="10" fill="#1E4A7A" font-weight="bold">y-axis</text>

            <!-- X-Axis -->
            <line x1="80" y1="250" x2="400" y2="250" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="240" y="272" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">x-axis</text>

            <!-- River curve y=x² (teal, curved) -->
            <path d="M 85 245 Q 115 205 150 155 Q 180 105 215 60"
                  fill="none" stroke="#3A8F84" stroke-width="3.5" stroke-linecap="round"/>

            <!-- Fence line y=2x (yellow, straight) -->
            <path d="M 85 245 L 215 60"
                  stroke="#E2A23B" stroke-width="3.5" stroke-linecap="round"/>

            <!-- Shaded farmable area -->
            <path d="M 85 245 Q 115 205 150 155 Q 180 105 215 60 L 215 60 L 85 245 Z"
                  fill="#51CF66" opacity="0.25" stroke="none"/>

            <!-- Corner points -->
            <!-- (0,0) -->
            <circle cx="85" cy="245" r="5" fill="none" stroke="#F39C12" stroke-width="2.5"/>
            <circle cx="85" cy="245" r="2.5" fill="#F39C12"/>
            <text x="60" y="265" text-anchor="middle" font-size="8" fill="#1E4A7A" font-weight="bold">(0,0)</text>

            <!-- (2,4) -->
            <circle cx="215" cy="60" r="5" fill="none" stroke="#F39C12" stroke-width="2.5"/>
            <circle cx="215" cy="60" r="2.5" fill="#F39C12"/>
            <text x="240" y="48" text-anchor="middle" font-size="8" fill="#1E4A7A" font-weight="bold">(2,4)</text>

            <!-- Curve labels with clear positioning -->
            <!-- River label on the left side -->
            <text x="100" y="155" font-size="9" fill="#3A8F84" font-weight="bold">RIVER:</text>
            <text x="100" y="167" font-size="9" fill="#3A8F84" font-weight="bold">y=x²</text>

            <!-- Fence label on the right side -->
            <text x="270" y="135" font-size="9" fill="#E2A23B" font-weight="bold">FENCE:</text>
            <text x="270" y="147" font-size="9" fill="#E2A23B" font-weight="bold">y=2x</text>

            <!-- Farm area label in center -->
            <text x="150" y="165" font-size="11" fill="#51CF66" font-weight="bold">FARM AREA</text>

            <!-- Solution Box -->
            <rect x="15" y="275" width="420" height="32" fill="#FFFFFF" stroke="#51CF66" stroke-width="1.5" rx="2"/>
            <text x="25" y="288" font-size="8" fill="#E2A23B" font-weight="bold">✓ Solution:</text>
            <text x="25" y="301" font-size="8" fill="#1E4A7A">Area = ∫₀²(2x−x²)dx = [x²−x³/3]₀² = 4−8/3 = 4/3 acres (farmable land)</text>
        </svg>`
    },
    {
        id: 14,
        title: "Numerical Applications",
        icon: "₹",
        marks: "~8-10 marks",
        concept: "Applies calculus and algebra to business: cost/revenue/profit functions, break-even analysis, marginal cost/revenue. Maximize profit where marginal revenue equals marginal cost.",
        tricks: [
            "Break-even: set Revenue = Cost and solve for x — no calculus needed",
            "'Marginal' always means 'differentiate' — MC = dC/dx, MR = dR/dx",
            "Average Cost = TC ÷ x. To minimise, differentiate AC and set to zero",
            "Maximum profit occurs exactly where Marginal Revenue = Marginal Cost"
        ],
        practice: [
            { q: "C(x)=x³/3−45x²+900x+36. Find MC when x=10", a: "MC = dC/dx = x²−90x+900. At x=10: MC = 100−900+900 = 100" },
            { q: "If AC=2x+5+18/x, find MC", a: "C = x·AC = 2x²+5x+18. MC = dC/dx = 4x+5" },
            { q: "Break-even point: C(x) = 500+20x, R(x) = 50x. Find x", a: "50x = 500+20x ⟹ 30x = 500 ⟹ x = 50/3 ≈ 16.67 units" },
            { q: "Profit = 100x−x², find maximum profit", a: "dP/dx = 100−2x = 0 ⟹ x=50. d²P/dx² = −2 < 0 (max). Max profit = 100(50)−50² = ₹2500" },
            { q: "MR = 50−2x, find revenue function", a: "R = ∫MR dx = ∫(50−2x)dx = 50x−x² + C. If R(0)=0, then C=0. R(x) = 50x−x²" }
        ],
        diagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="210" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">💼 Break-Even Analysis</text>

            <!-- Y-Axis -->
            <line x1="80" y1="220" x2="80" y2="40" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="45" y="120" font-size="9" fill="#1E4A7A" font-weight="bold">Money (₹)</text>

            <!-- X-Axis -->
            <line x1="80" y1="220" x2="400" y2="220" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="240" y="238" text-anchor="middle" font-size="9" fill="#1E4A7A" font-weight="bold">Units Produced</text>

            <!-- Cost line (teal) - starts at 500 (fixed cost) -->
            <line x1="80" y1="150" x2="340" y2="70" stroke="#3A8F84" stroke-width="3.5"/>
            <text x="145" y="95" font-size="9" fill="#3A8F84" font-weight="bold">COST</text>

            <!-- Revenue line (yellow/orange) - starts at 0 -->
            <line x1="80" y1="220" x2="340" y2="60" stroke="#E2A23B" stroke-width="3.5"/>
            <text x="270" y="120" font-size="9" fill="#E2A23B" font-weight="bold">REVENUE</text>

            <!-- Profit line (green) - appears above revenue -->
            <line x1="80" y1="215" x2="340" y2="50" stroke="#51CF66" stroke-width="3.5"/>
            <text x="310" y="90" font-size="9" fill="#51CF66" font-weight="bold">PROFIT</text>

            <!-- Loss region (dark red shading) -->
            <polygon points="80,220 210,130 210,150 80,150" fill="#8B3A3A" opacity="0.35"/>
            <text x="130" y="165" font-size="11" fill="#FF6B6B" font-weight="bold">LOSS</text>

            <!-- Break-even point -->
            <circle cx="210" cy="140" r="7" fill="none" stroke="#F39C12" stroke-width="3"/>
            <circle cx="210" cy="140" r="4" fill="#F39C12"/>

            <!-- Break-even dashed line to x-axis -->
            <line x1="210" y1="140" x2="210" y2="220" stroke="#F39C12" stroke-width="2" stroke-dasharray="4,4"/>

            <!-- Break-even label -->
            <text x="210" y="260" text-anchor="middle" font-size="10" fill="#F39C12" font-weight="bold">Break-even: 17 units</text>

            <!-- Key equations box -->
            <rect x="15" y="275" width="390" height="22" fill="#FFFFFF" stroke="#F39C12" stroke-width="1.5" rx="2"/>
            <text x="25" y="290" font-size="8" fill="#1E4A7A">Cost: ₹500 + ₹20/unit | Revenue: ₹50/unit | At 17 units: Both = ₹840</text>
        </svg>`
    },
    {
        id: 15,
        title: "Linear Regression",
        icon: "r",
        marks: "~6-10 marks",
        concept: "Regression finds relationships in real data: How does height affect weight? Does study hours predict exam scores? Real-life example: Student study hours vs marks. If correlation r=0.8 (strong), then predicting marks from study hours is reliable. Used in business (sales vs advertising spend), medicine (drug dosage vs patient recovery), weather (temperature vs ice cream sales). Master regression to make data-driven predictions.",
        tricks: [
            "b_yx = r×(σᵧ/σₓ) and b_xy = r×(σₓ/σᵧ) — memorise which ratio pairs with which",
            "Real-world: r=0.9 (strong); r=0.5 (moderate); r=0.2 (weak); r≈0 (no relationship)",
            "Regression line always passes through (x̄, ȳ) — use y−ȳ = b_yx(x−x̄) directly",
            "r² shows % of variation explained: r²=0.64 means 64% of variance in y is due to x"
        ],
        practice: [
            { q: "If b_yx=1.2 and b_xy=0.8, find r", a: "r = ±√(1.2×0.8) = ±√0.96 ≈ ±0.98. Positive slopes ⟹ r ≈ 0.98" },
            { q: "What does r=0 tell about regression lines?", a: "Lines are perpendicular — one horizontal, one vertical (no linear relationship)" },
            { q: "Study hours (x): 2, 3, 4, 5; Marks (y): 40, 50, 60, 70. Find regression line y on x", a: "x̄=3.5, ȳ=55. b_yx = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² = 30/5 = 6. Line: y−55 = 6(x−3.5) ⟹ y = 6x+34" },
            { q: "If r=0.9, what % of variance is explained?", a: "r² = (0.9)² = 0.81 = 81%. 81% of variance in y is explained by x" },
            { q: "Regression line: y = 2x+5. Predict y when x=10", a: "y = 2(10)+5 = 25" }
        ],
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="190" y="18" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">📚 Study Hours vs Exam Marks</text>

            <!-- Problem -->
            <text x="190" y="35" text-anchor="middle" font-size="10" fill="#1E4A7A">Can we predict exam marks from study hours? (r=0.85 strong correlation)</text>

            <!-- Axes -->
            <line x1="50" y1="200" x2="350" y2="200" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="50" x2="50" y2="200" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Labels -->
            <text x="15" y="120" font-size="9" fill="#1E4A7A">Marks</text>
            <text x="200" y="220" text-anchor="middle" font-size="9" fill="#1E4A7A">Study Hours</text>

            <!-- Data points (actual student data) -->
            <circle cx="75" cy="185" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="105" cy="160" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="135" cy="150" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="165" cy="125" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="195" cy="110" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="225" cy="95" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="255" cy="75" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="285" cy="60" r="3" fill="#E2A23B" opacity="0.7"/>
            <circle cx="315" cy="50" r="3" fill="#E2A23B" opacity="0.7"/>

            <!-- Best-fit regression line -->
            <line x1="60" y1="190" x2="330" y2="45" stroke="#3A8F84" stroke-width="3"/>
            <text x="270" y="80" font-size="10" fill="#3A8F84" font-weight="bold">y = 5 + 8.5x</text>

            <!-- Information Box -->
            <rect x="15" y="230" width="480" height="27" fill="#FFFFFF" stroke="#E2A23B" stroke-width="1" rx="3"/>
            <text x="25" y="245" font-size="9" fill="#E2A23B" font-weight="bold">Correlation r = 0.85 (Strong!)  |  r² = 0.72  →  72% of mark variation explained by study time</text>
        </svg>`
    },
    {
        id: 16,
        title: "Linear Programming",
        icon: "Z",
        marks: "~4-6 marks",
        concept: "Maximize profit or minimize cost under constraints. Real-life: **Factory**: Make chairs (profit ₹20 each, 2hrs each) and tables (₹30 each, 3hrs each) with 12hrs available. Maximize Z=20x+30y subject to 2x+3y≤12. Answer: Make 0 chairs, 4 tables = ₹120 profit (at corner point). **Airline**: Balance fuel costs vs speed. **Farm**: Allocate land between wheat (profit ₹5000/acre, needs 10hrs) and rice (₹4000/acre, 8hrs) with 100 acres, 900hrs available. Maximize profit. **Shipping**: Minimize cost shipping goods through network. Corner point check: Set all inequalities to equality, solve system, test all corners. Optimal always at a corner (never interior).",
        tricks: [
            "Optimal value ALWAYS at corner of feasible region — never check interior",
            "Shade feasible region by testing (0,0) in each inequality — if satisfied, shade toward origin",
            "List every corner point, substitute into Z, pick largest/smallest — no extra cleverness",
            "Don't forget x≥0, y≥0 — they usually contribute two corner points on axes"
        ],
        practice: [
            { q: "Set up: chairs earn ₹20, tables ₹30. Chair=2hrs, table=3hrs, 12hrs available", a: "Maximise Z=20x+30y subject to 2x+3y≤12, x,y≥0" },
            { q: "Why does optimum always occur at corner?", a: "Linear objective has no interior max/min. Moving in improving direction pushes to boundary, ultimately a corner." },
            { q: "Corner points of feasible region: (0,0), (4,0), (2,2), (0,5). Find max of Z=3x+2y", a: "At (0,0): Z=0. At (4,0): Z=12. At (2,2): Z=10. At (0,5): Z=10. Maximum = 12 at (4,0)" },
            { q: "Minimize cost C=5x+4y subject to x+y≥6, x,y≥0", a: "Corner points: (0,6), (6,0). At (0,6): C=24. At (6,0): C=30. Minimum = 24 at (0,6)" },
            { q: "A farmer has 10 acres. Wheat earns ₹50/acre, rice ₹60/acre. Wheat needs 5 hrs/acre, rice needs 8 hrs/acre. 70 hrs available. Maximize profit", a: "Maximize Z=50x+60y subject to x+y≤10, 5x+8y≤70, x,y≥0. Solve: Corner points (10,0), (0,10), (2,8). Max at (2,8): Z=100+480=580" }
        ],
        diagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Title Section -->
            <text x="210" y="16" text-anchor="middle" font-size="13" fill="#1E4A7A" font-weight="bold">🪑 Furniture Factory</text>

            <!-- Problem Statement -->
            <rect x="10" y="18" width="400" height="28" fill="#FFFFFF" stroke="#3A8F84" stroke-width="1" rx="2"/>
            <text x="20" y="32" font-size="7" fill="#1E4A7A"><tspan x="20">Maximize Profit = 20x + 30y</tspan></text>
            <text x="20" y="41" font-size="7" fill="#1E4A7A"><tspan x="20">Constraint: 2x + 3y ≤ 12 hours | x = chairs, y = tables</tspan></text>

            <!-- Main Graph Area -->
            <!-- Y-axis -->
            <line x1="70" y1="90" x2="70" y2="230" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="45" y="150" font-size="8" fill="#1E4A7A" font-weight="bold">Tables (y)</text>

            <!-- X-axis -->
            <line x1="70" y1="230" x2="350" y2="230" stroke="#A9AFC4" stroke-width="2.5"/>
            <text x="200" y="250" text-anchor="middle" font-size="8" fill="#1E4A7A" font-weight="bold">Chairs (x)</text>

            <!-- Axis markings for reference -->
            <text x="65" y="235" text-anchor="end" font-size="6" fill="#1E4A7A">0</text>
            <text x="65" y="170" text-anchor="end" font-size="6" fill="#1E4A7A">4</text>
            <text x="280" y="245" text-anchor="middle" font-size="6" fill="#1E4A7A">6</text>

            <!-- Constraint line: 2x + 3y = 12 -->
            <line x1="70" y1="150" x2="280" y2="90" stroke="#3A8F84" stroke-width="2.5" stroke-dasharray="3,3"/>
            <text x="140" y="105" font-size="8" fill="#3A8F84" font-weight="bold">2x+3y=12</text>

            <!-- Feasible Region (shaded area) -->
            <polygon points="70,230 70,150 280,90 280,230" fill="#51CF66" opacity="0.15"/>
            <text x="160" y="170" font-size="10" fill="#51CF66" font-weight="bold">Feasible Region ✓</text>

            <!-- Corner Point 1: (0,0) -->
            <circle cx="70" cy="230" r="4" fill="none" stroke="#B0B0B0" stroke-width="2"/>
            <circle cx="70" cy="230" r="2" fill="#B0B0B0"/>
            <text x="50" y="245" text-anchor="middle" font-size="7" fill="#1E4A7A" font-weight="bold">(0,0)</text>
            <text x="50" y="255" text-anchor="middle" font-size="7" fill="#1E4A7A">Z=0</text>

            <!-- Corner Point 2: (0,4) - OPTIMAL -->
            <circle cx="70" cy="150" r="5" fill="none" stroke="#F39C12" stroke-width="3"/>
            <circle cx="70" cy="150" r="2.5" fill="#F39C12"/>
            <text x="25" y="145" text-anchor="middle" font-size="7" fill="#1E4A7A" font-weight="bold">(0,4)</text>
            <text x="25" y="156" text-anchor="middle" font-size="8" fill="#F39C12" font-weight="bold">★ Z=120</text>

            <!-- Corner Point 3: (6,0) - OPTIMAL -->
            <circle cx="280" cy="90" r="5" fill="none" stroke="#F39C12" stroke-width="3"/>
            <circle cx="280" cy="90" r="2.5" fill="#F39C12"/>
            <text x="280" y="70" text-anchor="middle" font-size="7" fill="#1E4A7A" font-weight="bold">(6,0)</text>
            <text x="280" y="80" text-anchor="middle" font-size="8" fill="#F39C12" font-weight="bold">★ Z=120</text>

            <!-- Objective function direction arrow -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#FF6B6B"/>
                </marker>
            </defs>
            <path d="M 120 190 L 200 120" stroke="#FF6B6B" stroke-width="2.5" marker-end="url(#arrowhead)"/>
            <text x="145" y="175" font-size="7" fill="#FF6B6B" font-weight="bold">Maximize</text>

            <!-- Answer Box -->
            <rect x="10" y="265" width="400" height="28" fill="#FFFFFF" stroke="#F39C12" stroke-width="2" rx="2"/>
            <text x="20" y="278" font-size="8" fill="#F39C12" font-weight="bold">✓ ANSWER: Both points (0,4) and (6,0) give maximum profit of ₹120</text>
            <text x="20" y="289" font-size="7" fill="#1E4A7A">Make either 4 tables OR 6 chairs to maximize profit at ₹120</text>
        </svg>`
    },
    {
        id: 17,
        title: "Statistics & Data Analysis",
        icon: "📊",
        marks: "~8-10 marks",
        concept: "Statistics helps us understand real-world data by finding patterns and making sense of numbers. Real-life examples: Student test scores in a class (mean=75, most common=73), employee salaries (median salary tells fair wage), weather data (average temperature), sports statistics (batting average, win rate). Mean = average of all values. Median = middle value when sorted. Mode = most frequently occurring value. Range = highest − lowest. Standard Deviation = how spread out the data is.",
        tricks: [
            "Mean affected by outliers; use median for skewed data (like house prices with one mansion)",
            "Mode useful for categorical data: favorite color, popular shoe size",
            "For grouped data: use class midpoint × frequency, then divide by total frequency",
            "Variance = (σ²); Standard Deviation = √variance — gives 'typical distance from mean'"
        ],
        practice: [
            { q: "Class Test Scores: 45, 67, 72, 78, 82, 89, 95. Find Mean, Median, Mode, Range", a: "Mean = (45+67+72+78+82+89+95)/7 = 528/7 ≈ 75.4. Median = 78 (middle value). Mode = None (no repeats). Range = 95−45 = 50" },
            { q: "Monthly Salary Data: ₹25k, ₹28k, ₹32k, ₹35k, ₹250k (CEO). Which average best represents?", a: "Median = ₹32k (fair representation). Mean ≈ ₹74k (skewed by CEO salary, not representative of typical employee)" },
            { q: "Dataset: 2, 4, 4, 4, 5, 5, 7, 9. Find mean, median, mode", a: "Mean = 40/8 = 5. Median = (4+5)/2 = 4.5. Mode = 4 (appears 3 times)" },
            { q: "Variance of 1, 2, 3, 4, 5. Find standard deviation", a: "Mean = 3. Deviations squared: 4, 1, 0, 1, 4. Variance = 10/5 = 2. SD = √2 ≈ 1.41" },
            { q: "IQ scores normally distributed: mean=100, SD=15. What % score between 85 and 115?", a: "85 = 100−1(15) and 115 = 100+1(15). Within 1 SD of mean = 68% of data" },
            { q: "School Marks: 60, 65, 70, 75, 80. Calculate Variance and Standard Deviation", a: "Mean = 70. Variance = [(60-70)² + (65-70)² + (70-70)² + (75-70)² + (80-70)²]/5 = 250/5 = 50. SD = √50 ≈ 7.07" },
            { q: "Cricket: Batsman scores in last 10 matches: 45, 67, 52, 89, 34, 78, 92, 56, 71, 88. Find Average (Mean)", a: "Sum = 672. Average = 672/10 = 67.2 runs per match" }
        ],
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="210" y="20" text-anchor="middle" font-size="14" fill="#1E4A7A" font-weight="bold">Test Score Distribution</text>
            <text x="210" y="35" text-anchor="middle" font-size="11" fill="#E2A23B">Student Scores</text>

            <!-- Axes -->
            <line x1="50" y1="230" x2="410" y2="230" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="70" x2="50" y2="230" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Axis Labels -->
            <text x="400" y="250" font-size="10" fill="#1E4A7A" font-weight="bold">Scores</text>
            <text x="25" y="150" font-size="10" fill="#1E4A7A" font-weight="bold">Count</text>

            <!-- Bars for score distribution -->
            <!-- 50-60: 2 students -->
            <rect x="63" y="205" width="34" height="25" fill="#3A8F84" opacity="0.8"/>
            <text x="80" y="265" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">50-60</text>
            <text x="80" y="277" text-anchor="middle" font-size="8" fill="#E2A23B">2</text>

            <!-- 60-70: 4 students -->
            <rect x="111" y="175" width="34" height="55" fill="#3A8F84" opacity="0.8"/>
            <text x="128" y="265" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">60-70</text>
            <text x="128" y="277" text-anchor="middle" font-size="8" fill="#E2A23B">4</text>

            <!-- 70-80: 8 students (MODE) -->
            <rect x="159" y="90" width="34" height="140" fill="#E2A23B" opacity="0.9"/>
            <text x="176" y="265" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">70-80</text>
            <text x="176" y="277" text-anchor="middle" font-size="8" fill="#3A8F84" font-weight="bold">8 ⭐</text>

            <!-- 80-90: 5 students -->
            <rect x="207" y="144" width="34" height="86" fill="#3A8F84" opacity="0.8"/>
            <text x="224" y="265" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">80-90</text>
            <text x="224" y="277" text-anchor="middle" font-size="8" fill="#E2A23B">5</text>

            <!-- 90-100: 1 student -->
            <rect x="255" y="221" width="34" height="9" fill="#3A8F84" opacity="0.8"/>
            <text x="272" y="265" text-anchor="middle" font-size="10" fill="#1E4A7A" font-weight="bold">90-100</text>
            <text x="272" y="277" text-anchor="middle" font-size="8" fill="#E2A23B">1</text>

            <!-- Stats summary -->
            <text x="210" y="55" text-anchor="middle" font-size="10" fill="#1E4A7A">Mean≈73.5 | Median=75 | Mode=70-80 ⭐</text>
        </svg>`
    }
];

const allTricks = chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    tricks: ch.tricks
}));

const allQuestions = [
    {
        section: "Likely Q1 Style (2 marks each)",
        items: [
            { q: "If f: ℝ→ℝ, f(x)=3x−2 and g: ℝ→ℝ, g(x)=x²+1, find f∘g(x)", marks: "2", a: "f∘g(x) = f(x²+1) = 3(x²+1)−2 = 3x²+1" },
            { q: "Solve: cos(2 sin⁻¹x) = 1/2", marks: "2", a: "Let θ=sin⁻¹x. cos(2θ)=1−2sin²θ=1−2x²=1/2 ⟹ x²=1/4 ⟹ x=±1/2" }
        ]
    },
    {
        section: "Section A — 4-6 Mark Questions",
        items: [
            { q: "Solve using matrix method: 1/x+1/y+1/z=6, 1/x−1/y+1/z=2, 1/x+1/y−1/z=0", marks: "6", a: "Substitute u=1/x, v=1/y, w=1/z. Solve system to get u=1, v=2, w=3. Thus x=1, y=1/2, z=1/3" },
            { q: "Find k so that f(x)=kx² for x≤2, f(x)=3 for x>2, is continuous at x=2", marks: "4", a: "For continuity: lim(x→2⁻)f(x)=f(2)=lim(x→2⁺)f(x). LHL=4k, f(2)=4k, RHL=3. Set 4k=3 ⟹ k=3/4" }
        ]
    },
    {
        section: "Practice Questions & Solutions",
        items: [
            { q: "Find area bounded by y=x² and y=x", marks: "6", a: "Intersection: x=0,1. Area=∫₀¹(x−x²)dx=[x²/2−x³/3]₀¹=1/6" },
            { q: "Maximize Z=20x+30y subject to 2x+3y≤12, x,y≥0", marks: "4", a: "Corner points: (0,0)→0, (6,0)→120, (0,4)→120. Maximum=120" }
        ]
    }
];
