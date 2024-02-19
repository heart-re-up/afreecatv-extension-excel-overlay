import { DateTime } from "luxon";

/**
 * 엑셀 row 표시 데이터.
 */
export interface ExcelRowProps {
  /**
   * 순서. 0부터 시작합니다.
   */
  index: number;
  /**
   * column 이름
   */
  title: string;
  /**
   * column 개수. TODO: 네이밍 다시 생각 해보기.
   */
  balloon: number;
  /**
   * 마지막 변동 시간
   */
  latestModified: DateTime;
}
export default function ExcelRow(props: ExcelRowProps) {
  const { index, title, balloon, latestModified } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{balloon}</td>
      <td>{latestModified.toISO()}</td>
    </tr>
  );
}
