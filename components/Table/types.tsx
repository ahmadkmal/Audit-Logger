export type ColType = {
    key: string,
    default: string,
    beforeRender?: (val: any) => any,
    className?: string,
  }
 export  type TableProps<T> = {
    data: T[],
    totalPages: number,
    tableHeadersRow: TableHeaderTypes[],
    tableBodyRow: ColType[],
    itemsPerPage: number,
  }
 export type TableHeaderTypes = {
    title: string,
    type: string,
    key: string,
  
  }