import { IDeckPlugin, overrideRegistrationQueue } from '@spinnaker/core';
import { widgetizeStage } from './WidgetizeStage';
import { CatApplicationIcon } from './CatApplicationIcon';
import { BannerOverrideExample } from './BannerOverrideExample';

export const plugin: IDeckPlugin = {
  stages: [widgetizeStage],
  initialize: () => {
    overrideRegistrationQueue.register(CatApplicationIcon, 'applicationIcon');
    overrideRegistrationQueue.register(BannerOverrideExample, 'core.insight.banners');
  },
};
