import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import CustomButton from '@/components/button/CustomButton';
import {css} from "@emotion/css";

const imgStyles = css`
  display: block;
  margin: 0 auto;
`;

const BlogPost = () => {
    const router = useRouter();
    const { id, content, title, image } = router.query;

    const handleBackButtonClick = () => {
        router.back();
    };

    const post = { id, title, content, image };

    return (
        <Layout>
            <h1>{post.title}</h1>
            <CustomButton variant={'contained'} onClick={handleBackButtonClick} width={'100%'}>
                Back
            </CustomButton>
            <img src={post.image}  alt={post.image} className={imgStyles}/>
            <p>{post.content}</p>
        </Layout>
    );
};

export default BlogPost;
