import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardStatistic from "../components/Fragments/Dashboard/CardSatistic";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem."
        />
        <CardBill />
        <CardTransaction />
        <CardStatistic />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
