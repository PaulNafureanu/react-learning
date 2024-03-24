// Control and isolate event propagation and default behaviours across nested components

const eventFnWrapper = <T extends Function>(fn: T) => {
  return <E extends React.SyntheticEvent>(event: E) => {
    event.stopPropagation();
    event.preventDefault();
    fn();
  };
};

export default eventFnWrapper;
