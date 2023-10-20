import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PaginationProps } from "services/types/UI/pagination";

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }: PaginationProps) => {
  let pageNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const clickHandler = (page: number) => setCurrentPage(page);

  return (
    <div className="w-full flex justify-end items-center mt-2">
      <ul className={"md:justify-end justify-center w-full h-1/2 flex"}>
        <li onClick={() => setCurrentPage(currentPage - 1)}
          className={`${currentPage === 1 && "invisible"} blog-page-arrow w-10 h-10  mr-2 text-center flex justify-center items-center text-black border-1 border-gray-400
            rounded-md cursor-pointer hover:bg-gray-400 transition-all`}>
          <BiChevronLeft size={25} />
        </li>
        {pageNumber.length > 1 &&
          pageNumber.map((number, index) => (
            <li onClick={() => clickHandler(number)}
              className={` w-10 flex justify-center items-center mr-2 font-semibold border-gray-400 border-1 rounded-md cursor-pointer 
            hover:bg-gray-400 transition-all ${pageNumber[index] === currentPage && "bg-indigo-500 text-white border-0 hover:bg-gray-400"}`}>
              {number}
            </li>
          ))}
        <li onClick={() => setCurrentPage(currentPage + 1)} className={`${currentPage === pageNumber.length && "invisible"
          } blog-page-arrow w-10 h-10  mr-2 text-center flex justify-center items-center  text-black border-1  border-gray-400 
           rounded-md cursor-pointer hover:bg-gray-400 transition-all `}>
          <BiChevronRight size={25} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;