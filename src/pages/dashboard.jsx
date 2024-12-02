import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transaction";
import { Icon } from "../components/Elements/Icon";
import { useState } from "react";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"];

  const [trxs, setTrx] = useState(transactions);
  const [activeTab, setActiveTab] = useState("All");
  function handleClick(e) {
    const transactionFiltered =
      e.target.value != "All"
        ? transactions.filter(({ type }) => type === e.target.value)
        : transactions;
    setActiveTab(e.target.value);
    setTrx(transactionFiltered);
  }

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div className="">
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));
  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));
  const transactionCard = trxs.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem."
        />
        <Card
          title="Upcoming Bill"
          desc={
            <div className="h-full flex flex-col justify-around">
              {billCard}
            </div>
          }
        />
        <Card
          variant="md:col-span-1 md:row-span-2"
          title="Recent Transaction"
          desc={
            <div>
              <div className="mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={
                      activeTab === tab
                        ? "px-4 font-bold border-b-4 border-primary text-primary"
                        : "px-4 font-bold text-gray-01"
                    }
                    value={tab}
                    onClick={handleClick}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {transactionCard}
            </div>
          }
        />
        <Card variant="md:col-span-2" title="Statistics" />
        <Card
          variant="md:col-span-2"
          title="Expenses Breakdown"
          desc={
            <div className="h-full md:grid md:grid-cols-3">{expenseCard}</div>
          }
        />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
