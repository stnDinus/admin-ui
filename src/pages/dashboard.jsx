import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente, velit placeat nam corrupti vel alias voluptates nisi repudiandae qui possimus explicabo molestias consectetur ipsam dignissimos. Laborum optio facere totam?"
        />
        <Card title="Upcoming Bill" />
        <div className="md:col-span-1">
          <Card
            title="Recent Transaction"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam aliquam error sit, quaerat, hic doloremque, officiis laudantium nostrum repudiandae dolores est rem distinctio aliquid? Voluptas reprehenderit eum voluptatibus sed?"
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
