"use client";

import { useMemo } from "react";
import { DateTime } from "luxon";
import { useAfreecaExtensionContext } from "@/contexts/AfreecaExtensionContext";

export default function Page() {
  const extension = useAfreecaExtensionContext();
  const bjNickName = useMemo(
    () => extension?.broadInfo?.bjNickname ?? "로드안됨",
    [extension],
  );
  const startTime = useMemo(
    () =>
      extension?.broadInfo?.startTime === undefined
        ? undefined
        : DateTime.fromFormat(
            extension?.broadInfo?.startTime ?? "2024-01-01 10:00:00",
            "yyyy-MM-dd HH:mm:ss",
          ),
    [extension],
  );
  const elapsed = useMemo(
    () =>
      startTime === undefined
        ? 0
        : DateTime.now().diff(startTime).as("minutes"),
    [startTime],
  );
  const handleClear = () => {
    extension?.sdk?.broadcast.send("clear", {});
  };
  return (
    <div>
      <p>비제이 이름 : {bjNickName}</p>
      <p>방송중 비제이 여부 : {extension?.authInfo?.isBJ ? "맞음" : "아님"}</p>
      <p>방송번호 : {extension?.broadInfo?.broadNo}</p>
      <p>방송제목 : {extension?.broadInfo?.title}</p>
      <p>비트레이트 : {extension?.broadInfo?.bitrate}</p>
      <p>
        성인방송 여부 : {extension?.broadInfo?.allowsAdult ? "맞음" : "아님 "}
      </p>
      <p>
        재송출 가능 여부 : {extension?.broadInfo?.canResend ? "맞음" : "아님 "}
      </p>
      <p>방송 시작 시간(raw) : {extension?.broadInfo?.startTime}</p>
      <p>방송 시작 시간(fmt) : {startTime?.toISO()}</p>
      <p>방송 경과 시간(min) : {elapsed}분</p>
      <button onClick={handleClear}>채팅 클리어</button>
    </div>
  );
}
