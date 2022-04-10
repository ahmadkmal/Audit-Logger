export type AuditRecord = {
    actionType: string
    applicationId: string
    applicationType: string
    companyId: string
    creationTimestamp: string
    ip: string
    logId: number
    logInfo: string
    ownerId: string
    source: string
    userAgent: string
    userId: number
  };
export type HomeProps = {
    audit: {
      result?: {
        auditLog?: Array<AuditRecord>
        totalPages: number
      }
    }
    actionType: string[]
    applicationType: string[]
  };