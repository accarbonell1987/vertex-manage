"use client";

import Finder from "@/components/Finder";

interface FindStreamersProps {
	onFind: (criteria: { [key: string]: string }) => void;
}

const StreamingDataFinder = ({ onFind }: FindStreamersProps) => {
	return (
		<Finder
			onFind={onFind}
			criteriaOptions={[
				{ value: "wahaID", label: "Waha ID" },
				{ value: "wahaName", label: "Waha Name" },
			]}
		/>
	);
};

export default StreamingDataFinder;
