"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartState {
  items: CartItem[];
}

interface CartContextValue {
  items: CartItem[];
  addItem: (
    product: Product,
    selectedColor: string,
    selectedSize: string,
    quantity?: number
  ) => void;
  removeItem: (productId: string, selectedColor: string, selectedSize: string) => void;
  updateQuantity: (
    productId: string,
    selectedColor: string,
    selectedSize: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

// ─── Reducer ─────────────────────────────────────────────────────────────────

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: {
        product: Product;
        selectedColor: string;
        selectedSize: string;
        quantity: number;
      };
    }
  | {
      type: "REMOVE_ITEM";
      payload: { productId: string; selectedColor: string; selectedSize: string };
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: {
        productId: string;
        selectedColor: string;
        selectedSize: string;
        quantity: number;
      };
    }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; payload: CartItem[] };

function isSameItem(
  item: CartItem,
  productId: string,
  selectedColor: string,
  selectedSize: string
): boolean {
  return (
    item.product.id === productId &&
    item.selectedColor === selectedColor &&
    item.selectedSize === selectedSize
  );
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, selectedColor, selectedSize, quantity } = action.payload;
      const existingIndex = state.items.findIndex((item) =>
        isSameItem(item, product.id, selectedColor, selectedSize)
      );

      if (existingIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return { items: updatedItems };
      }

      return {
        items: [
          ...state.items,
          { product, quantity, selectedColor, selectedSize },
        ],
      };
    }

    case "REMOVE_ITEM": {
      const { productId, selectedColor, selectedSize } = action.payload;
      return {
        items: state.items.filter(
          (item) => !isSameItem(item, productId, selectedColor, selectedSize)
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, selectedColor, selectedSize, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          items: state.items.filter(
            (item) => !isSameItem(item, productId, selectedColor, selectedSize)
          ),
        };
      }
      return {
        items: state.items.map((item) =>
          isSameItem(item, productId, selectedColor, selectedSize)
            ? { ...item, quantity }
            : item
        ),
      };
    }

    case "CLEAR_CART":
      return { items: [] };

    case "HYDRATE":
      return { items: action.payload };

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = "pimenta-country-cart";

const CartContext = createContext<CartContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch {
      // Silently ignore malformed storage data
    }
  }, []);

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Silently ignore storage write failures (e.g. private browsing quota)
    }
  }, [state.items]);

  const addItem = useCallback(
    (
      product: Product,
      selectedColor: string,
      selectedSize: string,
      quantity = 1
    ) => {
      dispatch({
        type: "ADD_ITEM",
        payload: { product, selectedColor, selectedSize, quantity },
      });
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, selectedColor: string, selectedSize: string) => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: { productId, selectedColor, selectedSize },
      });
    },
    []
  );

  const updateQuantity = useCallback(
    (
      productId: string,
      selectedColor: string,
      selectedSize: string,
      quantity: number
    ) => {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { productId, selectedColor, selectedSize, quantity },
      });
    },
    []
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const total = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
