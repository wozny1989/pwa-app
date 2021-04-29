import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function safe(params) {
  const param = params[0];
  return htmlSafe(param);
}
export default Helper.helper(safe);
