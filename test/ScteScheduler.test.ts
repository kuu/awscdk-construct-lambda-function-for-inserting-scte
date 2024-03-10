import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Lambda, EventBridgeSchedule, ScteScheduler } from '../src';

test('Create Lambda', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new Lambda(stack, 'Lambda', {
    channelId: '12345',
    scteDurationInSeconds: 30,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
});

test('Create EventBridgeSchedule', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new EventBridgeSchedule(stack, 'EventBridgeSchedule', {
    func: new Lambda(stack, 'Lambda', {
      channelId: '12345',
      scteDurationInSeconds: 30,
    }).func,
    intervalInMinutes: 1,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Events::Rule', 1);
});

test('Create ScteScheduler', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new ScteScheduler(stack, 'ScteScheduler', {
    channelId: '12345',
    scteDurationInSeconds: 30,
    intervalInMinutes: 1,
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
  template.hasResource('AWS::Events::Rule', 1);
});