import * as TabsPrimitive from '@radix-ui/react-tabs'
import RichText from '@madebyconnor/rich-text-to-jsx'

import { styled } from '../stitches.config'
import { ProjectType } from '../types'

const Tabs = styled(TabsPrimitive.Tabs, {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
})

const TabsTrigger = styled(TabsPrimitive.TabsTrigger, {
  all: 'unset',
  marginRight: '$space8',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontFamily: 'inherit',
  height: 45,
  display: 'inline',
  fontWeight: 'bold',
  userSelect: 'none',

  '&:hover': {
    color: '$colorful3',
  },

  '&[data-state="active"]': {
    color: '$colorful3',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },

  '@bp1': {
    fontSize: '$fontSize3',
  },

  '@bp2': {
    fontSize: '$fontSize4',
  },

  '@bp3': {
    fontSize: '$fontSize5',
  },

  '@bp4': {
    fontSize: '$fontSize6',
  },
})

const TabsContent = styled(TabsPrimitive.TabsContent, {
  marginTop: '$space4',
  lineHeight: '125%',

  '@bp1': {
    marginTop: '$space2',
    fontSize: '$fontSize2',
  },

  '@bp2': {
    fontSize: '$fontSize3',
  },

  '@bp3': {
    fontSize: '$fontSize4',
  },

  '@bp4': {
    fontSize: '$fontSize5',
  },
})

const Tags = styled('div', {
  fontFamily: 'Share Tech Mono, Lucida Console, Courier New, monospace',
})

interface Props {
  project: ProjectType
}

export const ProjectDetails: React.FC<Props> = ({ project }) => {
  const { description, me, title, tags } = project

  return (
    <Tabs defaultValue="tab1">
      <TabsPrimitive.TabsList aria-label={`Details about project ${title}`}>
        <TabsTrigger value="tab1">Project story</TabsTrigger>
        <TabsTrigger value="tab2">Main character</TabsTrigger>
        <TabsTrigger value="tab3">Team</TabsTrigger>
        <TabsTrigger value="tab4">Tech</TabsTrigger>
      </TabsPrimitive.TabsList>
      <TabsContent value="tab1">
        <RichText richText={description.json} />
      </TabsContent>
      <TabsContent value="tab2">
        <RichText richText={me.json} />
      </TabsContent>
      <TabsContent value="tab3">
        <div>Team information will come...</div>
      </TabsContent>
      <TabsContent value="tab4">
        <Tags>{tags?.join(', ')}</Tags>
      </TabsContent>
    </Tabs>
  )
}
