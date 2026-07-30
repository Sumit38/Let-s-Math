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
            { q: "If f(x) = 2x+3 and g(x) = x−1, find (f∘g)(x)", a: "(f∘g)(x) = f(g(x)) = f(x−1) = 2(x−1)+3 = 2x+1" }
        ],
        diagram: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
            <!-- Domain Box -->
            <rect x="30" y="60" width="140" height="160" fill="none" stroke="#3A8F84" stroke-width="3" rx="8"/>
            <text x="100" y="35" text-anchor="middle" font-size="13" fill="#A9AFC4" font-weight="bold">Domain</text>
            <text x="100" y="85" text-anchor="middle" font-size="16" fill="#F1ECDD" font-weight="bold">A</text>

            <!-- Domain Elements -->
            <circle cx="80" cy="110" r="6" fill="#E2A23B"/>
            <circle cx="80" cy="160" r="6" fill="#E2A23B"/>
            <circle cx="80" cy="210" r="6" fill="#E2A23B"/>

            <!-- Mapping Arrows -->
            <line x1="86" y1="110" x2="514" y2="110" stroke="#E2A23B" stroke-width="2.5"/>
            <line x1="86" y1="160" x2="514" y2="160" stroke="#E2A23B" stroke-width="2.5"/>
            <line x1="86" y1="210" x2="514" y2="210" stroke="#E2A23B" stroke-width="2.5"/>

            <!-- Arrow tips -->
            <polygon points="514,110 508,106 508,114" fill="#E2A23B"/>
            <polygon points="514,160 508,156 508,164" fill="#E2A23B"/>
            <polygon points="514,210 508,206 508,214" fill="#E2A23B"/>

            <!-- Codomain Box -->
            <rect x="430" y="60" width="140" height="160" fill="none" stroke="#3A8F84" stroke-width="3" rx="8"/>
            <text x="500" y="35" text-anchor="middle" font-size="13" fill="#A9AFC4" font-weight="bold">Codomain</text>
            <text x="500" y="85" text-anchor="middle" font-size="16" fill="#F1ECDD" font-weight="bold">B</text>

            <!-- Codomain Elements -->
            <circle cx="520" cy="110" r="6" fill="#3A8F84"/>
            <circle cx="520" cy="160" r="6" fill="#3A8F84"/>
            <circle cx="520" cy="210" r="6" fill="#3A8F84"/>

            <!-- Description -->
            <text x="300" y="270" text-anchor="middle" font-size="15" fill="#F1ECDD" font-weight="bold">Function: f(x) = x</text>
            <text x="300" y="295" text-anchor="middle" font-size="11" fill="#A9AFC4">✓ Each element in A maps to exactly ONE element in B</text>
            <text x="300" y="315" text-anchor="middle" font-size="11" fill="#A9AFC4">✓ This is ONE-ONE and ONTO (Bijective Function)</text>
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
            { q: "Evaluate: sin⁻¹(1/2) + cos⁻¹(1/2)", a: "Using sin⁻¹x + cos⁻¹x = π/2 for x=1/2: Answer = π/2" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="250" x2="350" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="250" x2="50" y2="50" stroke="#A9AFC4" stroke-width="2"/>

            <path d="M 50 250 Q 150 100 250 50 Q 300 30 350 50" fill="none" stroke="#3A8F84" stroke-width="3"/>
            <path d="M 50 250 Q 150 100 250 50 Q 300 30 350 50" fill="none" stroke="#E2A23B" stroke-width="1" stroke-dasharray="5,5" opacity="0.5"/>

            <text x="50" y="270" font-size="12" fill="#F1ECDD">y = sin⁻¹(x)</text>
            <text x="200" y="30" font-size="12" fill="#3A8F84">Principal Range: [-π/2, π/2]</text>
            <text x="200" y="280" font-size="10" fill="#A9AFC4">Domain: [-1, 1]</text>
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
            { q: "Show (A + Aᵀ) is symmetric for A = [[1,2],[3,4]]", a: "A = [[1,2],[3,4]], Aᵀ = [[1,3],[2,4]]. A+Aᵀ = [[2,5],[5,8]]. (A+Aᵀ)ᵀ = [[2,5],[5,8]] ✓ Symmetric" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(50, 50)">
                <rect x="0" y="0" width="120" height="80" fill="none" stroke="#3A8F84" stroke-width="2"/>
                <text x="20" y="30" font-size="16" fill="#E2A23B" font-weight="bold">2</text>
                <text x="20" y="60" font-size="16" fill="#E2A23B" font-weight="bold">1</text>
                <text x="70" y="30" font-size="16" fill="#E2A23B" font-weight="bold">1</text>
                <text x="70" y="60" font-size="16" fill="#E2A23B" font-weight="bold">1</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#F1ECDD">A = [[2,1],[1,1]]</text>
            </g>

            <text x="200" y="30" font-size="14" fill="#F1ECDD" font-weight="bold">×</text>

            <g transform="translate(230, 50)">
                <rect x="0" y="0" width="120" height="80" fill="none" stroke="#3A8F84" stroke-width="2"/>
                <text x="20" y="30" font-size="16" fill="#E2A23B" font-weight="bold">x</text>
                <text x="20" y="60" font-size="16" fill="#E2A23B" font-weight="bold">y</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#F1ECDD">X = [[x],[y]]</text>
            </g>

            <text x="200" y="160" font-size="14" fill="#F1ECDD" font-weight="bold">=</text>

            <g transform="translate(230, 140)">
                <rect x="0" y="0" width="120" height="80" fill="none" stroke="#3A8F84" stroke-width="2"/>
                <text x="20" y="30" font-size="16" fill="#E2A23B" font-weight="bold">b₁</text>
                <text x="20" y="60" font-size="16" fill="#E2A23B" font-weight="bold">b₂</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#F1ECDD">B = [[b₁],[b₂]]</text>
            </g>

            <text x="200" y="280" text-anchor="middle" font-size="11" fill="#A9AFC4">Solve: X = A⁻¹B</text>
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
            { q: "Explain why det with two identical rows equals zero", a: "Swapping identical rows flips the sign: det = −det, so 2·det = 0, thus det = 0" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="30" text-anchor="middle" font-size="14" fill="#F1ECDD" font-weight="bold">For a 2×2 Matrix:</text>

            <g transform="translate(80, 50)">
                <text x="0" y="0" font-size="12" fill="#F1ECDD">|</text>
                <text x="10" y="0" font-size="12" fill="#E2A23B">a  b</text>
                <text x="10" y="25" font-size="12" fill="#E2A23B">c  d</text>
                <text x="50" y="12" font-size="12" fill="#F1ECDD">|</text>
            </g>

            <text x="130" y="100" font-size="14" fill="#F1ECDD" font-weight="bold">=</text>

            <text x="160" y="100" font-size="16" fill="#3A8F84" font-weight="bold">ad − bc</text>

            <path d="M 100 60 L 140 85" stroke="#3A8F84" stroke-width="2" stroke-dasharray="3,3"/>
            <path d="M 140 60 L 100 85" stroke="#E2A23B" stroke-width="2" stroke-dasharray="3,3"/>

            <text x="200" y="200" text-anchor="middle" font-size="12" fill="#F1ECDD">Example: |2 3; 4 1|</text>
            <text x="200" y="225" text-anchor="middle" font-size="12" fill="#A9AFC4">= (2×1) − (3×4) = 2 − 12 = −10</text>

            <path d="M 180 160 L 200 180" stroke="#3A8F84" stroke-width="2" stroke-dasharray="3,3"/>
            <path d="M 220 160 L 200 180" stroke="#E2A23B" stroke-width="2" stroke-dasharray="3,3"/>
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
            { q: "Is f(x) = |x| differentiable at x = 0?", a: "LHD = −1, RHD = +1. Since LHD ≠ RHD, not differentiable at 0 (but continuous)" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="250" x2="350" y2="250" stroke="#A9AFC4" stroke-width="1"/>
            <line x1="50" y1="50" x2="50" y2="250" stroke="#A9AFC4" stroke-width="1"/>

            <path d="M 50 200 Q 120 80 200 150 Q 280 200 350 100" fill="none" stroke="#3A8F84" stroke-width="3"/>

            <circle cx="200" cy="150" r="4" fill="#E2A23B"/>
            <text x="200" y="170" text-anchor="middle" font-size="11" fill="#F1ECDD">Differentiable</text>
            <text x="200" y="185" text-anchor="middle" font-size="10" fill="#A9AFC4">(smooth curve)</text>

            <line x1="100" y1="250" x2="100" y2="100" stroke="#3A8F84" stroke-width="2"/>
            <line x1="100" y1="100" x2="100" y2="50" stroke="#3A8F84" stroke-width="2"/>
            <circle cx="100" cy="100" r="4" fill="#E2A23B"/>
            <text x="100" y="20" text-anchor="middle" font-size="11" fill="#F1ECDD">Continuous</text>
            <text x="100" y="35" text-anchor="middle" font-size="10" fill="#A9AFC4">(corner)</text>
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
            { q: "Box with volume 4096 cm³, minimize surface area", a: "V=x²h=4096⟹h=4096/x². S=2x²+4xh=2x²+16384/x. dS/dx=4x−16384/x²=0⟹x=16. Cube 16×16×16" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="250" x2="370" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="30" y1="250" x2="30" y2="30" stroke="#A9AFC4" stroke-width="2"/>

            <path d="M 50 200 Q 100 100 150 80 Q 200 100 250 200 Q 300 150 350 100" fill="none" stroke="#3A8F84" stroke-width="3"/>

            <line x1="150" y1="80" x2="150" y2="250" stroke="#E2A23B" stroke-width="1" stroke-dasharray="3,3"/>
            <circle cx="150" cy="80" r="5" fill="#E2A23B"/>
            <text x="150" y="270" text-anchor="middle" font-size="11" fill="#F1ECDD">f'(x)=0</text>
            <text x="150" y="285" text-anchor="middle" font-size="10" fill="#A9AFC4">Maximum</text>

            <line x1="250" y1="200" x2="250" y2="250" stroke="#3A8F84" stroke-width="1" stroke-dasharray="3,3"/>
            <circle cx="250" cy="200" r="5" fill="#3A8F84"/>
            <text x="250" y="270" text-anchor="middle" font-size="11" fill="#F1ECDD">f'(x)=0</text>
            <text x="250" y="285" text-anchor="middle" font-size="10" fill="#A9AFC4">Minimum</text>
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
            { q: "Evaluate: ∫sec²x/(1+tan²x) dx", a: "Since 1+tan²x = sec²x, integrand = 1. ∫1 dx = x + C" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="40" font-size="14" fill="#F1ECDD" font-weight="bold">Differentiation ⟺ Integration</text>

            <g transform="translate(50, 80)">
                <text x="0" y="0" font-size="12" fill="#E2A23B" font-weight="bold">f(x)</text>
                <text x="0" y="40" font-size="12" fill="#3A8F84" font-weight="bold">F(x) + C</text>
                <path d="M 30 10 L 60 10" stroke="#E2A23B" stroke-width="2" marker-end="url(#arrowhead)"/>
                <path d="M 60 30 L 30 30" stroke="#3A8F84" stroke-width="2" marker-end="url(#arrowhead2)"/>
                <text x="70" y="15" font-size="11" fill="#E2A23B">Differentiate</text>
                <text x="70" y="35" font-size="11" fill="#3A8F84">Integrate</text>
            </g>

            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="#E2A23B"/>
                </marker>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="#3A8F84"/>
                </marker>
            </defs>

            <text x="200" y="120" font-size="13" fill="#F1ECDD">∫sin(x) dx = −cos(x) + C</text>
            <text x="200" y="150" font-size="13" fill="#F1ECDD">∫cos(x) dx = sin(x) + C</text>
            <text x="200" y="180" font-size="13" fill="#F1ECDD">∫eˣ dx = eˣ + C</text>
            <text x="200" y="210" font-size="13" fill="#F1ECDD">∫1/x dx = ln|x| + C</text>
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
            { q: "Evaluate: ∫₀^(π/2) sin²x dx", a: "Using sin²x = (1−cos2x)/2: ∫₀^(π/2) (1−cos2x)/2 dx = [x/2 − sin2x/4]₀^(π/2) = π/4" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="250" x2="350" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="50" x2="50" y2="250" stroke="#A9AFC4" stroke-width="2"/>

            <path d="M 80 200 Q 140 100 200 80 Q 260 100 320 200" fill="url(#grad)" opacity="0.6"/>
            <path d="M 80 200 Q 140 100 200 80 Q 260 100 320 200" fill="none" stroke="#3A8F84" stroke-width="3"/>

            <line x1="80" y1="250" x2="80" y2="200" stroke="#E2A23B" stroke-width="2" stroke-dasharray="3,3"/>
            <line x1="320" y1="250" x2="320" y2="200" stroke="#E2A23B" stroke-width="2" stroke-dasharray="3,3"/>

            <text x="80" y="270" text-anchor="middle" font-size="12" fill="#F1ECDD">a</text>
            <text x="320" y="270" text-anchor="middle" font-size="12" fill="#F1ECDD">b</text>

            <text x="200" y="40" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">∫ₐᵇ f(x) dx = Area</text>

            <defs>
                <linearGradient id="grad">
                    <stop offset="0%" style="stop-color:#3A8F84;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#E2A23B;stop-opacity:0.3" />
                </linearGradient>
            </defs>
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
            { q: "Order and degree of (d²y/dx²)³ + dy/dx = x", a: "Order = 2 (highest derivative is d²y/dx²). Degree = 3 (power of d²y/dx²)" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="250" x2="350" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="50" y1="50" x2="50" y2="250" stroke="#A9AFC4" stroke-width="2"/>

            <path d="M 60 240 Q 100 150 150 100 Q 180 80 200 80" fill="none" stroke="#E2A23B" stroke-width="2"/>
            <path d="M 60 230 Q 110 140 160 90 Q 190 70 210 70" fill="none" stroke="#3A8F84" stroke-width="2"/>
            <path d="M 60 220 Q 120 130 170 80 Q 200 60 220 60" fill="none" stroke="#teal" stroke-width="2" opacity="0.7"/>

            <text x="200" y="30" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">General Solution: y = f(x, C)</text>
            <text x="200" y="280" text-anchor="middle" font-size="11" fill="#A9AFC4">Family of curves with different constants C</text>
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
            { q: "Playing Cards: P(drawing a King OR a Queen)?", a: "Kings = 4, Queens = 4, Total favorable = 8. P(King or Queen) = 8/52 = 2/13 ≈ 15.4%" },
            { q: "Two dice: Find P(sum=7 | at least one 4)", a: "Outcomes with at least one 4: 11 total. Of these, (3,4) and (4,3) sum to 7: 2 outcomes. P = 2/11" },
            { q: "Coin tossed 5 times. Find P(exactly 3 heads)", a: "C(5,3) × (0.5)⁵ = 10/32 = 5/16" }
        ],
        diagram: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Axes -->
            <line x1="80" y1="280" x2="580" y2="280" stroke="#A9AFC4" stroke-width="3"/>
            <line x1="80" y1="40" x2="80" y2="280" stroke="#A9AFC4" stroke-width="3"/>

            <!-- Y-axis labels -->
            <text x="70" y="285" text-anchor="end" font-size="11" fill="#A9AFC4">0</text>
            <text x="70" y="215" text-anchor="end" font-size="11" fill="#A9AFC4">0.25</text>
            <text x="70" y="145" text-anchor="end" font-size="11" fill="#A9AFC4">0.50</text>

            <!-- Grid lines (light) -->
            <line x1="80" y1="215" x2="580" y2="215" stroke="#A9AFC4" stroke-width="0.5" opacity="0.3"/>
            <line x1="80" y1="145" x2="580" y2="145" stroke="#A9AFC4" stroke-width="0.5" opacity="0.3"/>

            <!-- Bars -->
            <rect x="100" y="258" width="45" height="22" fill="#3A8F84" rx="3"/>
            <rect x="165" y="195" width="45" height="85" fill="#3A8F84" rx="3"/>
            <rect x="230" y="90" width="45" height="190" fill="#E2A23B" rx="3"/>
            <rect x="295" y="90" width="45" height="190" fill="#E2A23B" rx="3"/>
            <rect x="360" y="195" width="45" height="85" fill="#3A8F84" rx="3"/>
            <rect x="425" y="258" width="45" height="22" fill="#3A8F84" rx="3"/>

            <!-- X-axis labels (Number of Heads) -->
            <text x="122" y="320" text-anchor="middle" font-size="13" fill="#F1ECDD" font-weight="bold">0</text>
            <text x="187" y="320" text-anchor="middle" font-size="13" fill="#F1ECDD" font-weight="bold">1</text>
            <text x="252" y="320" text-anchor="middle" font-size="13" fill="#F1ECDD" font-weight="bold">2</text>
            <text x="317" y="320" text-anchor="middle" font-size="13" fill="#F1ECDD" font-weight="bold">3</text>
            <text x="382" y="320" text-anchor="middle" font-size="13" fill="#F1ECDD" font-weight="bold">4</text>
            <text x="447" y="320" text-anchor="middle" font-size="13" fill="#F1ECDD" font-weight="bold">5</text>

            <!-- Probability labels on bars -->
            <text x="122" y="295" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">1/32</text>
            <text x="187" y="260" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">5/32</text>
            <text x="252" y="75" text-anchor="middle" font-size="10" fill="#ink" font-weight="bold">10/32 ⭐</text>
            <text x="317" y="75" text-anchor="middle" font-size="10" fill="#ink" font-weight="bold">10/32 ⭐</text>
            <text x="382" y="260" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">5/32</text>
            <text x="447" y="295" text-anchor="middle" font-size="9" fill="#E2A23B" font-weight="bold">1/32</text>

            <!-- Axis titles -->
            <text x="560" y="305" font-size="12" fill="#A9AFC4" font-weight="bold">Num</text>
            <text x="25" y="160" font-size="12" fill="#A9AFC4" font-weight="bold">Probability</text>

            <!-- Title and subtitle -->
            <text x="300" y="25" text-anchor="middle" font-size="14" fill="#F1ECDD" font-weight="bold">Binomial Probability: n=5, p=0.5</text>

            <!-- Footer info -->
            <text x="300" y="365" text-anchor="middle" font-size="10" fill="#A9AFC4">Peak at X=2 and X=3 (31.25% each) • Symmetrical distribution</text>
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
            { q: "Find a⃗×b⃗ for a⃗=(1,0,0), b⃗=(0,1,0)", a: "a⃗×b⃗ = (0·0−0·1, 0·0−1·0, 1·1−0·0) = (0, 0, 1) = k̂ direction" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="250" x2="350" y2="250" stroke="#A9AFC4" stroke-width="1"/>
            <line x1="50" y1="250" x2="50" y2="50" stroke="#A9AFC4" stroke-width="1"/>

            <line x1="50" y1="250" x2="220" y2="120" stroke="#3A8F84" stroke-width="3" marker-end="url(#arrowblue)"/>
            <line x1="50" y1="250" x2="280" y2="160" stroke="#E2A23B" stroke-width="3" marker-end="url(#arrowyellow)"/>

            <text x="135" y="200" font-size="12" fill="#3A8F84" font-weight="bold">a⃗</text>
            <text x="180" y="290" font-size="12" fill="#E2A23B" font-weight="bold">b⃗</text>

            <path d="M 100 220 A 60 60 0 0 0 140 180" fill="none" stroke="#text-muted" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="105" y="210" font-size="11" fill="#A9AFC4">θ</text>

            <text x="200" y="40" text-anchor="middle" font-size="12" fill="#F1ECDD">cos(θ) = (a⃗·b⃗)/(|a⃗||b⃗|)</text>

            <defs>
                <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <path d="M 0 0 L 10 3 L 0 6 Z" fill="#3A8F84"/>
                </marker>
                <marker id="arrowyellow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
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
            { q: "Distance of (2,3,−5) from plane x+2y−2z−9=0", a: "|2+6+10−9|/√(1+4+4) = 9/3 = 3" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="30" text-anchor="middle" font-size="14" fill="#F1ECDD" font-weight="bold">3D Coordinate System</text>

            <line x1="100" y1="200" x2="100" y2="80" stroke="#3A8F84" stroke-width="2"/>
            <line x1="100" y1="200" x2="200" y2="200" stroke="#3A8F84" stroke-width="2"/>
            <line x1="100" y1="200" x2="50" y2="240" stroke="#3A8F84" stroke-width="2"/>

            <text x="105" y="75" font-size="12" fill="#3A8F84" font-weight="bold">z</text>
            <text x="205" y="205" font-size="12" fill="#3A8F84" font-weight="bold">x</text>
            <text x="35" y="250" font-size="12" fill="#3A8F84" font-weight="bold">y</text>

            <circle cx="130" cy="160" r="5" fill="#E2A23B"/>
            <text x="140" y="165" font-size="12" fill="#F1ECDD">Point P(x,y,z)</text>

            <line x1="100" y1="200" x2="130" y2="160" stroke="#E2A23B" stroke-width="2" marker-end="url(#arrowyel)"/>

            <defs>
                <marker id="arrowyel" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <path d="M 0 0 L 10 3 L 0 6 Z" fill="#E2A23B"/>
                </marker>
            </defs>
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
            { q: "Set up integral for area under y=sinx from 0 to π", a: "∫₀^π sinx dx (evaluates to 2)" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="250" x2="360" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="40" y1="250" x2="40" y2="50" stroke="#A9AFC4" stroke-width="2"/>

            <path d="M 80 220 Q 120 140 160 100 Q 200 80 240 100 Q 280 140 320 220" fill="none" stroke="#3A8F84" stroke-width="2"/>
            <path d="M 80 220 L 320 80" stroke="#E2A23B" stroke-width="2"/>

            <path d="M 80 220 L 160 100 L 320 80 Z" fill="#3A8F84" opacity="0.3"/>

            <text x="200" y="35" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">Area between curves</text>
            <text x="150" y="270" font-size="11" fill="#F1ECDD">Upper curve</text>
            <text x="300" y="270" font-size="11" fill="#E2A23B">Lower curve</text>
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
            { q: "If AC=2x+5+18/x, find MC", a: "C = x·AC = 2x²+5x+18. MC = dC/dx = 4x+5" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="250" x2="360" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="40" y1="250" x2="40" y2="30" stroke="#A9AFC4" stroke-width="2"/>

            <line x1="80" y1="220" x2="320" y2="80" stroke="#3A8F84" stroke-width="2.5" marker-end="url(#arrowrev)"/>
            <path d="M 100 210 Q 160 120 240 100 Q 300 110 340 140" fill="none" stroke="#E2A23B" stroke-width="2.5"/>

            <circle cx="200" cy="130" r="5" fill="#danger" fill-opacity="0.7"/>

            <text x="65" y="270" font-size="11" fill="#F1ECDD">Quantity</text>
            <text x="15" y="40" font-size="11" fill="#F1ECDD">₹ Value</text>
            <text x="200" y="20" text-anchor="middle" font-size="12" fill="#F1ECDD">Cost vs Revenue</text>
            <text x="220" y="135" font-size="11" fill="#danger" font-weight="bold">Break-even</text>

            <defs>
                <marker id="arrowrev" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <path d="M 0 0 L 10 3 L 0 6 Z" fill="#3A8F84"/>
                </marker>
            </defs>
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
            { q: "What does r=0 tell about regression lines?", a: "Lines are perpendicular — one horizontal, one vertical (no linear relationship)" }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="250" x2="360" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="40" y1="250" x2="40" y2="50" stroke="#A9AFC4" stroke-width="2"/>

            <g opacity="0.5">
                <circle cx="80" cy="220" r="4" fill="#E2A23B"/>
                <circle cx="120" cy="180" r="4" fill="#E2A23B"/>
                <circle cx="160" cy="160" r="4" fill="#E2A23B"/>
                <circle cx="200" cy="130" r="4" fill="#E2A23B"/>
                <circle cx="240" cy="100" r="4" fill="#E2A23B"/>
                <circle cx="280" cy="80" r="4" fill="#E2A23B"/>
                <circle cx="320" cy="50" r="4" fill="#E2A23B"/>
            </g>

            <line x1="60" y1="240" x2="340" y2="60" stroke="#3A8F84" stroke-width="2.5"/>

            <text x="200" y="35" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">Best-fit regression line</text>
            <text x="50" y="270" font-size="11" fill="#F1ECDD">x (Independent)</text>
            <text x="20" y="50" font-size="11" fill="#F1ECDD">y (Dependent)</text>
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
            { q: "Why does optimum always occur at corner?", a: "Linear objective has no interior max/min. Moving in improving direction pushes to boundary, ultimately a corner." }
        ],
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="250" x2="360" y2="250" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="40" y1="250" x2="40" y2="50" stroke="#A9AFC4" stroke-width="2"/>

            <polygon points="50,250 50,120 200,50 320,180 320,250" fill="#3A8F84" opacity="0.3" stroke="#3A8F84" stroke-width="2"/>

            <circle cx="50" cy="250" r="6" fill="#E2A23B"/>
            <circle cx="50" cy="120" r="6" fill="#E2A23B"/>
            <circle cx="200" cy="50" r="6" fill="#E2A23B"/>
            <circle cx="320" cy="180" r="6" fill="#E2A23B"/>
            <circle cx="320" cy="250" r="6" fill="#E2A23B"/>

            <text x="200" y="35" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">Feasible Region</text>
            <text x="200" y="280" text-anchor="middle" font-size="11" fill="#A9AFC4">Optimal solution at corner point</text>
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
            { q: "School Marks: 60, 65, 70, 75, 80. Calculate Variance and Standard Deviation", a: "Mean = 70. Variance = [(60-70)² + (65-70)² + (70-70)² + (75-70)² + (80-70)²]/5 = 250/5 = 50. SD = √50 ≈ 7.07" },
            { q: "Cricket: Batsman scores in last 10 matches: 45, 67, 52, 89, 34, 78, 92, 56, 71, 88. Find Average (Mean)", a: "Sum = 672. Average = 672/10 = 67.2 runs per match" }
        ],
        diagram: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="250" y="25" text-anchor="middle" font-size="16" fill="#F1ECDD" font-weight="bold">Real-World Statistics Example</text>
            <text x="250" y="45" text-anchor="middle" font-size="12" fill="#E2A23B">Student Test Scores (Out of 100)</text>

            <!-- Axes -->
            <line x1="60" y1="280" x2="480" y2="280" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="60" y1="80" x2="60" y2="280" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Axis Labels -->
            <text x="490" y="300" font-size="11" fill="#A9AFC4" font-weight="bold">Score Ranges</text>
            <text x="30" y="180" font-size="11" fill="#A9AFC4" font-weight="bold">Count</text>

            <!-- Bars for score distribution -->
            <!-- 50-60: 2 students -->
            <rect x="75" y="250" width="40" height="30" fill="#3A8F84" opacity="0.8"/>
            <text x="95" y="315" text-anchor="middle" font-size="11" fill="#F1ECDD" font-weight="bold">50-60</text>
            <text x="95" y="330" text-anchor="middle" font-size="10" fill="#E2A23B">2 students</text>

            <!-- 60-70: 4 students -->
            <rect x="130" y="210" width="40" height="70" fill="#3A8F84" opacity="0.8"/>
            <text x="150" y="315" text-anchor="middle" font-size="11" fill="#F1ECDD" font-weight="bold">60-70</text>
            <text x="150" y="330" text-anchor="middle" font-size="10" fill="#E2A23B">4 students</text>

            <!-- 70-80: 8 students (MODE) -->
            <rect x="185" y="110" width="40" height="170" fill="#E2A23B" opacity="0.9"/>
            <text x="205" y="315" text-anchor="middle" font-size="11" fill="#F1ECDD" font-weight="bold">70-80</text>
            <text x="205" y="330" text-anchor="middle" font-size="10" fill="#3A8F84" font-weight="bold">8 students ⭐</text>

            <!-- 80-90: 5 students -->
            <rect x="240" y="175" width="40" height="105" fill="#3A8F84" opacity="0.8"/>
            <text x="260" y="315" text-anchor="middle" font-size="11" fill="#F1ECDD" font-weight="bold">80-90</text>
            <text x="260" y="330" text-anchor="middle" font-size="10" fill="#E2A23B">5 students</text>

            <!-- 90-100: 1 student -->
            <rect x="295" y="265" width="40" height="15" fill="#3A8F84" opacity="0.8"/>
            <text x="315" y="315" text-anchor="middle" font-size="11" fill="#F1ECDD" font-weight="bold">90-100</text>
            <text x="315" y="330" text-anchor="middle" font-size="10" fill="#E2A23B">1 student</text>

            <!-- Statistics Box -->
            <rect x="10" y="350" width="480" height="40" fill="#1F2740" stroke="#E2A23B" stroke-width="2" rx="5"/>
            <text x="20" y="370" font-size="10" fill="#F1ECDD">📊 Statistics: Mean ≈ 73.5 | Median = 75 | Mode = 70-80 range | Most students score between 70-80</text>
            <text x="20" y="385" font-size="9" fill="#A9AFC4">✓ This data shows the class performs fairly well with concentration around 73-75 marks</text>
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
