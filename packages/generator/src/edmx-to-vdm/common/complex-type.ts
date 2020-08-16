/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { createLogger, MapType } from '@sap-cloud-sdk/util';
import {
  edmToComplexPropertyType,
  edmToTsType,
  getFallbackEdmTypeIfNeeded,
  isNullableProperty
} from '../../generator-utils';
import { ServiceNameFormatter } from '../../service-name-formatter';
import { VdmComplexType, VdmMappedEdmType, VdmEnumType } from '../../vdm-types';
import { applyPrefixOnJsConfictParam } from '../../name-formatting-strategies';
import { propertyDescription } from '../description-util';
import { EdmxComplexTypeBase } from '../../edmx-parser/common';
import {
  checkCollectionKind,
  complexTypeFieldType,
  complexTypeName,
  isCollectionType,
  isComplexTypeOrEnumType,
  isEdmType,
  typesForCollection
} from '../edmx-to-vdm-util';
import { isEnumType } from './entity';

const logger = createLogger({
  package: 'generator',
  messageContext: 'complex-type'
});

// TODO: this should be removed once the deprecated complex type factory is removed
export function includeFactoryName(
  complexTypes: Omit<VdmComplexType, 'factoryName'>[],
  formatter: ServiceNameFormatter
): VdmComplexType[] {
  return complexTypes.map(c => ({
    ...c,
    factoryName: formatter.typeNameToFactoryName(c.typeName)
  }));
}

export function transformComplexTypesBase(
  complexTypes: EdmxComplexTypeBase[],
  enumTypes: VdmEnumType[],
  formatter: ServiceNameFormatter
): Omit<VdmComplexType, 'factoryName'>[] {
  const formattedTypes = complexTypes.reduce(
    (formatted, c) => ({
      ...formatted,
      [c.Name]: formatter.originalToComplexTypeName(c.Name)
    }),
    {}
  );
  return complexTypes.map(c => {
    const typeName = formattedTypes[c.Name];
    return {
      typeName,
      originalName: c.Name,
      fieldType: complexTypeFieldType(typeName),
      properties: c.Property.map(p => {
        checkCollectionKind(p);
        const instancePropertyName = formatter.originalToInstancePropertyName(
          c.Name,
          p.Name
        );
        const isComplexOrEnum = isComplexTypeOrEnumType(p.Type);
        const isEnum = isComplexOrEnum ? isEnumType(p.Type, enumTypes) : false;
        const isComplex = isComplexOrEnum ? !isEnum : false;
        const isCollection = isCollectionType(p.Type);
        const typeMapping = getTypeMappingComplexProperties(
          p.Type,
          enumTypes,
          formattedTypes
        );
        return {
          originalName: p.Name,
          instancePropertyName,
          staticPropertyName: formatter.originalToStaticPropertyName(
            c.Name,
            p.Name
          ),
          propertyNameAsParam: applyPrefixOnJsConfictParam(
            instancePropertyName
          ),
          description: propertyDescription(p),
          technicalName: p.Name,
          nullable: isNullableProperty(p),
          edmType: typeMapping.edmType,
          jsType: typeMapping.jsType,
          fieldType: typeMapping.fieldType,
          isComplex,
          isEnum,
          isCollection
        };
      })
    };
  });
}

export function getTypeMappingComplexProperties(
  typeName: string,
  enumTypes: VdmEnumType[],
  formattedTypes: MapType<any>
): VdmMappedEdmType {
  if (isEdmType(typeName)) {
    const edmFallback = getFallbackEdmTypeIfNeeded(typeName);
    return {
      edmType: edmFallback,
      jsType: edmToTsType(edmFallback),
      fieldType: edmToComplexPropertyType(edmFallback)
    };
  }

  if (isCollectionType(typeName)) {
    return typesForCollection(typeName, enumTypes, undefined, formattedTypes);
  }

  if (isComplexTypeOrEnumType(typeName)) {
    const withoutPrefix = complexTypeName(typeName)!;
    return {
      edmType: typeName,
      jsType: formattedTypes[withoutPrefix],
      fieldType: complexTypeFieldType(formattedTypes[withoutPrefix])
    };
  }
  throw new Error(`No types found for ${typeName}`);
}
