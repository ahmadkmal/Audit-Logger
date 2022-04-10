import React from 'react'
import Pagination from '@components/Pagination'
import { TableProps, TableHeaderTypes, ColType } from './types'
import styles from './table.module.scss'
const Table = <T extends unknown>({
  data,
  tableHeadersRow,
  tableBodyRow,
  itemsPerPage,
  totalPages,
}: TableProps<T>): JSX.Element => {
  const { current: dataRef } = React.useRef<T[]>(data)
  const [page, setPage] = React.useState(1)
  const [sortBy, setSortBy] = React.useState<{
    key: string
    type: string
    order: string
  }>({ key: '', type: '', order: '' })
  //  implement sort logic using memo
  const sortedData = React.useMemo(() => {
    if (sortBy.key === '') return dataRef
    const sortedData = dataRef
    // asc or desc
    const order = sortBy.order === 'asc' ? 1 : -1
    // if type equals to 'data' then convert to date

    if (sortBy.type === 'date') {
      sortedData.sort((a: T, b: T) => {
        const aDate = new Date(a[sortBy.key as keyof T]! as any)
        const bDate = new Date(b[sortBy.key as keyof T]! as any)
        if (aDate.getTime() < bDate.getTime()) return -1 * order
        if (aDate.getTime() > bDate.getTime()) return 1 * order
        return 0
      })
    } else {
      sortedData.sort((a: T, b: T) => {
        // handle uppercase and lowercase
        const aVal = ('' + a[sortBy.key as keyof T]!) as any
        const bVal = ('' + b[sortBy.key as keyof T]!) as any
        if (aVal.toUpperCase() < bVal.toUpperCase()) return -1 * order
        if (aVal.toUpperCase() > bVal.toUpperCase()) return 1 * order
        return 0
      })
    }
    return sortedData
  }, [sortBy, data])
    //   get items per page
  const [itemFrom, itemTo] = React.useMemo(() => {
    const from = (page - 1) * itemsPerPage
    const to = page * itemsPerPage
    return [from, to]
  },[page])
  return (
    <div className="relative  whitespace-nowrap shadow sm:rounded-lg mb-5">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="border-b text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHeadersRow.map((header: TableHeaderTypes) => {
                return (
                  <th
                    key={header.title}
                    className={`cursor-pointer px-6 py-5 ${
                      styles['sort-icon']
                    } ${
                      header.key == sortBy.key && sortBy.order === 'desc'
                        ? ''
                        : styles['asc']
                    }`}
                    onClick={() => {
                      setSortBy({
                        key: header.key,
                        type: header.type,
                        order:
                          header.key == sortBy.key
                            ? sortBy.order === 'asc'
                              ? 'desc'
                              : 'asc'
                            : 'desc',
                      })
                    }}
                  >
                    {header.title}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sortedData
              ?.slice(itemFrom, itemTo)
              ?.map((record: T, index) => {
                return (
                  <tr
                    className="border-b bg-white text-gray-900 hover:bg-gray-50"
                    key={index}
                  >
                    {tableBodyRow.map((col: ColType) => {
                      return (
                        <td
                          key={col.key}
                          className={`px-6 py-4 ${
                            col.className ? col.className : ''
                          } ${
                            record?.[col.key as keyof T] ? '' : 'text-gray-300'
                          }
                        `}
                        >
                          {!!col.beforeRender && record?.[col.key as keyof T]
                            ? col.beforeRender(record?.[col.key as keyof T]!)
                            : record[col.key as keyof T] || col.default}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        page={page}
        totalPages={totalPages || data.length / itemsPerPage}
        onPageChange={setPage}
        PaginatorButtonCount={5}
      />
    </div>
  )
}
export default React.memo(Table)
