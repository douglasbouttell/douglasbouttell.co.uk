import simpleicons from 'simple-icons'
import convert from 'htmr'

export const SimpleIcon = ({icon}) => {
  const selected = simpleicons[icon];
  if (!selected) {
    return null;
  } else {
    return convert(selected.svg)
  }
};