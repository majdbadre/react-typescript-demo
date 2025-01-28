type GreatProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Great = (props: GreatProps) => {
  const {messageCount = 0} = props
  return (
    <div>
      <h1>Welcome {props.name} You have {messageCount} unread messages</h1>
    </div>
  );
};

export default Great;
