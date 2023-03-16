import Link from "next/link";
import Layout from "@/components/Layout";

const Blog = () => {
    const posts = [
        { id: "1", title: "Blog Post 1" },
        { id: "2", title: "Blog Post 2" },
        { id: "3", title: "Blog Post 3" },
    ];

    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`} as={`/blog/${post.id}`}>
                            <p>{post.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Blog;
