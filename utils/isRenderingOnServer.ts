export const isRenderingOnServer = () => typeof window === 'undefined'

export const isRenderingOnClient = () => typeof window !== 'undefined'
