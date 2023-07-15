import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { useForm } from 'react-hook-form'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import {
  Button,
  ControlledCheckbox,
  ControlledTextField,
  TextField,
  Typography,
} from '../../components/ui'
import { Modal } from '../../components/ui/modal'
import { Page } from '../../components/ui/page'
import { Slider } from '../../components/ui/slider/slider'
import { Column, Table } from '../../components/ui/table'
import { Toggle } from '../../components/ui/toggle'
import { useGetMeQuery } from '../../services/auth/auth'
import { Sort } from '../../services/common/types'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from '../../services/decks/decks'

import s from './decks.module.scss'

const newDeckSchema = z.object({
  name: z.string().min(3).max(30),
  cover: z.instanceof(File).optional(),
  isPrivate: z.boolean(),
})

type NewDeck = z.infer<typeof newDeckSchema>
export const Decks = () => {
  const { data: user } = useGetMeQuery()

  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)
  const [search, setSearch] = useState('')
  const [showMyDecks, setShowMyDecks] = useState(false)
  const [range, setRange] = useState([0, 100])
  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'asc' })
  const sortString = sort ? `${sort.key}-${sort.direction}` : null

  const {
    data: decks,
    isLoading,
    isError,
  } = useGetDecksQuery({
    itemsPerPage: 100,
    name: search,
    authorId: showMyDecks ? user?.id : undefined,
    minCardsCount: range[0],
    maxCardsCount: range[1],
    orderBy: sortString,
  })
  const [rangeValue, setRangeValue] = useState([0, 1])

  useEffect(() => {
    if (rangeValue[1] !== decks?.maxCardsCount) {
      setRangeValue(prev => [prev[0], decks?.maxCardsCount || 100])
    }
  }, [decks?.maxCardsCount])
  const { control, handleSubmit } = useForm<NewDeck>({
    resolver: zodResolver(newDeckSchema),
    defaultValues: {
      isPrivate: false,
      name: '',
    },
  })
  const resetFilters = () => {
    setSearch('')
    setShowMyDecks(false)
    setRange([0, 100])
    setRangeValue([0, 100])
  }
  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()
  const handleDeckCreated = (args: NewDeck) => {
    createDeck(args)
      .unwrap()
      .then(() => {
        toast.success('Deck created successfully')
        closeModal()
      })
      .catch(err => {
        toast.error(err.data.message)
      })
  }

  const columns: Column[] = [
    {
      key: 'name',
      title: 'Name',
      sortable: true,
    },
    {
      key: 'cardsCount',
      title: 'Cards',
      sortable: true,
    },
    {
      key: 'updated',
      title: 'Last Updated',
      sortable: true,
    },
    {
      key: 'author.name',
      title: 'Author',
      sortable: true,
    },
    {
      key: 'actions',
      title: '',
    },
  ]

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>

  return (
    <Page>
      <Modal open={showModal} onClose={closeModal} title={'Create Deck'}>
        <form onSubmit={handleSubmit(handleDeckCreated)}>
          <ControlledTextField label={'Name'} control={control} name={'name'} />
          <ControlledCheckbox
            label={'Private'}
            control={control}
            name={'isPrivate'}
            position={'left'}
          />
          <Button type={'submit'}>Create</Button>
        </form>
      </Modal>
      <div
        style={{
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant={'large'}>Decks</Typography>
        <Button onClick={openModal}>Add New Deck</Button>
      </div>
      <div className={s.controls}>
        <TextField placeholder={'Search'} value={search} onValueChange={setSearch} />
        <label className={s.toggle}>
          Show only my decks <Toggle checked={showMyDecks} onCheckedChange={setShowMyDecks} />
        </label>
        <div style={{ display: 'flex', flexGrow: '1' }}>
          <Slider
            onValueCommit={setRange}
            value={rangeValue}
            onValueChange={setRangeValue}
            max={decks?.maxCardsCount}
          />
        </div>
        <Button variant={'secondary'} onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>

      <div style={{ width: '100%' }}>
        <Table.Root style={{ width: '100%' }}>
          <Table.Header columns={columns} sort={sort} onSort={setSort} />
          <Table.Body>
            {decks?.items?.map(deck => (
              <Table.Row key={deck.id}>
                <Table.Cell>
                  <Link to={`/cards/${deck.id}`}>{deck.name}</Link>
                </Table.Cell>
                <Table.Cell>{deck.cardsCount}</Table.Cell>
                <Table.Cell>{dayjs(deck.updated).format('L, LT')}</Table.Cell>
                <Table.Cell>{deck.author.name}</Table.Cell>
                <Table.Cell>
                  <button
                    className={'unset'}
                    onClick={() => {
                      deleteDeck({ deckId: deck.id })
                    }}
                  >
                    <FaTrash />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Page>
  )
}
