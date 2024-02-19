"use client";

import { useCallback, useEffect, useState } from "react";
import { DefaultMessagePayload, Action } from "@afreecatv/extension";
import { DateTime } from "luxon";
import ExcelTableTitle from "@/components/excel/ExcelTableTitle";
import ExcelTable from "@/components/excel/ExcelTable";
import { useAfreecaExtensionContext } from "@/contexts/AfreecaExtensionContext";
import { Donation } from "@/lib/afreeca/Donation";

export interface ExcelProps {
  title?: string;
}

export default function Excel(props: ExcelProps) {
  const { title } = props;
  const extension = useAfreecaExtensionContext();
  const [messages, setMessages] = useState<Array<Donation>>([]);
  const handleCLear = useCallback(
    (action: string, payload: any, fromId: string) => {
      if (action === "clear" && fromId === extension?.broadInfo?.bjId)
        setMessages([]);
    },
    [setMessages],
  );
  const handleChat = useCallback(
    (action: Action, message: unknown) => {
      switch (action) {
        // 일반 메시지
        case "MESSAGE":
          {
            const {
              userId,
              userNickname,
              message: text,
              // userStatus, // 여기서 매니저 정보나 열혈 정보를 얻음
            } = message as DefaultMessagePayload;
            const donation = {
              message: text,
              userId,
              userNickname,
              createdAt: DateTime.now(),
            } as Donation;
            setMessages((prevState) => [...prevState, donation]);
          }
          break;
        default:
          // do nothing.
          break;
      }
    },
    [setMessages],
  );

  useEffect(() => {
    extension?.sdk?.chat.listen(handleChat);
    extension?.sdk?.broadcast.listen(handleCLear);
  }, [extension, handleChat]);

  return (
    <>
      <ExcelTableTitle>{title}</ExcelTableTitle>
      <ExcelTable />
      <pre>{JSON.stringify(messages, null, 4)}</pre>
    </>
  );
}
