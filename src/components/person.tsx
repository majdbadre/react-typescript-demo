import { personName } from "./Person.types";

const Person = (props: personName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;
