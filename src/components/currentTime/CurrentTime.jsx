import { formatTime } from "../../utils/helpers";

export const CurrentTime = ({ dateObj }) => {
  return <div>{formatTime(dateObj)}</div>;
};
