import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "el1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: "el2", title: "1", amount: 55.2, date: new Date(2021, 2, 28) },
    { id: "el3", title: "2", amount: 29.7, date: new Date(2022, 12, 20) },
    { id: "el4", title: "3", amount: 76, date: new Date(2019, 5, 10) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
