import Head from 'next/head'
import type { NextPage, GetStaticProps } from 'next'
import auditServices from '@services/auditServices'
import React, { useState } from 'react'
import Table from '@components/Table'
import type { HomeProps, AuditRecord } from '@typesData/pages/home'
import { tableHeaders, tableBody } from '@libs/statics/home'
import InputFiled from '@components/InputFiled'
import DropDownField from '@components/DropDownField'
import { useRouter } from 'next/router'
import Breadcrumb from '@components/Breadcrumb/Breadcrumb'
import { getFiledOptions } from '@libs/helpers'
type AuditFilterProps = {
  actionType: string[]
  applicationType: string[]
  defaultValues?: {
    [key: string]: string | undefined
  }
  applyFilter: Function
}
const AuditFilter: React.FC<AuditFilterProps> = ({
  actionType,
  applicationType,
  applyFilter,
  defaultValues,
}) => {
  const filterRef = React.useRef<{ [key: string]: string | undefined }>(
    defaultValues || {}
  )
  const onFiledChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    filterRef.current[name] = value
  }
  React.useEffect(() => {
    filterRef.current = defaultValues || {}
  }, [defaultValues])

  return (
    <div className="max-width-100 mb-4 flex flex-wrap items-center justify-start gap-2.5">
      {/* no effected area */}
      <div className="flex-1">
        <InputFiled
          label="Employee Name"
          defaultValue=""
          placeholder="e.g. Admin.User"
          name="employeeName"
        />
      </div>
      {/* filed wrapper  */}
      <div className="flex-1">
        <DropDownField
          onChange={onFiledChange}
          label="Action Type"
          options={actionType}
          name="actionType"
          defaultValue={ defaultValues?.['actionType']}
        />
      </div>
      {/* filed wrapper  */}
      <div className="flex-1">
        <DropDownField
          label="Application Type"
          options={applicationType}
          defaultValue={defaultValues?.['applicationType']}
          name="applicationType"
          onChange={onFiledChange}
        />
      </div>
      <div className="flex-1">
        <InputFiled
          min=""
          max=""
          placeholder="select date"
          type="date"
          label="From Date"
          name="fromDate"
          onChange={onFiledChange}
          defaultValue={defaultValues?.['fromDate']}
        />
      </div>
      <div className="flex-1">
        <InputFiled
          min=""
          max=""
          placeholder="select date"
          onChange={onFiledChange}
          type="date"
          label="To Date"
          name="toDate"
          defaultValue={defaultValues?.['toDate']}
        />
      </div>
      <div className="flex-1">
        <InputFiled
          label="Application ID"
          placeholder="e.g. 23332/2021"
          name="applicationId"
          onChange={onFiledChange}
          defaultValue={defaultValues?.['applicationId']}
        />
      </div>
      <div className="align-end flex h-[3.375rem] flex-1">
        <button
          type="button"
          className="mt-auto h-[2.125rem] w-full min-w-[12.5rem] rounded bg-blue-900  p-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
          onClick={() => applyFilter(filterRef.current)}
        >
          Search Logger
        </button>
      </div>
    </div>
  )
}

const Home: React.FC<HomeProps> = ({ audit, actionType, applicationType }) => {
  const router = useRouter()

  const auditList = audit?.result?.auditLog || ([] as AuditRecord[])
  // const [key, setKey] = useState(0)

  // read from query string router
  const defaultValues = router.query
  //  will run on changing the query string
  const filteredAuditList = React.useMemo(() => {
    if (!Object.keys(defaultValues).length) return auditList

    const { actionType, applicationType, fromDate, toDate, applicationId } =
      defaultValues as { [key: string]: string | undefined }
    // setKey(key + 1)
    return [...auditList].filter((audit) => {
      return (
        (actionType ? audit.actionType === actionType : true) &&
        (applicationType ? audit.applicationType === applicationType : true) &&
        (fromDate
          ? new Date(audit.creationTimestamp).getTime() >=
            new Date(fromDate).getTime()
          : true) &&
        (toDate
          ? new Date(audit.creationTimestamp).getTime() <=
            new Date(toDate).getTime()
          : true) &&
        (applicationId
          ? ('' + audit.applicationId).includes(applicationId)
          : true)
      )
    })
  }, [defaultValues])

  const applyFilter = React.useCallback((searchValue) => {
    // write to query string router
    router.push({
      pathname: '/',
      query: searchValue,
    })
  }, [])
  return (
    <>
      <Head>
        <title>Audit Logger </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto px-4">
        <Breadcrumb />
        <AuditFilter
          actionType={actionType}
          applicationType={applicationType}
          applyFilter={applyFilter}
          defaultValues={defaultValues as { [key: string]: string | undefined }}
        />

        <Table
          // rowKey='logId'
          data={filteredAuditList}
          tableHeadersRow={tableHeaders}
          itemsPerPage={10}
          totalPages={audit?.result?.totalPages || 0}
          tableBodyRow={tableBody}
        />
      </div>
    </>
  )
}

export default Home
export const getStaticProps: GetStaticProps = async (context) => {
  const apiResponse = (await auditServices.getAudit())?.data || {}
  return {
    props: {
      audit: apiResponse,
      actionType: getFiledOptions(
        apiResponse?.result?.auditLog || [],
        'actionType'
      ),
      applicationType: getFiledOptions(
        apiResponse.result.auditLog,
        'applicationType'
      ),
    },
    revalidate: 5,
  }
}
