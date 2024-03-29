import Cursor from '/imports/api/1.1/cursor';
import Logger from '/imports/startup/server/logger';

export default function clearCursor(meetingId) {
  if (meetingId) {
    return Cursor.remove({ meetingId }, Logger.info(`Cleared Cursor (${meetingId})`));
  }

  return Cursor.remove({}, Logger.info('Cleared Cursor (all)'));
}
