export type ColumnTableType = {
	key: string;
	title: string;
	visible: boolean;
	render?: (data: any) => React.ReactNode;
};
