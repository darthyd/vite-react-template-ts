import MainTitle from '../../components/MainTitle';
import Subtitle from '../../components/Subtitle';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default function Home() {
  return (
    <div
      style={{
        width: '50vw',
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <MainTitle color="primary">
        A React Template with Typescript, Prettier and ESLint
      </MainTitle>
      <Subtitle color="secondary" style={{ marginBottom: '1vw' }}>
        A React template bootstraped from Vite
      </Subtitle>
      <Text style={{ width: '30vw', marginBottom: '2vw' }}>
        This is an opinionated starting point, to get you going with React using
        Vite. Also includes Stitches library for CSS-in-JS, React Router for
        navigation and pre-configured with Prettier, ESLint and Typescript.
      </Text>
      <Button outlined size={3} color="secondary">
        Get Started
      </Button>
    </div>
  );
}
