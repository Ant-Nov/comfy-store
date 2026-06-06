import clsx from "clsx";
import { useLoaderData, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PaginationContainer = () => {
  const { meta: { pagination: { page, pageCount, pageSize, total }}} = useLoaderData();

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)
    .map((item, index) => (item > 1 && page - 2 === item) || (item < pageCount && page + 2 === item) ? '...'
      : ![1, pageCount, page, page + 1, page - 1].includes(item) ? null 
      : item
    )
    .filter(item => !!item);

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      const sp = new URLSearchParams(location.search);

      sp.set("page", newPage);

      navigate({ search: sp.toString() });
    }
  };

  return (
    <div className="flex justify-end">
      <div className="join ml-auto">
        <button
          className={clsx(
            "join-item btn",
            !pageCount || page === 1 && 'btn-disabled'
          )}
          onClick={() => handlePageChange(page - 1)}
        >Prev</button>

        {
          pages.map(item => (
            <button
              key={item}
              className={clsx(
                "join-item btn",
                page !== item && 'hidden sm:block',
                page === item && 'btn-active block',
                item === '...' && 'btn-disabled',
              )}
              onClick={() => handlePageChange(item)}
            >{item}</button>
          ))
        }

        <button
          className={clsx(
            "join-item btn",
            !pageCount || page === pageCount && 'btn-disabled'
          )}
          onClick={() => handlePageChange(page + 1)}
        >Next</button>
      </div>
    </div>
  );
};