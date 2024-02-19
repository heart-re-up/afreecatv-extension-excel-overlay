export interface ExcelTableProps {}

export default function ExcelTable(props: ExcelTableProps) {
  return (
    <table>
      <tr>
        <th>순서</th>
        <td>이름</td>
        <td>수치</td>
        <td>변동시간</td>
      </tr>
    </table>
  );
}
