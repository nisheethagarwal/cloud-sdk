/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
/* eslint-disable max-classes-per-file */

import { EdmTypeShared } from '../edm-types';
import { EntityBase, ODataVersionOf, Constructable } from '../entity';
import {
  ComplexTypeField,
  getEdmType,
  getEntityConstructor
} from './complex-type-field';
import { ConstructorOrField } from './constructor-or-field';
import { EdmTypeField, SelectableEdmTypeField } from './edm-type-field';

/**
 * Represents a property with a enum value.
 *
 * @typeparam EntityT - Type of the entity the field belongs to
 */
class EnumFieldBase<EntityT extends EntityBase> extends EdmTypeField<
  EntityT,
  string
> {}

/**
 * Represents a selectable property with a enum value.
 *
 * @typeparam EntityT - Type of the entity the field belongs to
 */
export class EnumField<EntityT extends EntityBase>
  extends EnumFieldBase<EntityT>
  implements SelectableEdmTypeField {
  readonly selectable: true;

  edmEnumType: string;
  tsType: any;

  constructor(fieldName: string, fieldOf: Constructable<EntityT>) {
    super(fieldName, fieldOf, 'Edm.Enum');
  }
}

/**
 * Represents a complex type property with a enum value.
 *
 * @typeparam EntityT - Type of the entity the field belongs to
 */
export class ComplexTypeEnumPropertyField<
  EntityT extends EntityBase,
  ComplexT = any
> extends EnumFieldBase<EntityT> {
  /**
   * The constructor of the entity or the complex type this field belongs to
   */
  readonly fieldOf: ConstructorOrField<EntityT, ComplexT>;

  /**
   * Creates an instance of ComplexTypeBigNumberPropertyField.
   *
   * @param fieldName - Actual name of the field used in the OData request
   * @param fieldOf - The constructor of the entity or the complex type this field belongs to
   * @param edmType - Type of the field according to the metadata description
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT, ComplexT>,
    edmType: EdmTypeShared<ODataVersionOf<EntityT>>
  ) {
    super(fieldName, getEntityConstructor(fieldOf), getEdmType(edmType));
    this.fieldOf = fieldOf;
  }

  /**
   * Path to the field to be used in filter and order by queries. Combines the parent complex type name with the field name.
   *
   * @returns Path to the field to be used in filter and order by queries.
   */
  fieldPath(): string {
    return this.fieldOf instanceof ComplexTypeField
      ? `${this.fieldOf.fieldPath()}/${this._fieldName}`
      : this._fieldName;
  }
}
