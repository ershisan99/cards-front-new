export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type Paginated<T> = {
  pagination: Pagination
  items: T[]
}
