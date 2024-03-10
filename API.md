# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventBridgeSchedule <a name="EventBridgeSchedule" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-lambda-function-for-inserting-scte'

new EventBridgeSchedule(scope: Construct, id: string, props: EventBridgeScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps">EventBridgeScheduleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps">EventBridgeScheduleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.isConstruct"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-lambda-function-for-inserting-scte'

EventBridgeSchedule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### Lambda <a name="Lambda" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'awscdk-construct-lambda-function-for-inserting-scte'

new Lambda(scope: Construct, id: string, props: LambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.LambdaProps">LambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-lambda-function-for-inserting-scte.LambdaProps">LambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.isConstruct"></a>

```typescript
import { Lambda } from 'awscdk-construct-lambda-function-for-inserting-scte'

Lambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-lambda-function-for-inserting-scte.Lambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


### ScteScheduler <a name="ScteScheduler" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer"></a>

```typescript
import { ScteScheduler } from 'awscdk-construct-lambda-function-for-inserting-scte'

new ScteScheduler(scope: Construct, id: string, props: ScteSchedulerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps">ScteSchedulerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps">ScteSchedulerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.isConstruct"></a>

```typescript
import { ScteScheduler } from 'awscdk-construct-lambda-function-for-inserting-scte'

ScteScheduler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.property.lambda">lambda</a></code> | <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda">Lambda</a></code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.property.schedule">schedule</a></code> | <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule">EventBridgeSchedule</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.property.lambda"></a>

```typescript
public readonly lambda: Lambda;
```

- *Type:* <a href="#awscdk-construct-lambda-function-for-inserting-scte.Lambda">Lambda</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="awscdk-construct-lambda-function-for-inserting-scte.ScteScheduler.property.schedule"></a>

```typescript
public readonly schedule: EventBridgeSchedule;
```

- *Type:* <a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeSchedule">EventBridgeSchedule</a>

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeScheduleProps <a name="EventBridgeScheduleProps" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps.Initializer"></a>

```typescript
import { EventBridgeScheduleProps } from 'awscdk-construct-lambda-function-for-inserting-scte'

const eventBridgeScheduleProps: EventBridgeScheduleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="awscdk-construct-lambda-function-for-inserting-scte.EventBridgeScheduleProps.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

### LambdaProps <a name="LambdaProps" id="awscdk-construct-lambda-function-for-inserting-scte.LambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-lambda-function-for-inserting-scte.LambdaProps.Initializer"></a>

```typescript
import { LambdaProps } from 'awscdk-construct-lambda-function-for-inserting-scte'

const lambdaProps: LambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.LambdaProps.property.availLength">availLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.LambdaProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |

---

##### `availLength`<sup>Required</sup> <a name="availLength" id="awscdk-construct-lambda-function-for-inserting-scte.LambdaProps.property.availLength"></a>

```typescript
public readonly availLength: number;
```

- *Type:* number

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-lambda-function-for-inserting-scte.LambdaProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

### ScteSchedulerProps <a name="ScteSchedulerProps" id="awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.Initializer"></a>

```typescript
import { ScteSchedulerProps } from 'awscdk-construct-lambda-function-for-inserting-scte'

const scteSchedulerProps: ScteSchedulerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.property.availLength">availLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |

---

##### `availLength`<sup>Required</sup> <a name="availLength" id="awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.property.availLength"></a>

```typescript
public readonly availLength: number;
```

- *Type:* number

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="awscdk-construct-lambda-function-for-inserting-scte.ScteSchedulerProps.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---



