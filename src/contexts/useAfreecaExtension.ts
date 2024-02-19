import { AfreecaExtensionContextValue } from "@/contexts/AfreecaExtensionContext";

export interface UseAfreecaExtensionProps {}
export interface UseAfreecaExtensionReturnValue {
  contextValue: AfreecaExtensionContextValue;
}

export default function useAfreecaExtension(
  props: UseAfreecaExtensionProps,
): UseAfreecaExtensionReturnValue {}
