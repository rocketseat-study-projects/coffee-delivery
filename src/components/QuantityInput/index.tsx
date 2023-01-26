import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  quantity: number;
  id: string;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}

export function QuantityInput({ id, onIncrease, onDecrease, quantity }: QuantityInputProps) {
  return (
    <>
      <button
        disabled={quantity <= 0}
        onClick={() => {
          onDecrease(id);
        }}
      >
        <Minus />
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => {
          onIncrease(id);
        }}
      >
        <Plus />
      </button>
    </>
  );
}
