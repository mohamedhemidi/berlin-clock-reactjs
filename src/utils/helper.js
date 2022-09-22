import { constants } from "../constants/constants";

const populateClock = (code, start, end, rowClass, unit, shape, count) => {
    const block = {};
    block["row_class"] = rowClass;
    block["code"] = code.slice(start, end);
    block['row_blocks'] = {};
    const berlinTime = code.slice(start, end);
    for (let i = 0; i < berlinTime.length; i++) {
        console.log(i, berlinTime[i]);
        block['row_blocks'][`row_block_${i}`] = {
            color: constants[shape][berlinTime[i]],
            unit,
            shape,
            count,
        }
    }
    return block;
}

export const convertBerlinTimeToDigital = (code) => {
    const body = {};

    // Seconds Row:
    body.secondsRow = populateClock(code, 0, 1, "seconds-row", "s", "circle", "1");

    // 5 Hours Upper Row:    
    body.hours_5_upper_row = populateClock(code, 1, 5, "hours-x5-row", "h", "rectangle", "5")

    // 1 Hour Lower Row:
    body.hours_1_lower_row = populateClock(code, 5, 9, "hours-x1-row", "h", "rectangle", "1");

    // 5 Minute Upper Row:    
    body.minutes_5_upper_row = populateClock(code, 9, 20, "minutes-x5-row", "m", "rectangle", "5")

    // 1 Minute Lower Row:
    body.minutes_1_lower_row = populateClock(code, 20, 24, "minutes-x1-row", "m", "rectangle", "1");

    return body;

}
