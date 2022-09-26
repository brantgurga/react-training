import Button from "./shared/button";
import Heading from "./shared/heading";
import Input from "./shared/input";

export default function Admin() {
  return (
    <>
      <Heading level={2}>Admin</Heading>
      <form>
        <Input id="name" label="Name" />
        <Input id="description" label="Description" />
        <Input id="price" label="Price" type="number" />
        <Button variant="primary" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}
