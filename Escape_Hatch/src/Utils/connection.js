export default function createConnection(serverUrl, roomId) {
    return {
        connect: () => {
            console.log(`Connected ${serverUrl} to the room ${roomId}`);

        },
        disconnect: () => {
            console.log(`Disconnect ${serverUrl} from room ${roomId}`);

        },
    };
};