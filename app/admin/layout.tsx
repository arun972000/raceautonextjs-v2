import './admin.css'
import AdminSidebar from "./components/Sidebar/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container-fluid admin-panel">
        <div className="row">
          <AdminSidebar />
          <div className="col-10 col-sm-9 col-md-9 col-xl-10">{children}</div>
        </div>
      </div>
    </>
  );
}
