import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: any;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};
