import { Construct } from 'constructs';
import { EventBridgeSchedule } from './EventBridgeSchedule';
import { Lambda } from './Lambda';

export interface ScteSchedulerProps {
  readonly channelId: string;
  readonly availLength: number;
  readonly intervalInMinutes: number;
}

export class ScteScheduler extends Construct {
  public readonly lambda: Lambda;
  public readonly schedule: EventBridgeSchedule;

  constructor(scope: Construct, id: string, props: ScteSchedulerProps) {
    super(scope, id);

    const { channelId, availLength, intervalInMinutes } = props;

    // Create Lambda function to insert SCTE message using the MediaLive schedule API
    this.lambda = new Lambda(this, 'LambdaFunction', {
      channelId,
      availLength,
    });

    // Create EventBridge rule to invoke the Lambda function every N minutes
    this.schedule = new EventBridgeSchedule(this, 'EventBridgeSchedule', {
      func: this.lambda.func,
      intervalInMinutes,
    });
  }
}