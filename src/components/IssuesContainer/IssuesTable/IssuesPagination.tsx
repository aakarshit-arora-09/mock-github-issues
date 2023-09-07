import React, {Dispatch, startTransition} from 'react';
import {Action} from "@/components/IssuesContainer/types";
import {PageInfo} from "@/__generated__/graphql";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: Dispatch<Action>;
    pageInfo: PageInfo
}

export const IssuesPagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange, pageInfo}) => {
    const onTransitionPageChange = (...args: Parameters<typeof onPageChange>) => startTransition(() => onPageChange(...args))
    // const paginationArray = calculatePagination(currentPage, totalPages);
    return (
        <nav className="mt-4 flex justify-center items-center ">
            <ul className="flex space-x-2">
                <li>
                    <button
                        onClick={() => {
                            if (currentPage !== 1)
                                onTransitionPageChange({type: "PREVIOUS", before: pageInfo.startCursor as string})
                        }}
                        className={`px-3 py-2 rounded-md ${
                            currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-gray-200'
                        }`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {/*{paginationArray.map((item) => (*/}
                {/*    <li key={item}>*/}
                {/*        {item !== 0 ? <button*/}
                {/*            onClick={(e) => {*/}

                {/*                onPageChange({type: "SPECIFIC_PAGE", newPageNumber: item})*/}
                {/*            }}*/}
                {/*            className={`px-3 py-2 rounded-md ${*/}
                {/*                currentPage === item*/}
                {/*                    ? 'bg-blue-500 text-white'*/}
                {/*                    : 'hover:bg-gray-200'*/}
                {/*            }`}*/}
                {/*        >*/}
                {/*            {String(item)}*/}
                {/*        </button> : <div className={"p-1"}>...</div>}*/}
                {/*    </li>)*/}
                {/*)}*/}

                <li>
                    <button
                        onClick={() => {
                            if (currentPage !== totalPages)
                                onTransitionPageChange({type: "NEXT", after: pageInfo.endCursor as string})
                        }}
                        className={`px-3 py-2 rounded-md ${
                            currentPage === totalPages
                                ? 'text-gray-600 cursor-not-allowed'
                                : 'hover:bg-gray-200'
                        }`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

