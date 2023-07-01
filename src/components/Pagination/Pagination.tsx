import React from "react"
import classnames from "classnames"
import { usePagination, DOTS } from "./hooks"
import "./style/pagination.scss"

interface IProps {
    onPageChange: (currentPage: number) => void,
    totalCount: number,
    currentPage: number,
    pageSize: number,
    siblingCount?: number,
    className?: string,
}

export const Pagination:React.FC<IProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
}) => {
    
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    let lastPage = 1 

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    }
    
    if (paginationRange != null) {
        if (currentPage === 0 || paginationRange.length < 2) {
            return null;
        }
        lastPage = paginationRange[paginationRange.length - 1];
    }

  

    
    return (
    <ul
      className={classnames('pagination-container', className && { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange && paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
    )
}