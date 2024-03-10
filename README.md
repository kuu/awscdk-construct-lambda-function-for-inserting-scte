# awscdk-construct-lambda-function-for-inserting-scte
[![View on Construct Hub](https://constructs.dev/badge?package=awscdk-construct-lambda-function-for-inserting-scte)](https://constructs.dev/packages/awscdk-construct-lambda-function-for-inserting-scte)

AWS CDK Construct for scheduling SCTE-35 events using the MediaLive schedule API
* Input:
  * MediaLive channel id
  * SCTE event duration (seconds)
  * Repeat interval (minutes)
* Output:
  * Lambda function for calling MediaLive schedule API
  * EventBridge schedule for periodically involing the function

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-lambda-function-for-inserting-scte.png?mini=true)](https://nodei.co/npm/awscdk-construct-lambda-function-for-inserting-scte/)

## Usage
```ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ScteScheduler } from 'awscdk-construct-lambda-function-for-inserting-scte';

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create periodic SCTE-35 events
    const {schedule, lambda} = new ScteScheduler(this, 'ScteScheduler', {
      channelId: '12345', // MediaLive channel id
      availLength: 60, // Duration of SCTE:splice_insert (seconds)
      intervalInMinutes: 2, // Interval of the insertion (minutes)
    });

    // Enable EventBridge rule
    new AwsCustomResource(this, 'EnableEventBridgeRule', {
      onCreate: {
        service: 'EventBridge',
        action: 'EnableRule',
        region: cdk.Aws.REGION,
        parameters: {
          EventBusName: 'default',
          Name: schedule.rule.ruleName,
        },
        physicalResourceId: PhysicalResourceId.of(`EnableRule-${Date.now().toString()}`),
      },
      //Will ignore any resource and use the assumedRoleArn as resource and 'sts:AssumeRole' for service:action
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });

    // You can access Lambda function attributes via `lambda.func`
    new cdk.CfnOutput(this, "LambdaFunction", {
      value: lambda.func.functionArn,
      exportName: cdk.Aws.STACK_NAME + "LambdaFunction",
      description: "Lambda function ARN",
    });

    // You can access EventBridge rule attributes via `schedule.rule`
    new cdk.CfnOutput(this, "EventBridgeRule", {
      value: schedule.rule.ruleArn,
      exportName: cdk.Aws.STACK_NAME + "EventBridgeRule",
      description: "EventBridge rule ARN",
    });
  }
}
```
