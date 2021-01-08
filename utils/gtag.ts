export const pageview = (url: URL) => {
  process.env.GA_TRACKING_ID &&
    window.gtag('config', process.env.GA_TRACKING_ID, {
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
  window.gtag &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
}
