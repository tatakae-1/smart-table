<<<<<<< HEAD
import { sortMap } from "../lib/sort.js";

export function initSorting(columns) {
    return (query, state, action) => {
=======
import {sortCollection, sortMap} from "../lib/sort.js";

export function initSorting(columns) {
    return (data, state, action) => {
>>>>>>> b9a72309d07abf8c952b4794bf01a814aa48e479
        let field = null;
        let order = null;

        if (action && action.name === 'sort') {
<<<<<<< HEAD
            // Запоминаем выбранный режим сортировки
            action.dataset.value = sortMap[action.dataset.value];
            field = action.dataset.field;
            order = action.dataset.value;

            // Сбрасываем сортировки остальных колонок
            columns.forEach(column => {
                if (column.dataset.field !== action.dataset.field) {
                    column.dataset.value = 'none';
                }
            });

        } else {
            // Получаем выбранный режим сортировки
            columns.forEach(column => {
                if (column.dataset.value !== 'none') {
                    field = column.dataset.field;
                    order = column.dataset.value;
                }
            });
        }

        const sort = (field && order !== 'none') ? `${field}:${order}` : null;

        return sort ? Object.assign({}, query, { sort }) : query;
    };
=======
            // @todo: #3.1 — запомнить выбранный режим сортировки

            // @todo: #3.2 — сбросить сортировки остальных колонок
        } else {
            // @todo: #3.3 — получить выбранный режим сортировки
        }

        return sortCollection(data, field, order);
    }
>>>>>>> b9a72309d07abf8c952b4794bf01a814aa48e479
}