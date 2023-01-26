export function toDate(date: Date | string | number): Date {
    if (typeof date === 'string' || typeof date === 'number') {
        return new Date(date);
    }
    return date;
}