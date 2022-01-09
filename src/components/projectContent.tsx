import * as TabsPrimitive from '@radix-ui/react-tabs'
import RichText from '@madebyconnor/rich-text-to-jsx'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'

import { styled } from '../../stitches.config'
import { ProjectType } from '../../types'
import { Spacer } from './spacer'
import { useProjectPageData } from '../providers/ProjectPageDataProvider'

const Tabs = styled(TabsPrimitive.Tabs, {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  minHeight: '240px',

  '@bp1': {
    width: '100%',
  },
})

const TabsList = styled(TabsPrimitive.TabsList, {
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '-webkit-overflow-scrolling': 'touch',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@bp1': {
    height: '44px',
  },

  '@bp3': {
    height: '52px',
  },
})

const TabsTrigger = styled(TabsPrimitive.TabsTrigger, {
  all: 'unset',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontFamily: 'inherit',
  display: 'inline',
  fontWeight: 'bold',
  userSelect: 'none',
  scrollSnapAlign: 'center',
  transition: 'box-shadow 300ms',

  '&:hover': {
    color: '$colorful3',
  },

  '&[data-state="active"]': {
    color: '$colorful3',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },

  '&:not(:last-child)': {
    marginRight: '$$marginRight',
  },

  '@bp1': {
    height: '40px',
    fontSize: '$fontSize3',
    $$marginRight: '$space$space4',
  },

  '@bp2': {
    height: '48px',
    fontSize: '$fontSize5',
    $$marginRight: '$space$space8',
  },

  '@bp3': {
    fontSize: '$fontSize6',
    $$marginRight: '$space$space10',
  },

  '@bp4': {
    fontSize: '$fontSize7',
    $$marginRight: '$space$space12',
  },

  '@bp5': {
    fontSize: '$fontSize7',
    $$marginRight: '$space$space14',
  },
})

const TabsContent = styled(TabsPrimitive.TabsContent, {
  lineHeight: '140%',

  '@bp1': {
    fontSize: '$fontSize3',
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

  '@bp5': {
    fontSize: '$fontSize6',
  },
})

const Tags = styled('div', {
  fontFamily: 'Share Tech Mono, Lucida Console, Courier New, monospace',
})

export const ProjectDetails: React.FC = () => {
  const { data } = useProjectPageData()
  const { description, me, title, tags } = data?.project || {}

  const handleOnTabClick = (event: any) =>
    scrollIntoView(event.target, {
      behavior: 'smooth',
      scrollMode: 'always',
      duration: 100,
    })

  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label={`Details about project ${title}`}>
        <TabsTrigger value="tab1" onClick={handleOnTabClick}>
          Project story
        </TabsTrigger>
        <TabsTrigger value="tab2" onClick={handleOnTabClick}>
          What I did
        </TabsTrigger>
        <TabsTrigger value="tab3" onClick={handleOnTabClick}>
          Team
        </TabsTrigger>
        <TabsTrigger value="tab4" onClick={handleOnTabClick}>
          Tech
        </TabsTrigger>
      </TabsList>
      <Spacer size="small" />
      <TabsContent value="tab1">
        <RichText richText={description?.json} />
      </TabsContent>
      <TabsContent value="tab2">
        <RichText richText={me?.json} />
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
