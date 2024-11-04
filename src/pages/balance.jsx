import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card
          title="&nbsp;"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque in tempora voluptatem reprehenderit earum accusantium placeat quo error animi quasi veniam autem, minima et, nostrum, quidem quibusdam esse eveniet odio!"
        />
      </div>
      {/* bottom content end*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iste praesentium totam doloremque eius veritatis tempora rerum, tenetur, dolorum consequuntur aperiam cupiditate sunt unde, aut perspiciatis qui tempore nulla impedit!" />
        <Card />
        <Card />
      </div>
    </MainLayout>
  );
};

export default BalancePage;
