// 版本号变更
export const HEADER_CHANGE = createEventUid();

export const HEADER_SHOWN = createEventUid();
export const HEADER_HIDDEN = createEventUid();

export const HEADER_TABS_SHOWN = createEventUid();
export const HEADER_TABS_HIDDEN = createEventUid();

export function createEventUid() {
    return 'event-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}