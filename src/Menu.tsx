import { foods } from "./food";
import Heading from "./shared/heading";

export default function Menu() {
  return (
    <div className="flex flex-wrap">
      {foods.map((food) => {
        return (
          <div
            className="p-2 shadow-lg hover:bg-indigo-600 hover:text-white border flex max-w-sm flex-row m-2 rounded"
            key={food.name}
          >
            <Heading level={3}>{food.name}</Heading>
            <img
              className="h-52"
              src={"/images/" + food.image}
              alt={food.name}
            />
            <p>{food.description}</p>
            <p>{food.price}</p>
          </div>
        );
      })}
    </div>
  );
}
