import * as path from 'path';
import { Duration, aws_logs as logs } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export interface LambdaProps {
  readonly channelId: string;
  readonly scteDurationInSeconds: number;
}

export class Lambda extends Construct {
  public readonly func: NodejsFunction;

  constructor(scope: Construct, id: string, props: LambdaProps) {
    super(scope, id);

    const { channelId, scteDurationInSeconds } = props;

    this.func = new NodejsFunction(scope, 'ScheduleSCTE', {
      runtime: Runtime.NODEJS_18_X,
      entry: path.resolve(__dirname, 'code', 'index.ts'),
      depsLockFilePath: path.resolve(__dirname, '..', 'package-lock.json'),
      handler: 'handler',
      timeout: Duration.seconds(30),
      environment: {
        NODE_ENV: process.env.NODE_ENV as string,
        REGION: process.env.CDK_DEFAULT_REGION as string,
        CHANNEL_ID: channelId,
        AVAIL_LENGTH: `${scteDurationInSeconds}`,
      },
      logRetention: logs.RetentionDays.TWO_WEEKS,
    });
  }
}