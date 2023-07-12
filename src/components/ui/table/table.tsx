import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import { ChevronUp } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}
export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  title: string
  key: string
  sortable?: boolean
}
export const Header: FC<
  Omit<
    HeadProps & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const classNames = {
    chevron: sort?.direction === 'asc' ? '' : s.chevronDown,
  }
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <Head {...restProps}>
      <Row>
        {columns.map(({ title, key, sortable }) => (
          <HeadCell key={key} onClick={handleSort(key, sortable)} sortable={sortable}>
            {title}
            {sort?.key === key ? <ChevronUp className={classNames.chevron} /> : ''}
          </HeadCell>
        ))}
      </Row>
    </Head>
  )
}
export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export type HeadCellProps = ComponentProps<'th'> & {
  sortable?: boolean
}

export const HeadCell: FC<HeadCellProps> = ({ className, children, sortable, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell, sortable && s.sortable),
  }

  return (
    <th className={classNames.headCell} {...rest}>
      <span>{children}</span>
    </th>
  )
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography
      variant={'h2'}
      className={classNames.empty}
      style={{ marginTop: mt, marginBottom: mb }}
    >
      Пока тут еще нет данных! :(
    </Typography>
  )
}

export type TableProps = {}
export const TableComponent = () => {}

export const Table = {
  Root,
  Head,
  Header,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}
