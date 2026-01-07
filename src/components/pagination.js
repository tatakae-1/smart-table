<<<<<<< HEAD
import { getPages } from "../lib/utils.js";

export const initPagination = (
  { pages, fromRow, toRow, totalRows },
  createPage
) => {
  const pageTemplate = pages.firstElementChild.cloneNode(true);
  pages.firstElementChild.remove();
  
  let pageCount;

  const applyPagination = (query, state, action) => {
    const limit = state.rowsPerPage;
    let page = state.page;

    if (action) switch(action.name) {
      case 'prev': page = Math.max(1, page - 1); break;
      case 'next': page = Math.min(pageCount, page + 1); break;
      case 'first': page = 1; break;
      case 'last': page = pageCount; break;
    }

    return Object.assign({}, query, {
      limit,
      page
    });
  }

  const updatePagination = (total, { page, limit }) => {
    pageCount = Math.ceil(total / limit);
    
    const visiblePages = getPages(page, pageCount, 5);
    pages.replaceChildren(
      ...visiblePages.map((pageNumber) => {
        const el = pageTemplate.cloneNode(true);
        return createPage(el, pageNumber, pageNumber === page);
      })
    );

    fromRow.textContent = (page - 1) * limit + 1;
    toRow.textContent = Math.min((page * limit), total);
    totalRows.textContent = total;
  }

  return {
    updatePagination,
    applyPagination
  };
};
=======
import {getPages} from "../lib/utils.js";

export const initPagination = ({pages, fromRow, toRow, totalRows}, createPage) => {
    // @todo: #2.3 — подготовить шаблон кнопки для страницы и очистить контейнер

    return (data, state, action) => {
        // @todo: #2.1 — посчитать количество страниц, объявить переменные и константы

        // @todo: #2.6 — обработать действия

        // @todo: #2.4 — получить список видимых страниц и вывести их

        // @todo: #2.5 — обновить статус пагинации

        // @todo: #2.2 — посчитать сколько строк нужно пропустить и получить срез данных
        return data.slice(0, 10);
    }
}
>>>>>>> b9a72309d07abf8c952b4794bf01a814aa48e479
