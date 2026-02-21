export default function Delivery() {
  return (
    <>
      <h1>Deliveries</h1>

      <section className="stats">
        <Stat title="Total Delivered" value="200,913" trend="+2.08%" />
        <Stat title="On Delivery" value="5,290" trend="-11.08%" />
        <Stat title="Cancel Delivery" value="2,220" trend="+10.08%" />
        <Stat title="Return Delivery" value="4,495" trend="-8.08%" />
      </section>
    </>
  );
}

function Stat({ title, value, trend }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <span>{trend} vs last month</span>
    </div>
  );
}