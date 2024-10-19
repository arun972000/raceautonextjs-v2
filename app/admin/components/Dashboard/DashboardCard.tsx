import "./Dashboard.css";

const DashboardCard = ({ total, title, bgcolor, icon }: { total: number; title: string, bgcolor:string, icon:any }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div
        className="card mb-3 border-0 shadow dashboard__card"
        style={{
          background: bgcolor,
        }}
      >
        <div className="d-flex justify-content-between card-body">
          <div className="p-4">
            <h2>{total}</h2>
            <h6>{title}</h6>
          </div>
          <div className="d-flex align-items-center">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
