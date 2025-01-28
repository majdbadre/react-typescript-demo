type personName = {
   name: {
      first: string,
      last: string
   }
}

const Person = (props: personName) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;
