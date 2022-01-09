import React, { createContext, useContext } from 'react'
import { IndexPageData } from '../types'

const IndexPageDataContext = createContext<IndexPageData | { data: undefined }>(
  {
    data: undefined,
  }
)

interface Props {
  data: IndexPageData
}

export const IndexPageDataContextProvider: React.FC<Props> = ({
  data,
  children,
}) => {
  return (
    <IndexPageDataContext.Provider value={data}>
      {children}
    </IndexPageDataContext.Provider>
  )
}

export const useIndexPageData = () => useContext(IndexPageDataContext)
