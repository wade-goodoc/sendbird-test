import SendbirdChat from '@sendbird/chat';
import { OpenChannelModule, SendbirdOpenChat } from '@sendbird/chat/openChannel';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';

export const sb = SendbirdChat.init({
  appId: process.env.NEXT_PUBLIC_SENDBIRD_APP_ID as string,
  modules: [new GroupChannelModule(), new OpenChannelModule()]
}) as SendbirdOpenChat;
