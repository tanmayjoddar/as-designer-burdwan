"use client"

import { useState, useEffect } from "react"
import { MessageSquare, User, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface CommentItem {
  id: string
  name: string
  date: string
  comment: string
}

interface CommentSectionProps {
  postTitle: string
  postTitleBn?: string
  initialComments?: CommentItem[]
}

export function CommentSection({
  postTitle,
  postTitleBn,
  initialComments = [],
}: CommentSectionProps) {
  const { lang } = useLanguage()
  const isBn = lang === "bn"
  const effectiveTitle = isBn && postTitleBn ? postTitleBn : postTitle

  const [comments, setComments] = useState<CommentItem[]>(initialComments)
  const [commentText, setCommentText] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [saveInfo, setSaveInfo] = useState(true)
  const [submittedMessage, setSubmittedMessage] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("as_commenter_info")
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.name) setName(parsed.name)
        if (parsed.email) setEmail(parsed.email)
        if (parsed.website) setWebsite(parsed.website)
      }
    } catch {
      // ignore
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentText.trim() || !name.trim() || !email.trim()) return

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: name.trim(),
      date: new Date().toLocaleDateString(isBn ? "bn-IN" : "en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      comment: commentText.trim(),
    }

    setComments((prev) => [...prev, newComment])

    if (saveInfo) {
      try {
        localStorage.setItem(
          "as_commenter_info",
          JSON.stringify({ name: name.trim(), email: email.trim(), website: website.trim() })
        )
      } catch {
        // ignore
      }
    }

    setCommentText("")
    setSubmittedMessage(true)
    setTimeout(() => setSubmittedMessage(false), 5000)
  }

  return (
    <div className="mt-16 pt-12 border-t border-border">
      {/* Existing Comments list */}
      {comments.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-medium tracking-tight mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[rgb(251,146,60)]" />
            <span>
              {isBn
                ? `“${effectiveTitle}”-এর ওপর ${comments.length}টি মন্তব্য`
                : `${comments.length} ${comments.length === 1 ? "thought" : "thoughts"} on “${effectiveTitle}”`}
            </span>
          </h3>

          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="bg-secondary/40 border border-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{c.name}</h4>
                    <span className="text-xs text-muted-foreground">{c.date}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mt-2 pl-11">{c.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leave a reply form */}
      <div className="bg-secondary/20 border border-border rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl font-medium tracking-tight">
          {isBn ? "মন্তব্য লিখুন" : "Leave a Reply"}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 mb-6">
          {isBn
            ? "আপনার ইমেল প্রকাশ করা হবে না। আবশ্যক ঘরগুলো চিহ্নিত *"
            : "Your email address will not be published. Required fields are marked *"}
        </p>

        {submittedMessage && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            <span>
              {isBn
                ? "ধন্যবাদ! আপনার মন্তব্যটি গৃহীত হয়েছে এবং নিচে প্রদর্শিত হচ্ছে।"
                : "Thank you! Your comment has been received and published below."}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
              {isBn ? "আপনার মন্তব্য" : "Comment"} <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder={
                isBn
                  ? "আপনার মতামত বা প্রশ্ন এখানে লিখুন..."
                  : "Share your thoughts or questions..."
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                {isBn ? "আপনার নাম" : "Name"} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isBn ? "আপনার নাম" : "Your Name"}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                {isBn ? "আপনার ইমেল" : "Email"} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isBn ? "আপনার ইমেল" : "Your Email"}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
              {isBn ? "ওয়েবসাইট (ঐচ্ছিক)" : "Website"}
            </label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="flex items-start gap-2.5 pt-2">
            <input
              type="checkbox"
              id="save-commenter-info"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="mt-1 rounded border-border text-primary focus:ring-primary/20"
            />
            <label htmlFor="save-commenter-info" className="text-xs text-muted-foreground cursor-pointer select-none">
              {isBn
                ? "পরবর্তী মন্তব্যের জন্য ব্রাউজারে আমার নাম ও ইমেল সংরক্ষণ করুন।"
                : "Save my name, email, and website in this browser for the next time I comment."}
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3 rounded-xl text-sm font-medium hover:bg-foreground/90 transition-all cursor-pointer"
            >
              {isBn ? "মন্তব্য প্রকাশ করুন" : "Post Comment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
