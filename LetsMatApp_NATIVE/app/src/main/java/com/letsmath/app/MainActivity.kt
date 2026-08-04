package com.letsmath.app

import android.content.Intent
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.setPadding
import android.view.ViewGroup
import android.widget.ScrollView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Create UI programmatically
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

        // Title
        val titleView = TextView(this)
        titleView.text = "Let's Math"
        titleView.textSize = 28f
        titleView.setTextColor(0xFFFFFFFF.toInt())
        titleView.setPadding(0, 20, 0, 20)
        mainLayout.addView(titleView)

        // Subtitle
        val subtitleView = TextView(this)
        subtitleView.text = "Master Math with Confidence"
        subtitleView.textSize = 16f
        subtitleView.setTextColor(0xFFA9AFC4.toInt())
        subtitleView.setPadding(0, 0, 0, 30)
        mainLayout.addView(subtitleView)

        // Add chapters
        val chapters = getChapters()
        chapters.forEach { chapter ->
            val chapterView = createChapterButton(chapter)
            mainLayout.addView(chapterView)
        }

        scrollView.addView(mainLayout)
        setContentView(scrollView)
    }

    private fun createChapterButton(chapter: Chapter): LinearLayout {
        val container = LinearLayout(this)
        container.orientation = LinearLayout.VERTICAL
        container.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
        container.setPadding(15)
        container.setBackgroundColor(0xFF2A3350.toInt())
        container.elevation = 4f

        val lp = container.layoutParams as ViewGroup.MarginLayoutParams
        lp.setMargins(0, 0, 0, 12)
        container.layoutParams = lp

        val titleView = TextView(this)
        titleView.text = "${chapter.id}. ${chapter.title}"
        titleView.textSize = 16f
        titleView.setTextColor(0xFFFFFFFF.toInt())
        titleView.setPadding(0, 0, 0, 8)
        container.addView(titleView)

        val marksView = TextView(this)
        marksView.text = chapter.marks
        marksView.textSize = 12f
        marksView.setTextColor(0xFFA9AFC4.toInt())
        container.addView(marksView)

        container.setOnClickListener {
            val intent = Intent(this, ChapterDetailActivity::class.java)
            intent.putExtra("CHAPTER_ID", chapter.id)
            intent.putExtra("CHAPTER_TITLE", chapter.title)
            startActivity(intent)
        }

        return container
    }

    private fun getChapters(): List<Chapter> {
        return listOf(
            Chapter(1, "Relations and Functions", "~4 (Q2 slot) + 2 in Q1"),
            Chapter(2, "Inverse Trigonometric Functions", "~4 (Q3 slot) + 2 in Q1"),
            Chapter(3, "Matrices", "~6 (system-of-equations Q) + 2 in Q1"),
            Chapter(4, "Determinants", "~4 (Q4 slot) + 2 in Q1"),
            Chapter(5, "Continuity and Differentiability", "~8 across two 4-mark Qs"),
            Chapter(6, "Applications of Derivatives", "~10 (rate-of-change + maxima/minima)"),
            Chapter(7, "Indefinite Integrals", "~4-6"),
            Chapter(8, "Definite Integrals & Applications", "~6"),
            Chapter(9, "Differential Equations", "~4 + 2 in Q1"),
            Chapter(10, "Probability", "~10 (two questions, incl. Bayes')"),
            Chapter(11, "Vectors", "~6-8 of the 20-mark section"),
            Chapter(12, "Three-Dimensional Geometry", "~8-10 of the 20-mark section"),
            Chapter(13, "Application of Integrals", "~6 of the 20-mark section"),
            Chapter(14, "Numerical Applications", "~8-10 of the 20-mark section"),
            Chapter(15, "Linear Regression", "~6-10 of the 20-mark section"),
            Chapter(16, "Linear Programming", "~4-6 where offered")
        )
    }
}

data class Chapter(
    val id: Int,
    val title: String,
    val marks: String
)
