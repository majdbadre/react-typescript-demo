type ContainerProps = {
   styles: React.CSSProperties,
}

const Container = (props: ContainerProps) => {
  return (
    <div>
      <div style={props.styles}>hello wolrd</div>
    </div>
  );
}

export default Container;
