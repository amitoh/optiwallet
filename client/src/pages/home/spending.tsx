import { SpendingSlider } from "@/pages/home/spendingSlider";
import { For } from "solid-js";

const getSlider = (label: string) => {
  return <SpendingSlider step={50} max={5000} min={0} label={label} />;
};

export const categories = [
  "Travel",
  "Restaurants",
  "Groceries",
  "Bills",
  "Gas",
  "Other",
];

export const Spending = () => {
  return (
    <>
      <span class="text-lg font-semibold mb-2">Spending</span>
      <For each={categories}>{(category) => getSlider(category)}</For>
    </>
  );
};
