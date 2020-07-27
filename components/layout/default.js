import Container from '../container';

const Default = ({ children }) => <Container>{children}</Container>;

export const getLayout = (page) => <Default>{page}</Default>;

export default Default;
