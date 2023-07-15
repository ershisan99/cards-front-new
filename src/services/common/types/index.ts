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
export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type PaginatedArgs<T extends Record<string, any> = {}> = {
  currentPage?: number
  itemsPerPage?: number
  pageSize?: number
  orderBy?: string | null
} & T
