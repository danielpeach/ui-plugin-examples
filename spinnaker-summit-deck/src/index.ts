import { IDeckPlugin, overrideRegistrationQueue } from '@spinnaker/core';
import { widgetizeStage } from './WidgetizeStage';
import { CatApplicationIcon } from './CatApplicationIcon';

export const plugin: IDeckPlugin = {
  stages: [widgetizeStage],
  initialize: () => {
    overrideRegistrationQueue.register(CatApplicationIcon, 'applicationIcon');
  },
};
