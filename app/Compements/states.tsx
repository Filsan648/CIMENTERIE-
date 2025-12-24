import StatItem from "~/asset/asstes/count"

function StatsSection() {
  const stats = [
    { value: "13", label: "year of experience" },
    { value: "150", label: "Employer" },
    { value: "10", label: "project" },
    { value: "100", label: "customer" },
  ];

  return (
    <section className="px-5 pt-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Grille avec bordures hautes et gauches pour fermer le cadre */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-gray-200  ">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default StatsSection;

