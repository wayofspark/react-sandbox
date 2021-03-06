

import { getActionNameBuilder } from "../actions/actionPrefixer";

const I18N_ACTION_PREFIX = "I18N";
let addPrefix = getActionNameBuilder(I18N_ACTION_PREFIX);

export const SET_LOCALE_REQUEST = addPrefix("SET_LOCALE_REQUEST");

export const SET_LOCALE_APPLY = addPrefix("SET_LOCALE_APPLY");

export const LOAD_BUNDLE_REQUEST = addPrefix("LOAD_BUNDLE_REQUEST");

export const LOAD_BUNDLE_SUCCESS = addPrefix("LOAD_BUNDLE_SUCCESS");