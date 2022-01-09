import React, { createContext, useContext } from 'react'
import { ProjectPageData } from '../../types'

const ProjectPageDataContext = createContext<
  ProjectPageData | { data: undefined }
>({
  data: undefined,
})

interface Props {
  data: ProjectPageData
}

export const ProjectPageDataContextProvider: React.FC<Props> = ({
  data,
  children,
}) => {
  return (
    <ProjectPageDataContext.Provider value={data}>
      {children}
    </ProjectPageDataContext.Provider>
  )
}

export const useProjectPageData = () => useContext(ProjectPageDataContext)
