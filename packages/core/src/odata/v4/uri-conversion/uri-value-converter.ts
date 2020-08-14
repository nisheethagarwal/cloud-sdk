/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
/* eslint-disable valid-jsdoc */

import { identity } from 'rambda';
import { tsToEdm } from '../payload-value-converter';
import { EdmTypeShared, UriConverter } from '../../common';
import { uriConvertersCommon } from '../../common/uri-conversion/uri-value-converter';
import { EdmType } from '../edm-types';

type UriConverterMapping = { [key in EdmType]: (value: any) => string };
/**
 * @hidden
 */
export const uriConverters: UriConverterMapping = {
  ...uriConvertersCommon,
  'Edm.Date': identity,
  'Edm.DateTimeOffset': identity,
  'Edm.TimeOfDay': identity,
  'Edm.Decimal': value => String(value),
  'Edm.Duration': value => `duration'${value}'`,
  'Edm.Guid': identity
};
/**
 * @hidden
 */
export const uriConverter: UriConverter = {
  convertToUriFormat(value: any, edmType: EdmTypeShared<'v4'>): string {
    const converted = tsToEdm(value, edmType);
    const uriConverterFunc = uriConverters[edmType];
    if (uriConverterFunc) {
      return uriConverterFunc(converted);
    }
    return converted;
  }
};
