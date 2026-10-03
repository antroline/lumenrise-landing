import type { LaunchStatus } from '../types/launch.ts'

export const LAUNCH_STATUS_LABELS: Record<LaunchStatus, string> = {
  upcoming: 'Upcoming',
  live: 'Live',
  graduated: 'Graduated',
}
