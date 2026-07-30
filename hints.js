// Comprehensive Hint Bank - Progressive hints to guide without giving answers
const hintsDatabase = {
    // Chapter 1: Relations and Functions
    1: {
        1: { // Question about f(x) = (x+1)/(x−2) being one-one and finding inverse
            title: "Relations and Functions - One-one & Inverse",
            hints: [
                "💡 Hint 1: To check if a function is one-one, assume f(a) = f(b) and see if you can prove a = b",
                "💡 Hint 2: For f(x) = (x+1)/(x−2), if f(a) = f(b), cross-multiply and simplify carefully",
                "💡 Hint 3: To find inverse, replace f(x) with y, swap x and y, then solve for the new y"
            ]
        },
        2: { // Question about (f∘g)(x)
            title: "Relations and Functions - Composition",
            hints: [
                "💡 Hint 1: (f∘g)(x) means 'first apply g, then apply f to the result'",
                "💡 Hint 2: Start with g(x) = x-1, then substitute this result into f",
                "💡 Hint 3: f(g(x)) = f(x-1). Now apply f to (x-1): f(x-1) = 2(x-1) + 3"
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

    // Chapter 6: Applications of Derivatives
    6: {
        1: { // Where f(x) increases
            title: "Derivatives - Increasing/Decreasing Functions",
            hints: [
                "💡 Hint 1: A function increases where its derivative is positive (f'(x) > 0)",
                "💡 Hint 2: First, find f'(x) by differentiating: f'(x) = 6x² − 30x + 36",
                "💡 Hint 3: Factor f'(x) = 6(x-2)(x-3), then find where this is > 0"
            ]
        },
        2: { // Box volume optimization
            title: "Derivatives - Optimization (Minimize Surface Area)",
            hints: [
                "💡 Hint 1: You have constraint: Volume = 4096, and need to minimize Surface Area",
                "💡 Hint 2: Write V = x²h = 4096, so h = 4096/x². Substitute into Surface Area formula",
                "💡 Hint 3: S = 2x² + 4xh = 2x² + 4x(4096/x²). Simplify and differentiate dS/dx"
            ]
        }
    },

    // Chapter 10: Probability
    10: {
        1: { // Playing Cards - Red cards
            title: "Probability - Playing Cards",
            hints: [
                "💡 Hint 1: A standard deck has 52 cards total",
                "💡 Hint 2: Count how many red suits are there? (Hearts and Diamonds)",
                "💡 Hint 3: Each suit has 13 cards, so red cards = 13 + 13 = 26. P = 26/52"
            ]
        },
        2: { // Aces
            title: "Probability - Counting Favorable Outcomes",
            hints: [
                "💡 Hint 1: How many Aces are in a deck? Think about suits",
                "💡 Hint 2: There's 1 Ace per suit, and 4 suits in a deck",
                "💡 Hint 3: Total Aces = 4. P(Ace) = 4/52 = 1/13"
            ]
        },
        3: { // King OR Queen
            title: "Probability - OR Events",
            hints: [
                "💡 Hint 1: 'King OR Queen' means we count both. These events don't overlap",
                "💡 Hint 2: Count Kings: how many? Count Queens: how many?",
                "💡 Hint 3: Kings = 4, Queens = 4, Total = 8. P = 8/52 = 2/13"
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
