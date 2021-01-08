export const GA_TRACKING_ID = 'G-VTE1ELRYSN'

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

type GTagCategory = 'user_interaction'
type GTagAction =
  | 'contact_click'
  | 'project_selected'
  | 'tag_cloud_min_date_change'

type GTagEvent = {
  action: GTagAction
  category: GTagCategory
  label: string
  value: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
