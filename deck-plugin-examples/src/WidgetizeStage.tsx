import React from 'react';

import {
  ExecutionDetailsTasks,
  FormikFormField,
  FormikStageConfig,
  FormValidator,
  HelpField,
  IFormikStageConfigInjectedProps,
  IStage,
  IStageConfigProps,
  IStageTypeConfig,
  NumberInput,
  TextInput,
  Validators,
} from '@spinnaker/core';

import './WidgetizeStage.less';

/** An example stage config using the FormikStageConfig component */
export function WidgetizeStageConfig(props: IStageConfigProps) {
  return (
    <div className="WidgetizeStageConfig">
      <FormikStageConfig
        {...props}
        validate={validate}
        onChange={props.updateStage}
        render={props => <WidgetizeStageForm {...props} />}
      />
    </div>
  );
}

function WidgetizeStageForm(props: IFormikStageConfigInjectedProps) {
  return (
    <>
      <FormikFormField
        name="instanceCount"
        label="Instance Count"
        help={<HelpField content="The number of instances to widgetize" />}
        input={props => <NumberInput {...props} />}
      />

      <FormikFormField
        name="user.email"
        label="User Email"
        help={<HelpField content="The email address of the user performing the widgetize operation" />}
        input={props => <TextInput {...props} />}
      />
    </>
  );
}

// Soon-to-be-deprecated API to supply the stage label
export namespace WidgetizeStageConfig {
  export const title = 'Widgetize';
}

/** Example validation */
export function validate(stageConfig: IStage) {
  const validator = new FormValidator(stageConfig);

  validator
    .field('instanceCount')
    .required()
    .withValidators((value, label) => (value < 10 ? `${label} must be > 10` : undefined));

  validator
    .field('user.email', 'Email')
    .required()
    .withValidators(Validators.emailValue('Invalid email'));

  return validator.validateForm();
}

export const widgetizeStage: IStageTypeConfig = {
  key: 'widgetize',
  label: 'Widgetize Stage',
  description: 'A example stage implementated as a plugin',
  component: WidgetizeStageConfig,
  executionDetailsSections: [ExecutionDetailsTasks],
  validateFn: validate,
};
