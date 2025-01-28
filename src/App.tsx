import Great from "./components/Great";
import Heading from "./components/heading";
import ListName from "./components/ListName";
import Oscar from "./components/oscar";
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
      <Oscar>
        <Heading>Place holder text</Heading>
      </Oscar>
      <Great name="majd" messageCount={10} isLoggedIn={true}/>
    </div>
  );
};

export default App;
