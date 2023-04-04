import dayjs from "dayjs";

export function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }

    return arr;
}

export function updateObjectWithId(arr, id, newValue) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        arr[objWithIdIndex] = newValue
    }

    return arr;
}

export function setCompletionStatus(arr, id, isCompleted) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        arr[objWithIdIndex].isCompleted = isCompleted
    }

    return arr;
}
export function isDueInNext3days(date) {
    return dayjs(date).diff(Date.now(), 'day') <= 3
}

export function compareTaskByDueDates(todoItem1, todoItem2) {
    if(isDueInNext3days(todoItem1.date)) {
        if(isDueInNext3days(todoItem2.date)) {
            return todoItem1.date > todoItem2.date ? 1 : -1
        }
        return -1
    }
    if(isDueInNext3days(todoItem2.date))
        return 1
    return todoItem1.id > todoItem2.id ? 1 : -1
}