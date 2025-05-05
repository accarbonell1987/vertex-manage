"use client";

import Finder from "@/components/Finder";

interface FindStreamersProps {
	onFind: (criteria: { [key: string]: string }) => void;
}

const StreamersFinder = ({ onFind }: FindStreamersProps) => {
	return (
		<Finder
			onFind={onFind}
			criteriaOptions={[
				{ value: "wahaID", label: "Waha ID" },
				{ value: "wahaName", label: "Waha Name" },
				{ value: "name", label: "Nombre" },
				{ value: "phoneNumber", label: "Teléfono" },
				{ value: "bankAccount", label: "Cuenta Bancaria" },
			]}
		/>
	);
};

export default StreamersFinder;
