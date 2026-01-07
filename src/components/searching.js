<<<<<<< HEAD
export function initSearching(searchField) {
    return (query, state, action) => {
        return state[searchField] ? Object.assign({}, query, {
            search: state[searchField]
        }) : query;
    };
=======
import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data;
    }
>>>>>>> b9a72309d07abf8c952b4794bf01a814aa48e479
}