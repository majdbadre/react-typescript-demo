type NameListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const ListName = (props: NameListProps) => {
  return (
    <div>
      <div>
        {props.names.map((item) => (
          <p>
            {item.first} {item.last}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ListName;
