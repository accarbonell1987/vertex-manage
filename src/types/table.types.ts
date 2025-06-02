export type ColumnTableType<T = unknown> = {
  key: string;
  title: string;
  visible: boolean;
  render?: (data: T) => React.ReactNode;
};
