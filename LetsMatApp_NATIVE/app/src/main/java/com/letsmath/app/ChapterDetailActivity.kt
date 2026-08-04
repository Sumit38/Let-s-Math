package com.letsmath.app

import android.os.Bundle
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import android.view.ViewGroup
import androidx.core.view.setPadding

class ChapterDetailActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val chapterId = intent.getIntExtra("CHAPTER_ID", 1)
        val chapterTitle = intent.getStringExtra("CHAPTER_TITLE") ?: "Chapter"

        val scrollView = ScrollView(this)
        scrollView.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        )

        val mainLayout = LinearLayout(this)
        mainLayout.orientation = LinearLayout.VERTICAL
        mainLayout.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
        mainLayout.setPadding(20)

        // Back button
        val backBtn = TextView(this)
        backBtn.text = "← Back"
        backBtn.textSize = 14f
        backBtn.setTextColor(0xFFA9AFC4.toInt())
        backBtn.setPadding(0, 10, 0, 20)
        backBtn.isClickable = true
        backBtn.setOnClickListener { onBackPressedDispatcher.onBackPressed() }
        mainLayout.addView(backBtn)

        // Title
        val titleView = TextView(this)
        titleView.text = chapterTitle
        titleView.textSize = 24f
        titleView.setTextColor(0xFFFFFFFF.toInt())
        titleView.setPadding(0, 10, 0, 20)
        mainLayout.addView(titleView)

        // Get chapter content
        val content = getChapterContent(chapterId)

        // Concept
        if (content.concept.isNotEmpty()) {
            val conceptHeaderView = TextView(this)
            conceptHeaderView.text = "📚 What You Need to Know"
            conceptHeaderView.textSize = 16f
            conceptHeaderView.setTextColor(0xFF3A8F84.toInt())
            conceptHeaderView.setPadding(0, 15, 0, 10)
            mainLayout.addView(conceptHeaderView)

            val conceptView = TextView(this)
            conceptView.text = content.concept
            conceptView.textSize = 14f
            conceptView.setTextColor(0xFFF1ECDD.toInt())
            conceptView.setPadding(0, 0, 0, 20)
            conceptView.setLineSpacing(0f, 1.5f)
            mainLayout.addView(conceptView)
        }

        // Tricks
        if (content.tricks.isNotEmpty()) {
            val tricksHeaderView = TextView(this)
            tricksHeaderView.text = "⚡ Key Tricks & Shortcuts"
            tricksHeaderView.textSize = 16f
            tricksHeaderView.setTextColor(0xFFE2A23B.toInt())
            tricksHeaderView.setPadding(0, 15, 0, 10)
            mainLayout.addView(tricksHeaderView)

            content.tricks.forEach { trick ->
                val trickView = TextView(this)
                trickView.text = "• $trick"
                trickView.textSize = 13f
                trickView.setTextColor(0xFFF1ECDD.toInt())
                trickView.setPadding(10, 5, 0, 5)
                trickView.setLineSpacing(0f, 1.4f)
                mainLayout.addView(trickView)
            }
        }

        // Practice
        if (content.practice.isNotEmpty()) {
            val practiceHeaderView = TextView(this)
            practiceHeaderView.text = "\n📝 Practice Questions"
            practiceHeaderView.textSize = 16f
            practiceHeaderView.setTextColor(0xFF3A8F84.toInt())
            practiceHeaderView.setPadding(0, 15, 0, 10)
            mainLayout.addView(practiceHeaderView)

            content.practice.forEach { (q, a) ->
                val qView = TextView(this)
                qView.text = "Q: $q"
                qView.textSize = 13f
                qView.setTextColor(0xFFE2A23B.toInt())
                qView.setPadding(0, 10, 0, 5)
                qView.typeface = android.graphics.Typeface.DEFAULT_BOLD
                mainLayout.addView(qView)

                val aView = TextView(this)
                aView.text = "A: $a"
                aView.textSize = 12f
                aView.setTextColor(0xFFA9AFC4.toInt())
                aView.setPadding(15, 0, 0, 10)
                aView.setLineSpacing(0f, 1.3f)
                mainLayout.addView(aView)
            }
        }

        // Motivation
        val motivationView = TextView(this)
        motivationView.text = "\n💡 Remember: Every expert was once a beginner. Keep practicing!"
        motivationView.textSize = 13f
        motivationView.setTextColor(0xFF3A8F84.toInt())
        motivationView.setPadding(0, 20, 0, 20)
        motivationView.setLineSpacing(0f, 1.4f)
        mainLayout.addView(motivationView)

        scrollView.addView(mainLayout)
        setContentView(scrollView)
    }

    private fun getChapterContent(id: Int): ChapterContent {
        return when (id) {
            1 -> ChapterContent(
                concept = "A relation becomes a function when every input maps to exactly one output. Check one-one (injective) and onto (surjective) behaviour, composite functions, and finding inverses.",
                tricks = listOf(
                    "One-one check: assume f(x₁)=f(x₂); if algebra forces x₁=x₂, it's one-one",
                    "Onto check: solve y=f(x) for x; if valid x exists for every y, it's onto",
                    "To find inverse: swap x and y in y=f(x), then solve for y",
                    "f∘g ≠ g∘f in general — always compute in order written"
                ),
                practice = listOf(
                    "Show f(x) = (x+1)/(x−2) is one-one and find inverse" to "f⁻¹(x) = (2x+1)/(x−1)",
                    "If f(x) = 2x+3 and g(x) = x−1, find (f∘g)(x)" to "(f∘g)(x) = 2x+1"
                )
            )
            2 -> ChapterContent(
                concept = "Inverse trig functions undo trig ratios within principal value range. Master identities and principal values for sin⁻¹, cos⁻¹, tan⁻¹.",
                tricks = listOf(
                    "sin⁻¹x + cos⁻¹x = π/2 and tan⁻¹x + cot⁻¹x = π/2 — instant simplifiers",
                    "tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) only when xy<1",
                    "For sin(2tan⁻¹x): let θ=tan⁻¹x, draw right triangle, use double angle",
                    "Always check final answer lies in principal value range"
                ),
                practice = listOf(
                    "Solve: cos(2 sin⁻¹x) = 1/2" to "x = ±1/2",
                    "Evaluate: sin⁻¹(1/2) + cos⁻¹(1/2)" to "π/2"
                )
            )
            3 -> ChapterContent(
                concept = "Matrices organize numbers into rows and columns for multi-variable relationships. Master matrix method: AX=B, X=A⁻¹B.",
                tricks = listOf(
                    "For repeating patterns like 1/x, 1/y — substitute u=1/x first to make linear",
                    "2×2 inverse: swap diagonal, negate off-diagonal, divide by determinant",
                    "Matrix invertible only if det(A)≠0 — check before hunting for A⁻¹",
                    "(A+Aᵀ) is symmetric, (A−Aᵀ) is skew-symmetric — instant answers"
                ),
                practice = listOf(
                    "Find inverse of A = [[2,1],[1,1]]" to "A⁻¹ = [[1,−1],[−1,2]]",
                    "Show (A + Aᵀ) is symmetric" to "Symmetric if [A]ᵀ = [A]"
                )
            )
            4 -> ChapterContent(
                concept = "Determinants give single numbers capturing system solutions and geometric volumes. Master row operations and properties.",
                tricks = listOf(
                    "Two identical rows or columns ⇒ determinant is 0 — spot before expanding",
                    "Row/column operations don't change determinant value — create zeros first",
                    "Area-of-triangle determinant can be negative — always take absolute value",
                    "If area determinant = 0, points are collinear — fast built-in test"
                ),
                practice = listOf(
                    "Evaluate |2 3; 4 1|" to "det = (2)(1)−(3)(4) = −10",
                    "Explain why det with two identical rows = 0" to "Swapping identical rows flips sign, so det = −det, forcing det = 0"
                )
            )
            5 -> ChapterContent(
                concept = "Continuity: function value matches limit. Differentiability: well-defined slope. Differentiability ⇒ continuity, but not reverse.",
                tricks = listOf(
                    "Check continuity: compute LHL, RHL, f(a) separately",
                    "Differentiable always implies continuous, reverse is false",
                    "For piecewise functions: always test at point where definition switches",
                    "Chain rule: differentiate outer first, multiply by derivative of inner"
                ),
                practice = listOf(
                    "Differentiate y = sin(x²) using chain rule" to "dy/dx = 2x·cos(x²)",
                    "Is f(x) = |x| differentiable at x = 0?" to "No — left derivative = −1, right = +1"
                )
            )
            6 -> ChapterContent(
                concept = "Derivatives measure rate of change. Apply to tangents, maxima/minima, related-rates problems like ladder falling against wall.",
                tricks = listOf(
                    "Increasing where f'(x)>0, decreasing where f'(x)<0",
                    "Critical points: f'(x)=0; f''(x)<0 ⇒ max, f''(x)>0 ⇒ min",
                    "Related-rates: write connecting equation first, differentiate w.r.t. time",
                    "Optimization: use constraint to reduce to ONE variable before differentiating"
                ),
                practice = listOf(
                    "Find where f(x) = 2x³ − 15x² + 36x + 1 increases" to "x<2 or x>3",
                    "Box with volume 4096 cm³, minimize surface area" to "Cube of side 16 cm"
                )
            )
            else -> ChapterContent(
                concept = "This chapter covers important mathematical concepts and problem-solving techniques.",
                tricks = listOf(
                    "Always start with the basics",
                    "Practice the worked examples",
                    "Review the key shortcuts regularly",
                    "Apply tricks to similar problems"
                ),
                practice = listOf(
                    "Practice Question 1" to "Work through this carefully",
                    "Practice Question 2" to "Check your answer step by step"
                )
            )
        }
    }
}

data class ChapterContent(
    val concept: String,
    val tricks: List<String>,
    val practice: List<Pair<String, String>>
)
