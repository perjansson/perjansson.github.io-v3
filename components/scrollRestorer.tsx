import { useRouter } from 'next/router'
import { useScrollRestoration } from '../hooks/useScrollRestoration'

export const ScrollRestorer: React.FC = () => {
  const router = useRouter()
  useScrollRestoration(router)
  return null
}
