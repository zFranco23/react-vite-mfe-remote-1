import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-full mt-2">{children}</div>
    </div>
  );
};

export default Layout;
