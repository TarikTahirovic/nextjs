import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import CustomButton from "@/components/button/CustomButton";

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    const handleBackButtonClick = () => {
        router.back();
    };

    const post = { id, title: "Blog Post Title", content: "Blog Post Content" };

    return (
        <Layout>
            <h1>{post.title}</h1>
            <CustomButton variant={'contained'} onClick={handleBackButtonClick}>Back</CustomButton>
            <p>{post.content}</p>
        </Layout>
    );
};

export default BlogPost;
