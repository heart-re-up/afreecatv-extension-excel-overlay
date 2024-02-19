import React, { useContext } from "react";
import { Common, AuthInfo, BroadInfo } from "@afreecatv/extension";

export interface AfreecaExtensionContextValue {
  loaded: boolean;
  sdk?: Common;
  authInfo?: AuthInfo;
  broadInfo?: BroadInfo;
}

export const AfreecaExtensionContext =
  React.createContext<AfreecaExtensionContextValue | null>(null);
export const useAfreecaExtensionContext = () =>
  useContext(AfreecaExtensionContext);
