import React, { createContext, useContext } from 'react'
import { IndexPageData } from '../types'

const DataContext = createContext<IndexPageData | { data: undefined }>({
  data: undefined,
})

interface Props {
  data: IndexPageData
}

export const DataContextProvider: React.FC<Props> = ({ data, children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)
