import { ReactNode, useEffect } from 'react';
import { warmUpEnquiryServer } from '@/lib/enquiry';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  isProgrammesHover: boolean;
  setIsProgrammesHover: (value: boolean) => void;
}

const Layout = ({ children, isProgrammesHover, setIsProgrammesHover }: LayoutProps) => {
  // Wake the enquiry server as soon as a visitor arrives, so the form sends quickly.
  useEffect(() => {
    warmUpEnquiryServer();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isProgrammesHover={isProgrammesHover} setIsProgrammesHover={setIsProgrammesHover} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
