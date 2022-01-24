import * as TabsPrimitive from '@radix-ui/react-tabs'
import RichText from '@madebyconnor/rich-text-to-jsx'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'
import { isMobile } from 'react-device-detect'

import { focusStyles, styled } from '../../stitches.config'
import { Spacer } from './spacer'
import { useProjectPageData } from '../providers/ProjectPageDataProvider'

const Tabs = styled(TabsPrimitive.Tabs, {
  gridArea: 'project-content',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$space6',
})

const TabsList = styled(TabsPrimitive.TabsList, {
  scrollbarWidth: 'none',
  '-webkit-overflow-scrolling': 'touch',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '@bp1': {
    height: '44px',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
  },

  '@bp3': {
    height: '52px',
  },
})

const TabsTrigger = styled(TabsPrimitive.TabsTrigger, {
  all: 'unset',
  textTransform: 'uppercase',
  fontFamily: 'inherit',
  display: 'inline',
  fontWeight: 'bold',
  userSelect: 'none',
  scrollSnapAlign: 'center',

  '&:hover': {
    color: '$colorful3',
  },

  '&[data-state="active"]': {
    color: '$colorful3',
  },

  ...focusStyles,

  '&:not(:last-child)': {
    marginRight: '$$marginRight',
  },

  '@bp1': {
    height: '40px',
    padding: 0,
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

const Collaborators = styled('div', {
  '> *': {
    position: 'relative',
    marginRight: '$space4',
  },

  '> a': {
    '&:after': {
      content: '',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '$colorful4',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
    },

    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
  },
})

export const ProjectDetails: React.FC = () => {
  const { data } = useProjectPageData()
  const { description, me, title, tags, collaborators } = data?.project || {}

  const handleOnTabClick = (event: any) =>
    isMobile &&
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
        <Collaborators>
          {collaborators?.items.map(({ name, linkedin }, index) => {
            if (linkedin) {
              return (
                <a
                  key={index}
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {name}
                </a>
              )
            } else {
              return <span key={index}>{name}</span>
            }
          })}
          {collaborators?.items.length === 0 && (
            <span>No team members added yet.</span>
          )}
        </Collaborators>
      </TabsContent>
      <TabsContent value="tab4">
        <Tags>{tags?.join(', ')}</Tags>
      </TabsContent>
    </Tabs>
  )
}
