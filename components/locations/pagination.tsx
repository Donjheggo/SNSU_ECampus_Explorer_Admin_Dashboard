"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export function TablePagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const lastpage = Math.ceil(totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <Link href={currentPage !== 1 ? createPageUrl(currentPage - 1) : ""}>
          <PaginationItem>
            <Button variant="ghost" disabled={currentPage === 1 && true}>
              <ChevronLeft size="20" />
            </Button>
          </PaginationItem>
        </Link>

        <Link href={createPageUrl(currentPage - 1)}>
          <PaginationItem hidden={currentPage === 1 && true}>
            <Button variant="ghost">{currentPage - 1}</Button>
          </PaginationItem>
        </Link>

        <PaginationItem>
          <Button variant="outline">{currentPage}</Button>
        </PaginationItem>

        <Link href={createPageUrl(currentPage + 1)}>
          <PaginationItem hidden={currentPage === lastpage}>
            <Button variant="ghost">{currentPage + 1}</Button>
          </PaginationItem>
        </Link>

        <Link
          href={currentPage !== lastpage ? createPageUrl(currentPage + 1) : ""}
        >
          <PaginationItem>
            <Button variant="ghost" disabled={currentPage === lastpage && true}>
              <ChevronRight size="20" />
            </Button>
          </PaginationItem>
        </Link>
      </PaginationContent>
    </Pagination>
  );
}
