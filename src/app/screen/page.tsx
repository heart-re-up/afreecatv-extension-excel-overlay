import clsx from "clsx";
import classes from "./Page.module.scss";
import Excel from "@/components/excel/Excel";

export default function Page() {
  return (
    <div className={clsx(classes.page)}>
      <Excel title="엑셀타이틀 영역" />
    </div>
  );
}
