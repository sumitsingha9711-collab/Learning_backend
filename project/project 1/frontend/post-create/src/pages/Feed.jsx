import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetch("/posts")
                const result = await response.json()
                if (!response.ok) {
                    throw new Error(result.message || "Could not load posts.")
                }
                setPosts(Array.isArray(result.posts) ? result.posts : [])
            } catch (err) {
                setError(err instanceof Error ? err.message : "Could not load posts.")
            } finally {
                setIsLoading(false)
            }
        }

        loadPosts()
    }, [])

    return (
        <main className="page-shell">
            <nav className="site-nav" aria-label="Main navigation">
                <Link to="/feed" className="brand">Photo Feed</Link>
                <Link to="/create-post" className="nav-link">Create post</Link>
            </nav>
            <section className="feed-section">
                <header className="feed-header">
                    <div>
                        <h1>Your feed</h1>
                        <p>Photos shared with you</p>
                    </div>
                    <Link to="/create-post" className="primary-link">Share a photo</Link>
                </header>
                {isLoading ? (
                    <p className="status-message">Loading posts...</p>
                ) : error ? (
                    <p className="error-message" role="alert">{error}</p>
                ) : posts.length === 0 ? (
                    <div className="empty-state">
                        <h2>No posts yet</h2>
                        <p>Be the first to share a photo.</p>
                        <Link to="/create-post" className="primary-link">Create a post</Link>
                    </div>
                ) : (
                    <div className="post-list">
                        {posts.map((post) => (
                            <article key={post._id} className="post-card">
                                {post.image && <img src={post.image} alt={post.caption || "Shared photo"} />}
                                {post.caption && <p>{post.caption}</p>}
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Feed