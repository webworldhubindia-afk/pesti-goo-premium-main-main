import { ReactNode } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
