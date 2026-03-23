import { io } from 'socket.io-client';

/**
 * The WebSocket server URL where events are emitted.
 * Defaults to localhost:3001 for development.
 */
const WS_URL = process.env.WS_URL || 'http://localhost:3001';

/**
 * Triggers a real-time event through the external WebSocket server.
 * This is used by server-side API routes to notify connected frontend clients
 * that a new contribution has been created or updated.
 * 
 * @param data The payload to emit (typically contains 'type' and 'contribution' data)
 */
export function triggerContributionUpdate(data: any) {
  try {
    const socket = io(WS_URL);
    socket.emit('contribution-update', data);
    
    // Disconnect after a short delay to ensure event is sent
    // This brief connection prevents resource leaks on the server
    setTimeout(() => {
      socket.disconnect();
    }, 1000);
  } catch (error) {
    console.error('Failed to trigger WebSocket update:', error);
  }
}

