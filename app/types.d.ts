import type { Response as ResponseHealthCheck } from '~/server/api/healthz.get'

interface StatusCheckSuccess {
  error: null
  result: ResponseHealthCheck
}
interface StatusCheckFail {
  error: Error | true
  result: null
}
export type StatusCheckResult = StatusCheckSuccess | StatusCheckFail

interface Feature {
  icon: string,
  title: string,
  description: string,
}

interface Testimonial {
  avatar: string,
  name: string,
  text: string,
  position?: string,
  link?: string,
}
