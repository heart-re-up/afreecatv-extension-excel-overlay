/**
 * 엑셀 컬럼 옵션.
 */
export interface ColumnConfig {
  /** 순서를 숨깁니다. */
  hideIndex: boolean;
  /** 제목을 숨깁니다. */
  hideTitle: boolean;
  /** 수치를 숨깁니다. */
  hideBalloon: boolean;
  /** 마지막 변동 시간을 숨깁니다. */
  hideLatestModified: boolean;
}
