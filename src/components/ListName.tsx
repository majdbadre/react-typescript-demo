import { Name } from "./Person.types";

type NameListProps = {
  names: Name[];
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
