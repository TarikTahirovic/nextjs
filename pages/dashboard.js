import Layout from '../components/Layout';
import CustomButton from '@/components/button/CustomButton';
import { css } from '@emotion/css';

const textStyles = css`
  color: #009688;
`;

function DashboardPage() {
  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <h2 className={textStyles}>Reusable button example</h2>
        <br />
        <br />
        <h4 className={textStyles}>Color: primary; Type: contained; Width: 100px</h4>
        <br />
        <CustomButton color="primary" variant={'contained'} width="100px">
          Contained
        </CustomButton>
        <br />
        <br />
        <h4 className={textStyles}>Color: primary; Type: text; Width: 100px</h4>
        <br />
        <CustomButton color="primary" variant={'text'} width="100px">
          Text
        </CustomButton>
        <br />
        <br />
        <h4 className={textStyles}>Color: secondary; Type: outlined; Width: 100%</h4>
        <br />
        <CustomButton color="secondary" variant={'outlined'} width="100%">
          Outlined
        </CustomButton>
      </div>
    </Layout>
  );
}

export default DashboardPage;
