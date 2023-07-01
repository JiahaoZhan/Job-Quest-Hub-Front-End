import React, {useMemo} from "react";

interface IProps {
    totalCount: number,
    currentPage: number,
    pageSize: number,
    siblingCount?: number,
    className?: string,
}

export const DOTS:string = "...";

export const usePagination = (props:IProps) => {
    
    const {
        totalCount,
        currentPage,
        pageSize,
        siblingCount = 1,
        className
    } = props;

    const calcRange = (start, end) => {
        let length = end - start + 1;
        return Array.from({length}, (_, idx) => idx + start);
    }

    const range = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5; 
        if (totalPageNumbers >= totalPageCount) {
            return calcRange(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots:boolean = leftSiblingIndex > 2;
        const shouldShowRightDots:boolean = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = calcRange(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = calcRange(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            )
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = calcRange(leftSiblingIndex, rightSiblingIndex)
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

    }, [totalCount, pageSize, siblingCount, currentPage]);
    

    return range;
}