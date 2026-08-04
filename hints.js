// Comprehensive Hint Bank - Progressive hints to guide without giving answers
const hintsDatabase = {
    // Chapter 1: Relations and Functions
    1: {
        1: { // Question about f(x) = (x+1)/(x−2) being one-one and finding inverse
            title: "Relations and Functions - One-one & Inverse",
            hints: [
                "💡 Hint 1: ONE-ONE TEST: Assume f(a) = f(b) and try to prove a = b. If successful, it's one-one! TRICK: Check if each y-value maps to only ONE x-value",
                "💡 Hint 2: For f(x) = (x+1)/(x−2), cross-multiply: (a+1)/(a−2) = (b+1)/(b−2) ⟹ (a+1)(b−2) = (b+1)(a−2). Simplify to find a = b",
                "💡 Hint 3: INVERSE STEPS: (1)Replace f(x) with y: y = (x+1)/(x−2), (2)Swap x↔y: x = (y+1)/(y−2), (3)Solve for y. Answer: f⁻¹(x) = (2x+1)/(x−1)"
            ]
        },
        2: { // Question about (f∘g)(x)
            title: "Relations and Functions - Composition & Trick",
            hints: [
                "💡 Hint 1: COMPOSITION TRICK: (f∘g)(x) = 'first g, then f'. Order matters! (f∘g) ≠ (g∘f) usually. Notation: Read RIGHT to LEFT",
                "💡 Hint 2: Given f(x)=2x+3 and g(x)=x−1: Find g(x) FIRST = x−1, then input INTO f: f(x−1) = 2(x−1) + 3",
                "💡 Hint 3: f(g(x)) = f(x−1) = 2(x−1) + 3 = 2x − 2 + 3 = 2x + 1. MEMORY: Substitute the entire g(x) into f's formula"
            ]
        }
    },

    // Chapter 3: Matrices
    3: {
        1: { // Bakery example
            title: "Matrices - Business Application",
            hints: [
                "💡 Hint 1: Each row represents a product (Bread, Cake, Cookie). Each column is a day",
                "💡 Hint 2: Matrix organizes data so you can track changes over time easily",
                "💡 Hint 3: Add rows to get total sales per product, add columns to get daily total"
            ]
        }
    },

    // Chapter 4: Determinants
    4: {
        1: { // Calculating 3×3 determinant
            title: "Determinants - Expansion & Sign Pattern",
            hints: [
                "💡 Hint 1: For 3×3 determinant, use Sarrus Rule or Expansion by Row. Remember the SIGN PATTERN (Cofactor signs): [+][−][+]/[−][+][−]/[+][−][+]",
                "💡 Hint 2: SIGN PATTERN (Checkerboard): Position (1,1)=+, (1,2)=−, (1,3)=+. This alternates like a checkerboard: A(i,j) has sign (−1)^(i+j)",
                "💡 Hint 3: Example: det(A) = a₁₁(C₁₁) + a₁₂(C₁₂) + a₁₃(C₁₃) where C = Minor × Sign. Cofactor = (−1)^(i+j) × Minor(i,j)"
            ]
        },
        2: { // Cofactor and Adjugate
            title: "Determinants - Cofactors & Adjugate Matrix",
            hints: [
                "💡 Hint 1: Cofactor matrix uses the SIGN PATTERN (checkerboard): C(i,j) = (−1)^(i+j) × M(i,j) where M is Minor",
                "💡 Hint 2: SIGN TRICK: If i+j is EVEN → sign is +, if ODD → sign is −. Example: Position (2,3): 2+3=5(odd) → sign is −",
                "💡 Hint 3: Adjugate = Transpose of Cofactor Matrix. Write cofactors with proper signs, then flip rows & columns"
            ]
        },
        3: { // Invertibility condition
            title: "Determinants - Invertibility Condition",
            hints: [
                "💡 Hint 1: A matrix is INVERTIBLE if and only if det(A) ≠ 0. If det(A) = 0, matrix is SINGULAR (not invertible)",
                "💡 Hint 2: A⁻¹ = (1/det(A)) × adj(A). The determinant acts as a SCALING FACTOR in the inverse formula",
                "💡 Hint 3: KEY FACT: If det(A) = 0, rows/columns are linearly dependent. This means inverse doesn't exist mathematically"
            ]
        }
    },

    // Chapter 7: Integrals
    7: {
        1: { // Basic indefinite integral
            title: "Integrals - Power Rule",
            hints: [
                "💡 Hint 1: For ∫xⁿ dx, use POWER RULE: ∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C. TRICK: Add 1 to power, divide by new power",
                "💡 Hint 2: Don't forget +C (constant of integration)! It's crucial because derivatives of constants = 0",
                "💡 Hint 3: Check: Differentiate your answer. If d/dx[answer] = original function, you're correct!"
            ]
        },
        2: { // Definite integral / Area
            title: "Integrals - Definite Integrals & Area",
            hints: [
                "💡 Hint 1: Definite integral ∫ₐᵇ f(x)dx = Area under curve from a to b. TRICK: Use Fundamental Theorem: F(b) − F(a)",
                "💡 Hint 2: Find antiderivative F(x), then substitute upper limit b and lower limit a. The C cancels out!",
                "💡 Hint 3: ∫ₐᵇ f(x)dx = [F(x)]ₐᵇ = F(b) − F(a). REMEMBER: Upper limit FIRST, then subtract lower limit"
            ]
        }
    },

    // Chapter 2: Inverse Trigonometry
    2: {
        1: { // Finding inverse trig values
            title: "Inverse Trigonometry - Principal Values",
            hints: [
                "💡 Hint 1: sin⁻¹(x) gives angles in [−π/2, π/2]. TRICK: For sin⁻¹(1/2), think 'what angle has sine = 1/2?' Answer: π/6",
                "💡 Hint 2: cos⁻¹(x) gives angles in [0, π]. TRICK: cos⁻¹(1/2) = π/3 (60°). Remember common values: 0, π/6, π/4, π/3, π/2",
                "💡 Hint 3: IDENTITY LINK: sin⁻¹(x) + cos⁻¹(x) = π/2. Also: tan⁻¹(x) + tan⁻¹(1/x) = π/2 (for x>0)"
            ]
        }
    },

    // Chapter 6: Applications of Derivatives
    6: {
        1: { // Where f(x) increases
            title: "Derivatives - Increasing/Decreasing Functions",
            hints: [
                "💡 Hint 1: SIGN OF DERIVATIVE TRICK: f'(x) > 0 ⟹ f increases. f'(x) < 0 ⟹ f decreases. f'(x) = 0 ⟹ critical point",
                "💡 Hint 2: Differentiate: f(x) = 2x³ − 15x² + 36x ⟹ f'(x) = 6x² − 30x + 36 = 6(x² − 5x + 6)",
                "💡 Hint 3: Factor: f'(x) = 6(x−2)(x−3). Check signs: x<2 (positive), 2<x<3 (negative), x>3 (positive). So f increases on (−∞,2) ∪ (3,∞)"
            ]
        },
        2: { // Box volume optimization
            title: "Derivatives - Optimization (Minimize Surface Area)",
            hints: [
                "💡 Hint 1: OPTIMIZATION STEPS: (1)Set up equations, (2)Eliminate variable using constraint, (3)Differentiate, (4)Set = 0, (5)Verify min/max",
                "💡 Hint 2: Constraint: V = x²h = 4096 ⟹ h = 4096/x². Surface Area: S = 2x² + 4xh = 2x² + 4x(4096/x²) = 2x² + 16384/x",
                "💡 Hint 3: dS/dx = 4x − 16384/x² = 0 ⟹ 4x³ = 16384 ⟹ x³ = 4096 ⟹ x = 16. TRICK: Verify d²S/dx² > 0 to confirm minimum"
            ]
        }
    },

    // Chapter 10: Probability
    10: {
        1: { // Playing Cards - Red cards
            title: "Probability - Playing Cards",
            hints: [
                "💡 Hint 1: A standard deck has 52 cards total. Remember: 4 suits (Hearts♥, Diamonds♦, Clubs♣, Spades♠), 13 cards/suit",
                "💡 Hint 2: Red suits = Hearts & Diamonds. Each has 13 cards. TRICK: Red=26, Black=26 (exactly half!)",
                "💡 Hint 3: P(Red) = 26/52 = 1/2. SIMPLE TRICK: Any color has exactly 50% probability!"
            ]
        },
        2: { // Aces
            title: "Probability - Counting Favorable Outcomes",
            hints: [
                "💡 Hint 1: TRICK: There are exactly 4 Aces in any deck (1 per suit: ♥A, ♦A, ♣A, ♠A)",
                "💡 Hint 2: Total outcomes = 52. Favorable outcomes = 4 (all Aces). Apply: P = Favorable/Total",
                "💡 Hint 3: P(Ace) = 4/52 = 1/13. MEMORY TRICK: 4 Aces out of 52 cards = 1 out of 13"
            ]
        },
        3: { // King OR Queen
            title: "Probability - OR Events (Addition Rule)",
            hints: [
                "💡 Hint 1: 'King OR Queen' = Count Kings + Count Queens (they DON'T overlap). Use: P(A or B) = P(A) + P(B)",
                "💡 Hint 2: Kings = 4 (one per suit), Queens = 4 (one per suit). These are MUTUALLY EXCLUSIVE (can't be both)",
                "💡 Hint 3: Total = 8 cards. P(K or Q) = 8/52 = 2/13. TRICK: For OR with no overlap, just ADD counts!"
            ]
        },
        4: { // Coin tossed 5 times
            title: "Probability - Binomial Distribution",
            hints: [
                "💡 Hint 1: This is a binomial problem: n=5 tosses, p=0.5 (fair coin), find P(exactly 3 heads)",
                "💡 Hint 2: Use the formula: P(X=k) = C(n,k) × p^k × (1-p)^(n-k)",
                "💡 Hint 3: Find C(5,3) = 5!/(3!×2!) = 10. Then 10 × (0.5)³ × (0.5)² = 10/32"
            ]
        }
    },

    // Chapter 15: Linear Regression
    15: {
        1: { // Study hours vs marks
            title: "Linear Regression - Study Impact",
            hints: [
                "💡 Hint 1: Correlation r tells you if study hours and marks are related",
                "💡 Hint 2: If r = 0.8, that's STRONG positive correlation (more study → better marks)",
                "💡 Hint 3: r² = 0.64 means 64% of mark variation is explained by study hours"
            ]
        }
    },

    // Chapter 17: Statistics
    17: {
        1: { // Test scores statistics
            title: "Statistics - Mean, Median, Mode, Range",
            hints: [
                "💡 Hint 1: Mean = sum of all values ÷ count. Add: 45+67+72+78+82+89+95",
                "💡 Hint 2: Median = middle value when sorted. Arrange in order: already sorted!",
                "💡 Hint 3: Mode = most frequent value. Do any numbers repeat? No → No mode. Range = highest − lowest"
            ]
        },
        2: { // Salary data - which average?
            title: "Statistics - Choosing the Right Average",
            hints: [
                "💡 Hint 1: When one value is VERY different (CEO salary ₹250k vs employee ₹25k), it's an outlier",
                "💡 Hint 2: Mean gets pulled up by outliers. Median ignores extreme values",
                "💡 Hint 3: Median (₹32k) better represents typical employee. Mean (₹74k) is misleading here"
            ]
        },
        3: { // Variance and Standard Deviation
            title: "Statistics - Spread of Data",
            hints: [
                "💡 Hint 1: First find the Mean: (60+65+70+75+80)/5 = 70",
                "💡 Hint 2: Variance = average of (each value − mean)². Calculate: (60-70)²=100, (65-70)²=25, etc.",
                "💡 Hint 3: Sum of squared differences = 250. Variance = 250/5 = 50. SD = √50 ≈ 7.07"
            ]
        },
        4: { // Cricket batting average
            title: "Statistics - Real Sports Data",
            hints: [
                "💡 Hint 1: Batting average = total runs ÷ number of matches",
                "💡 Hint 2: Add all scores: 45+67+52+89+34+78+92+56+71+88",
                "💡 Hint 3: Total = 672 runs. Matches = 10. Average = 672/10 = 67.2 runs per match"
            ]
        }
    }
};

// Function to get hints for a specific chapter and question
function getHints(chapterId, questionNumber) {
    if (hintsDatabase[chapterId] && hintsDatabase[chapterId][questionNumber]) {
        return hintsDatabase[chapterId][questionNumber];
    }
    return null;
}

// Function to display hints progressively
function showHint(chapterId, questionNumber, hintLevel) {
    const hints = getHints(chapterId, questionNumber);
    if (!hints) return "No hints available for this question yet. Keep trying!";

    if (hintLevel <= 0 || hintLevel > hints.hints.length) {
        return "No more hints available! Try solving it now.";
    }

    return hints.hints[hintLevel - 1];
}
