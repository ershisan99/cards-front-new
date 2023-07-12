import { User } from '../auth/types'

export type GetDecksParams = {
  currentPage?: number
  pageSize?: number
  authorId?: string
  name?: string
  minCardsCount?: number
  maxCardsCount?: number
} | void

export type Decks = Deck[]

export type DeckAuthor = Pick<User, 'id' | 'name'>

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: any
  rating: number
  isDeleted?: any
  isBlocked?: any
  created: string
  updated: string
  author: DeckAuthor
  cardsCount: number
}

export type CreateDeckInput = Pick<Deck, 'cover' | 'name' | 'isPrivate'>
