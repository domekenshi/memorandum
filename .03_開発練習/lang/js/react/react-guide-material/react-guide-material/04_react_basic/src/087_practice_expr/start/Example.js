const title = "Expression";
const hello = "Hello";
const array = ["item1", "item2", "item3"];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = "UpperCaseText";

const Example = () => {
  return (
    <>
      <h3>Hello JSX</h3>
      <h3>{upperCaseText.toUpperCase()}</h3>
      <h3>{hello + " " + title}</h3>
      <h3>{array}</h3>
      <h3>{fn()}</h3>
    </>
  );
};

export default Example;
