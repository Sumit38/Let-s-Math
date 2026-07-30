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
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="50" width="80" height="120" fill="none" stroke="#3A8F84" stroke-width="2" rx="5"/>
            <text x="60" y="100" text-anchor="middle" font-size="12" fill="#F1ECDD">A</text>
            <text x="60" y="70" text-anchor="middle" font-size="10" fill="#A9AFC4">Domain</text>

            <circle cx="45" cy="100" r="5" fill="#E2A23B"/>
            <circle cx="45" cy="130" r="5" fill="#E2A23B"/>
            <circle cx="45" cy="160" r="5" fill="#E2A23B"/>

            <rect x="300" y="50" width="80" height="120" fill="none" stroke="#3A8F84" stroke-width="2" rx="5"/>
            <text x="340" y="100" text-anchor="middle" font-size="12" fill="#F1ECDD">B</text>
            <text x="340" y="70" text-anchor="middle" font-size="10" fill="#A9AFC4">Codomain</text>

            <circle cx="325" cy="100" r="5" fill="#3A8F84"/>
            <circle cx="325" cy="130" r="5" fill="#3A8F84"/>
            <circle cx="325" cy="160" r="5" fill="#3A8F84"/>

            <line x1="50" y1="100" x2="320" y2="100" stroke="#E2A23B" stroke-width="2"/>
            <line x1="50" y1="130" x2="320" y2="130" stroke="#E2A23B" stroke-width="2"/>
            <line x1="50" y1="160" x2="320" y2="160" stroke="#E2A23B" stroke-width="2"/>

            <text x="200" y="210" text-anchor="middle" font-size="14" fill="#F1ECDD" font-weight="bold">Function: f(x) = x</text>
            <text x="200" y="235" text-anchor="middle" font-size="11" fill="#A9AFC4">Each element in A maps to exactly one element in B</text>
            <text x="200" y="255" text-anchor="middle" font-size="11" fill="#A9AFC4">This is ONE-ONE and ONTO (bijective)</text>
        </svg>`
    },
    {
        id: 2,
        title: "Inverse Trigonometric Functions",
        icon: "θ",
        marks: "~4 marks",
        concept: "Inverse trig functions undo the trig ratios, restricted to principal value ranges. Master sin⁻¹, cos⁻¹, tan⁻¹, and their key identities. Understanding principal values and domain restrictions is essential.",
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
        concept: "Matrices organize numbers into rows and columns. Master matrix operations (addition, multiplication), determinants, and the matrix method: AX=B solves to X=A⁻¹B. Essential for solving systems of equations.",
        tricks: [
            "For repeating patterns like 1/x, 1/y, 1/z — substitute u=1/x first to linearize",
            "2×2 inverse shortcut: swap diagonal entries, negate off-diagonal, divide by determinant",
            "Matrix invertible only if det(A)≠0 — always check before hunting for A⁻¹",
            "(A+Aᵀ) is always symmetric, (A−Aᵀ) is always skew-symmetric"
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
        concept: "Determinants compute to a single number from a square matrix. Essential for checking invertibility, finding areas of triangles, and solving systems. Master row operations and expansion methods.",
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
        concept: "Continuity: function value matches the limit. Differentiability: well-defined slope (derivative) exists. Key insight: differentiability ⟹ continuity, but not reverse. Corners and cusps are continuous but not differentiable.",
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
        concept: "Derivatives measure rate of change. Apply to find tangent lines, identify where functions increase/decrease, locate maxima/minima, and solve related-rates problems like ladders falling against walls.",
        tricks: [
            "Increasing where f'(x)>0, decreasing where f'(x)<0 — factor f'(x) and solve inequality",
            "Critical points: f'(x)=0. Then f''(x)<0⟹max, f''(x)>0⟹min",
            "Related-rates (ladder, cone): write connecting equation first, differentiate w.r.t. time",
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
        concept: "Indefinite integration reverses differentiation. Master substitution (spot function and its derivative together) and ILATE rule for integration by parts. Remember: ∫f(x)dx = F(x) + C",
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
        concept: "Definite integrals give numeric values between limits. King's Rule ∫₀ᵃf(x)dx = ∫₀ᵃf(a−x)dx is the single most powerful trick. Use symmetry and properties to simplify intimidating integrals.",
        tricks: [
            "King's Rule: ∫₀ᵃf(x)dx = ∫₀ᵃf(a−x)dx — most powerful trick for scary-looking integrals",
            "Even function on [−a,a]: integral = 2∫₀ᵃ. Odd function: integral = 0",
            "Expressions like sinx/(1+sinx) simplify beautifully after dividing by cosx",
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
        concept: "Differential equations relate functions to their derivatives. Solving means finding families of functions satisfying the equation. Master separable variables and substitution methods like v=x+y.",
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
        concept: "Probability measures how likely an event is to happen. It appears everywhere in our surroundings: playing cards (probability of drawing a specific card), dice games (winning chances), coin tosses (heads or tails), lotteries, and weather predictions. Master conditional probability, independence, Bayes' theorem, and binomial distributions. Real-world example: A standard deck has 52 cards (4 suits × 13 ranks). P(drawing a spade) = 13/52 = 1/4 = 0.25 or 25%.",
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
        diagram: `<svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg">
            <!-- Title -->
            <text x="250" y="25" text-anchor="middle" font-size="16" fill="#F1ECDD" font-weight="bold">Binomial Probability Distribution</text>
            <text x="250" y="45" text-anchor="middle" font-size="12" fill="#E2A23B">Coin tossed 5 times (n=5, p=0.5)</text>

            <!-- Formula Box -->
            <rect x="10" y="55" width="480" height="50" fill="#1F2740" stroke="#3A8F84" stroke-width="2" rx="5"/>
            <text x="250" y="75" text-anchor="middle" font-size="11" fill="#F1ECDD" font-weight="bold">Formula: P(X=k) = C(n,k) × p^k × (1-p)^(n-k)</text>
            <text x="250" y="95" text-anchor="middle" font-size="10" fill="#A9AFC4">Where: n=5 (trials), p=0.5 (prob. of success), k=number of heads</text>

            <!-- Axes -->
            <line x1="60" y1="310" x2="480" y2="310" stroke="#A9AFC4" stroke-width="2"/>
            <line x1="60" y1="130" x2="60" y2="310" stroke="#A9AFC4" stroke-width="2"/>

            <!-- Axis Labels -->
            <text x="470" y="330" font-size="11" fill="#A9AFC4" font-weight="bold">Number of Heads (X)</text>
            <text x="25" y="200" font-size="11" fill="#A9AFC4" font-weight="bold">Probability</text>

            <!-- Y-axis scale -->
            <text x="50" y="315" text-anchor="end" font-size="9" fill="#A9AFC4">0</text>
            <text x="50" y="250" text-anchor="end" font-size="9" fill="#A9AFC4">0.25</text>
            <text x="50" y="185" text-anchor="end" font-size="9" fill="#A9AFC4">0.50</text>

            <!-- Bars with labels showing probabilities -->
            <!-- P(X=0) = 1/32 ≈ 0.03125 -->
            <rect x="85" y="290" width="35" height="20" fill="#3A8F84" opacity="0.8"/>
            <text x="102" y="330" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">0</text>
            <text x="102" y="345" text-anchor="middle" font-size="9" fill="#E2A23B">1/32</text>

            <!-- P(X=1) = 5/32 ≈ 0.156 -->
            <rect x="135" y="225" width="35" height="85" fill="#3A8F84" opacity="0.8"/>
            <text x="152" y="330" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">1</text>
            <text x="152" y="345" text-anchor="middle" font-size="9" fill="#E2A23B">5/32</text>

            <!-- P(X=2) = 10/32 ≈ 0.3125 (MAX) -->
            <rect x="185" y="135" width="35" height="175" fill="#E2A23B" opacity="0.9"/>
            <text x="202" y="330" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">2</text>
            <text x="202" y="345" text-anchor="middle" font-size="9" fill="#3A8F84" font-weight="bold">10/32 ⭐</text>

            <!-- P(X=3) = 10/32 ≈ 0.3125 (MAX) -->
            <rect x="235" y="135" width="35" height="175" fill="#E2A23B" opacity="0.9"/>
            <text x="252" y="330" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">3</text>
            <text x="252" y="345" text-anchor="middle" font-size="9" fill="#3A8F84" font-weight="bold">10/32 ⭐</text>

            <!-- P(X=4) = 5/32 ≈ 0.156 -->
            <rect x="285" y="225" width="35" height="85" fill="#3A8F84" opacity="0.8"/>
            <text x="302" y="330" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">4</text>
            <text x="302" y="345" text-anchor="middle" font-size="9" fill="#E2A23B">5/32</text>

            <!-- P(X=5) = 1/32 ≈ 0.03125 -->
            <rect x="335" y="290" width="35" height="20" fill="#3A8F84" opacity="0.8"/>
            <text x="352" y="330" text-anchor="middle" font-size="12" fill="#F1ECDD" font-weight="bold">5</text>
            <text x="352" y="345" text-anchor="middle" font-size="9" fill="#E2A23B">1/32</text>

            <!-- Key Information Box -->
            <rect x="10" y="370" width="480" height="70" fill="#1F2740" stroke="#E2A23B" stroke-width="2" rx="5"/>
            <text x="20" y="390" font-size="11" fill="#E2A23B" font-weight="bold">📊 Key Insights:</text>
            <text x="20" y="410" font-size="10" fill="#F1ECDD">• Most likely outcomes: X=2 or X=3 heads (both 31.25%)</text>
            <text x="20" y="425" font-size="10" fill="#F1ECDD">• Symmetrical distribution: P(X=k) = P(X=5-k)</text>
            <text x="20" y="440" font-size="10" fill="#F1ECDD">• Total probability sums to 1: (1+5+10+10+5+1)/32 = 32/32 = 1 ✓</text>
        </svg>`
    },
    {
        id: 11,
        title: "Vectors",
        icon: "v⃗",
        marks: "~6-8 marks",
        concept: "Vectors have magnitude and direction. Master vector algebra, dot product (for angles and projections), cross product (perpendicularity and area), and scalar triple product (volume). Essential for physics and engineering.",
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
        concept: "Extends vectors into 3D: equations of lines and planes, angles between lines, distances from point to plane. Most problems reduce to comparing direction ratios using dot product.",
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
        concept: "Uses definite integrals to find areas between curves. Key: sketch first, identify which curve is on top, find intersection points, then integrate the difference.",
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
        concept: "Regression finds the best-fit line describing how one variable changes with another. Master the formulas for regression coefficients and their relationship with correlation coefficient r.",
        tricks: [
            "b_yx = r×(σᵧ/σₓ) and b_xy = r×(σₓ/σᵧ) — memorise which ratio pairs with which",
            "Regression line of y on x passes through (x̄, ȳ) — use y−ȳ = b_yx(x−x̄) directly",
            "r² = b_yx × b_xy — fast way to recover r if both regression coefficients given",
            "r always ∈ [−1, 1] — if computed r falls outside, you've made arithmetic error"
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
        concept: "Finds optimal value of linear objective subject to linear constraints. Key insight: the optimal value always occurs at a corner of the feasible region, never in the interior.",
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
