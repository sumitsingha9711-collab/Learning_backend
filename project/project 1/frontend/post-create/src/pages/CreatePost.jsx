import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"


const CreatePost = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)
        const formData = new FormData(e.target)

        try {
            const response = await fetch("/create-post", {
                method: "POST",
                body: formData
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.message || result.error || "Could not create post.")
            }
            navigate("/feed")
        } catch (err) {
            setError(err instanceof Error ? err.message : "Could not create post.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="page-shell">
            <nav className="site-nav" aria-label="Main navigation">
                <Link to="/feed" className="brand">Photo Feed</Link>
                <Link to="/create-post" className="nav-link active">Create post</Link>
            </nav>
            <section className="create-post-section">
                <form onSubmit={handleSubmit}>
                    <h1>Create a post</h1>
                    <p className="form-description">Share a photo with your feed.</p>
                    <label htmlFor="image">Photo</label>
                    <input id="image" type="file" name="image" accept="image/*" required />
                    <label htmlFor="caption">Caption</label>
                    <textarea id="caption" name="caption" placeholder="Write a caption..." required />
                    {error && <p className="error-message" role="alert">{error}</p>}
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Posting..." : "Share post"}
                    </button>
                </form>
            </section>
        </main>
    )
}

export default CreatePost