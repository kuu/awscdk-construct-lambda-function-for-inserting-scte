import {
  MediaLiveClient,
  BatchUpdateScheduleCommand,
  BatchScheduleActionCreateRequest,
  DeleteScheduleCommand,
} from '@aws-sdk/client-medialive';

const client = new MediaLiveClient({ region: 'ap-northeast-1' });

const CHANNEL_ID = process.env.CNAHHEL_ID as string;
const OFFSET = 30;
const AVAIL_LENGTH = process.env.AVAIL_LENGTH as unknown as number;

// Lambda function to insert SCTE-35 splice_insert() message using the MediaLive schedule API
export async function handler() {
  await deleteSchedules();
  const startTime = new Date(Date.now() + (OFFSET * 1000));
  await scheduleEvent(Math.floor(startTime.getTime() / 1000), startTime);
}

function deleteSchedules() {
  const command = new DeleteScheduleCommand({ ChannelId: CHANNEL_ID });
  return client.send(command);
}

async function scheduleEvent(eventId: number, start: Date) {
  const scte = createScteCommand(eventId, start, AVAIL_LENGTH);
  const command = new BatchUpdateScheduleCommand({ ChannelId: CHANNEL_ID, Creates: scte });
  const response = await client.send(command);
  console.log(JSON.stringify(response, null, 2));
}

function createScteCommand(eventId: number, start: Date, durationInSeconds: number): BatchScheduleActionCreateRequest {
  return {
    ScheduleActions: [
      {
        ActionName: `SCTE35_splice-insert_${eventId}`,
        ScheduleActionSettings: {
          Scte35SpliceInsertSettings: {
            SpliceEventId: eventId,
            Duration: durationInSeconds * 90_000, // 90kHz
          },
        },
        ScheduleActionStartSettings: {
          FixedModeScheduleActionStartSettings: {
            Time: start.toISOString(),
          },
        },
      },
    ],
  };
}


