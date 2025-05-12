import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationInTable = ({
	currentPage,
	totalPages,
	setCurrentPage,
}: {
	currentPage: number;
	totalPages: number;
	setCurrentPage: (currentPage: number) => void;
}) => {
	return (
		<Pagination className="mt-4 justify-center sm:justify-end">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => setCurrentPage((p) => p - 1)}
						className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
					/>
				</PaginationItem>

				{(() => {
					const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
					const pagesToShow = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);
					return pagesToShow.map((page) => (
						<PaginationItem key={page}>
							<PaginationLink isActive={currentPage === page} onClick={() => setCurrentPage(page)}>
								{page}
							</PaginationLink>
						</PaginationItem>
					));
				})()}

				<PaginationItem>
					<PaginationNext
						onClick={() => setCurrentPage((p) => p + 1)}
						className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationInTable;
