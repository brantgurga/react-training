type CheckboxProps = {
  id: string;
  label: React.ReactNode;
};

export default function Checkbox(props: CheckboxProps) {
  return (
    <>
      <input id={props.id} type="checkbox" />{" "}
      <label htmlFor={props.id}>{props.label}</label>
    </>
  );
}
