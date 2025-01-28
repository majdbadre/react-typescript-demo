import Great from "./components/Great";
import ListName from "./components/ListName";
import Person from "./components/person";
import Status from "./components/status";

const App = () => {
  const personName = {
    first: "badr",
    last: "name",
  };

  const nameList = [
    {
      first: "sladkf",
      last: "sedond",
    },
    {
      first: "12314",
      last: "sedo6543nd",
    },
    {
      first: "la23dkf",
      last: "@sed003ond",
    },
  ];

  return (
    <div>
      <Status status="error" />
    </div>
  );
};

export default App;
