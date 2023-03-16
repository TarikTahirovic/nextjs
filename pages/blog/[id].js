import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import CustomButton from '@/components/button/CustomButton';

const BlogPost = () => {
    const router = useRouter();
    const { id, content, title } = router.query;

    const handleBackButtonClick = () => {
        router.back();
    };

    const post = { id, title, content };

    return (
        <Layout>
            <h1>{post.title}</h1>
            <CustomButton variant={'contained'} onClick={handleBackButtonClick}>
                Back
            </CustomButton>
            <p>{post.content}</p>
        </Layout>
    );
};

export default BlogPost;
