import "./admin.css";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
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
          <div className="col-10 col-sm-8 col-md-9 col-xl-10">
            <AdminNavbar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
