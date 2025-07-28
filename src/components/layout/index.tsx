import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-full mt-2 max-w-3xl p-4 ml-auto mr-auto w-full">
        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
