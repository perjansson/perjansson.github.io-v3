import { ProjectType } from '../types'

export const PAGES_SEO_SETTINGS = {
  INDEX: {
    title: '✨ Per Jansson - Fullstack Web Developer ✨',
    description:
      "I'm Per, a curious software developer with a passion to build great applications and websites - and help others do the same.",
  },
  PROJECT: (project: ProjectType) => ({
    title: `✨ Per Jansson - Fullstack Web Developer - ${project.titleShort} ✨`,
    description: `I'm Per, a curious software developer. This is the story of me helping out building ${project.title}`,
  }),
}
