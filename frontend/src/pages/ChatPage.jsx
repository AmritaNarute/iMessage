import { useWallpaper } from "../context/wallpaper";
import { useEffect } from "react";

function ChatPage() {
  const { frameStyle } = useWallpaper();


  useEffect(() => {
    if (!activeConversationId) return;

    getMessages(activeConversationId);
    subscribeToMessages(activeConversationId);

    // cleanup
    return () => unsubscribeFromMessages();
  }, [getMessages, activeConversationId, subscribeToMessages, unsubscribeFromMessages]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden p-2 sm:p-3 md:p-8" style={frameStyle}>
      <div className="mx-auto flex w-full max-w-6xl flex-1 overflow-hidden rounded-2xl border border-border bg-background text-foreground">
               
        <div
          className={`flex-1 flex-col overflow-hidden ${
            !isLargeScreen && !activeConversationId ? "hidden lg:flex" : "flex"
          }`}
        >
        </div>
      </div>
    </div>
  );
}
export default ChatPage;