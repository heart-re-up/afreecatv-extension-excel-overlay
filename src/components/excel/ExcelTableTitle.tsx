import React from "react";
import clsx from "clsx";
import classes from "./ExcelTableTitle.module.scss";

export interface ExcelTableTitleProps extends React.HTMLProps<HTMLDivElement> {}
export default function ExcelTableTitle(props: ExcelTableTitleProps) {
  const { children } = props;
  return (
    <div className={clsx(classes.root)}>
      <div className={classes.text}>{children}</div>
    </div>
  );
}
