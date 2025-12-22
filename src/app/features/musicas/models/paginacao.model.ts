export interface Paginacao<T> {
    content: T[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
}