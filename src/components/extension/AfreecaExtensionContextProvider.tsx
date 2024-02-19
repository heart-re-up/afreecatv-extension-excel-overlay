"use client";

import { useCallback, useEffect, useState } from "react";
import { loadScript } from "@heartreup/script-loader";
import { AuthInfo, BroadInfo, Common } from "@afreecatv/extension";
import LayoutDefaultParams from "@/lib/LayoutDefaultParams";
import { AfreecaExtensionContext } from "@/contexts/AfreecaExtensionContext";

export default function AfreecaExtensionContextProvider(
  props: LayoutDefaultParams,
) {
  const { children } = props;
  const [loaded, setLoaded] = useState(false);
  const [sdk, setSdk] = useState<Common>();
  const [authInfo, setAuthInfo] = useState<AuthInfo>();
  const [broadInfo, setBroadInfo] = useState<BroadInfo>();
  const load = async () => {
    const el = await loadScript(
      "https://static.afreecatv.com/asset/app/extension-helper/afreecatv-extension-sdk.js",
    );
    setSdk(window.AFREECA.ext());
  };

  /**
   * SDK 초기화 콜백.
   */
  const handleInitialize = useCallback((auth: AuthInfo, broad: BroadInfo) => {
    setLoaded(true);
    setAuthInfo(auth);
    setBroadInfo(broad);
  }, []);

  // DOM 마운트 시 afreecatv 확장프로그램 SDK 를 불러온다.
  useEffect(() => {
    load();
  }, []);

  // sdk 가 변경되면 로드 상태를 false 로 변경하고 초기화를 진행한다.
  useEffect(() => {
    setLoaded(false);
    sdk?.handleInitialization(handleInitialize);
  }, [setLoaded, sdk, handleInitialize]);

  const contextValue = {
    loaded,
    sdk,
    authInfo,
    broadInfo,
  };

  return (
    <AfreecaExtensionContext.Provider value={contextValue}>
      {children}
    </AfreecaExtensionContext.Provider>
  );
}
