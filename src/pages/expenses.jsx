import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  const breakdown = [
    {
      name: "Housing",
      total: 250,
      icon: "",
      growth: {
        up: true,
        percentage: 15,
      },
      details: [
        {
          name: "House Rent",
          amount: 230,
          date: "17 May 2023",
        },
        {
          name: "Parking",
          amount: 20,
          date: "17 May 2023",
        },
      ],
    },
    {
      name: "Food",
      total: 250,
      icon: "",
      growth: {
        up: true,
        percentage: 15,
      },
      details: [
        {
          name: "House Rent",
          amount: 230,
          date: "17 May 2023",
        },
        {
          name: "Parking",
          amount: 20,
          date: "17 May 2023",
        },
      ],
    },
    {
      name: "Transportation",
      total: 250,
      icon: "",
      growth: {
        up: true,
        percentage: 15,
      },
      details: [
        {
          name: "House Rent",
          amount: 230,
          date: "17 May 2023",
        },
        {
          name: "Parking",
          amount: 20,
          date: "17 May 2023",
        },
      ],
    },
    {
      name: "Entertainment",
      total: 250,
      icon: "",
      growth: {
        up: true,
        percentage: 15,
      },
      details: [
        {
          name: "House Rent",
          amount: 230,
          date: "17 May 2023",
        },
        {
          name: "Parking",
          amount: 20,
          date: "17 May 2023",
        },
      ],
    },
    {
      name: "Shopping",
      total: 250,
      icon: "",
      growth: {
        up: true,
        percentage: 15,
      },
      details: [
        {
          name: "House Rent",
          amount: 230,
          date: "17 May 2023",
        },
        {
          name: "Parking",
          amount: 20,
          date: "17 May 2023",
        },
      ],
    },
    {
      name: "Others",
      total: 250,
      icon: "",
      growth: {
        up: true,
        percentage: 15,
      },
      details: [
        {
          name: "House Rent",
          amount: 230,
          date: "17 May 2023",
        },
        {
          name: "Parking",
          amount: 20,
          date: "17 May 2023",
        },
      ],
    },
  ];
  return (
    <MainLayout type="balance">
      <h3 className="text-muted">Expenses Comparison</h3>
      <div className="w-full h-24">chart</div>
      <h3 className="text-muted">Expenses Breakdown</h3>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {breakdown.map((b) => (
          <div className="rounded shadow">
            <header className="flex p-3 bg-gray-03">
              <div className="bg-gray-02 aspect-square">Icon</div>
              <div className="">
                <p>{b.name}</p>
                <p>{b.total}</p>
              </div>
            </header>
            <content>
              {b.details.map((d) => (
                <div className="flex justify-between">
                  <p>{d.name}</p>
                  <div className="flex flex-col">
                    <p>{d.amount}</p>
                    <p>{d.date}</p>
                  </div>
                </div>
              ))}
            </content>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default ExpensesPage;
