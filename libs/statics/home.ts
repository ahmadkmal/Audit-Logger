export const tableHeaders = [
    { title: 'Log Id', type: 'number', key: 'logId' },
    { title: 'Application Type', type: 'string', key: 'applicationType' },
    { title: 'Application Id', type: 'string' , key: 'applicationId'},
    { title: 'Action', type: 'string', key: 'actionType' },
    { title: 'Action Details', type: 'string' , key: 'actionDetails'},
    { title: 'Date : Time', type: 'date', key: 'creationTimestamp' },
  ]
  
 export  const tableBody = [
    {
      key: 'logId',
      default: '-/-',
      className: 'whitespace-nowrap',
      beforeRender: undefined,
    },
    {
      key: 'applicationType',
      default: '',
      beforeRender: undefined,
    },
    {
      key: 'applicationId',
      default: '-/-',
      beforeRender: undefined,
    },
    {
      key: 'actionType',
      default: '-/-',
      beforeRender: undefined,
    },
    {
      key: 'noKey',
      default: '-/-',
      beforeRender: undefined,
    },
    {
      key: 'creationTimestamp',
      default: '-/-',
      beforeRender: (val: string) => {
        return val.split(' ').join(' / ')
      },
    },
  ]