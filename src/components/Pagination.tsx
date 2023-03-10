import classNames from "classnames";

interface IPagination {
  dataPerPage: number;
  totalData: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex list-none gap-2.5 justify-center">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={classNames(
            "bg-neutral-300 text-gray-900 font-bold text-center flex rounded-full",
            {
              "bg-neutral-500": number === currentPage,
            }
          )}>
          <button onClick={() => paginate(number)} className="w-8 h-8">
            {number}
          </button>
        </li>
      ))}
    </div>
  );
};
