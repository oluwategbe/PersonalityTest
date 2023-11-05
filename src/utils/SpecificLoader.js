import { getStoredUser } from "../storage";

function SpecificLoader(props) {
  const user = getStoredUser();
 
  return props[user?.role] || (() => null);
}

export default SpecificLoader;
