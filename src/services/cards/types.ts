export type GetCardsParams = {
  deckId: string
  currentPage?: number
  itemsPerPage?: number
  pageSize?: number
  orderBy?: string | null
}

export type Card = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  grade: number
  shots: number
  questionImg?: any
  answerImg?: any
  answerVideo?: any
  questionVideo?: any
  comments?: any
  type?: any
  rating: number
  moreId?: any
  created: string
  updated: string
}

export type CreateCardInput = Pick<Card, 'question' | 'answer' | 'deckId'>
export type DeleteCardInput = { cardId: Card['id'] }
