import { Link } from "react-router-dom"

const LANGUAGES = [
  {
    value: 1,
    label: 'Español'
  },
  {
    value: 2,
    label: 'English (US)'
  },
  {
    value: 3,
    label: 'Français (France)'
  },
  {
    value: 4,
    label: 'Português (Brasil)'
  },
  {
    value: 5,
    label: 'Italiano'
  },
  {
    value: 6,
    label: 'Deutsch'
  },
  {
    value: 7,
    label: 'العربية'
  },
  {
    value: 8,
    label: 'हिन्दी'
  },
  {
    value: 9,
    label: '中文(简体)'
  },
  {
    value: 10,
    label: '日本語'
  }
]

export const Footer = () => {
  return (
    <footer>
      { LANGUAGES.map(item => <Link to="/">{ item.label }</Link>) }
    </footer>
  )
}