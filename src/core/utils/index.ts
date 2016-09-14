
import * as _ from "lodash";
import * as deepEq from "deep-equal";

export { shallowEqual } from "./shallowEqual";
export let deepEqual = deepEq;
export let deepCopy = _.cloneDeep;
export let shallowCopy = _.clone;
export let deepExtend = _.merge;