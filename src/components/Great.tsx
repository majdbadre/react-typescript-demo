type GreatProps = {
   name: string,
}

const Great = (props: GreatProps) => {
  return (
    <div>
      <h1>Welcome {props.name} You have 10 unread messages</h1>
    </div>
  );
}

export default Great;
