import Link from 'next/link';
import Layout from '@/components/Layout';

const Blog = () => {
    const posts = [
        { id: '1', title: 'Blog Post Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis, orci ornare dignissim ornare, enim libero vestibulum sem, id facilisis mauris turpis suscipit neque. Sed ut nunc augue. Fusce dignissim turpis quis dapibus scelerisque. Nunc a eros accumsan, blandit dui a, sagittis ante. Aliquam facilisis posuere ultrices. Donec consectetur nibh eget vulputate dapibus. Fusce ut semper urna. Aenean et felis ligula. Quisque venenatis, metus sit amet imperdiet consectetur, libero urna rhoncus velit, in malesuada eros urna et erat. Integer id condimentum arcu. Nullam congue lacus augue, et porttitor urna volutpat eleifend. Nulla id nulla at odio mattis tincidunt nec at felis. Praesent rutrum commodo varius. Maecenas non leo nec nisl dictum elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer convallis purus mi, eget efficitur velit maximus id', image: 'https://picsum.photos/id/237/200/300' },
        { id: '2', title: 'Blog Post Title 2', content: 'Vestibulum maximus velit vel ligula molestie gravida. Nam convallis commodo lacus eget fermentum. Pellentesque posuere aliquam sem tempus lacinia. Aliquam quis tempor odio. Nulla accumsan viverra justo ac malesuada. Pellentesque dignissim ac libero sed aliquet. Cras id orci ut velit porta sagittis. Phasellus a elementum orci, sed accumsan diam. In id risus dolor. Duis auctor tortor eu risus pharetra ornare. Sed id lacus nec urna venenatis vestibulum nec pretium elit', image:'https://picsum.photos/200/300?grayscale' },
        { id: '3', title: 'Blog Post Title 3', content: 'Nulla et sodales odio, mollis iaculis augue. Quisque sed efficitur quam. Suspendisse potenti. Cras et massa semper, iaculis lacus vel, posuere lacus. Sed in justo purus.', image: 'https://picsum.photos/seed/picsum/200/300\n' },
    ];

    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link
                            href={{
                                pathname: `/blog/${post.id}`,
                                query: { content: post.content, title: post.title, image: post.image },
                            }}
                            as={`/blog/${post.id}`}
                        >
                            <p>{post.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Blog;
