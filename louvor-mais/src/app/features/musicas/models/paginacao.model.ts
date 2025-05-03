export interface Paginacao<T> {
    items: T[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
}