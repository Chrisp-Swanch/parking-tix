export interface DisputeObj {
    id: number
    created_at: number
    user_id: number
    infringement: number
    registration: string
    date_issued: string
    time_issued: string
    location: string
    amount: number
    status: string
  }

  export interface New {
    user_id: number
    infringement: number
    registration: string
    date_issued: string
    time_issued: string
    location: string
    amount: number
    status: string
  }

  export interface Update {
    user_id?: number
    infringement?: number
    registration?: string
    date_issued?: string
    time_issued?: string
    location?: string
    amount?: number
    status?: string
  }