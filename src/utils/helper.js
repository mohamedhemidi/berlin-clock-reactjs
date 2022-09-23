import { constants } from "../constants/constants";

const populateClock = (code, start, end, rowClass, unit, shape, count) => {
    const block = {};
    block["row_class"] = rowClass;
    block["code"] = code.slice(start, end);
    block['row_blocks'] = {};
    const berlinTime = code.slice(start, end);
    for (let i = 0; i < berlinTime.length; i++) {
        block['row_blocks'][`row_block_${i}`] = {
            color: constants[shape][berlinTime[i]],
            unit,
            shape,
            count,
        }
    }
    return block;
}
//@
//@
//@@ Convert Berlin Time => Digital Time
//@
//@

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


//@
//@
//@@ Convert Digital Time => Berlin Time
//@
//@


const populateDigitalCode = (time, rowUnit, count) => {
    const code = {};

    code['row_unit'] = rowUnit;
    code['digital_code'] = [];


    const hours = parseInt(time.split(':')[0]);
    const minutes = parseInt(time.split(':')[1]);
    const seconds = parseInt(time.split(':')[2]);

    switch (rowUnit) {

        case "s":
            if (seconds % 2 == 0) {
                code['digital_code'].push("Y")
            } else {
                code['digital_code'].push("O")
            }
            break;
        case "h5":
            for (let i = 0; i < count; i++) {
                code['digital_code'].push("O")
            }
            if(hours % 5 == 0) {
                for (let i = 0; i < hours / 5; i++) {
                    code['digital_code'].push("R")
                }
            }

            if (hours == 23) {
                code['digital_code'] = [];
                for (let i = 0; i < count; i++) {
                    code['digital_code'].push("R")
                }
            }
            if (hours > 5 && hours % 5 != 0) {
                for (let i = 0; i < Math.floor(hours / 5); i++) {
                    code['digital_code'][i] = "R";
                }
            }
            break;
        case "h1":
            for (let i = 0; i < count; i++) {
                code['digital_code'].push("O")
            }
            if(hours > 5 && hours != 23) {
                for (let i = 0; i < Math.floor(hours % 5); i++) {
                    code['digital_code'][i] = "R";
                }
            }
            break;
        case "m5":
            for (let i = 1; i <= count; i++) {
                code['digital_code'].push("O")
            }
            if(minutes % 5 == 0){
                for (let i = 1; i <= minutes / 5; i++) {
                    code['digital_code'].push("R")
                }
            }
            if(minutes > 5 && minutes % 5 != 0) {
                for(let i = 0 ; i < Math.floor(minutes / 5); i++) {
                    if(i + 1 != 0 && (i + 1) % 3 == 0){
                        code['digital_code'][i] = "R"
                    }else{
                        code['digital_code'][i] = "Y"
                    }
                }
            }
            break;
        case "m1":
            for (let i = 0; i < count; i++) {
                code['digital_code'].push("O")
            }

            if(minutes > 5 && minutes != 23) {
                for (let i = 0; i < Math.floor(minutes % 5); i++) {
                    code['digital_code'][i] = "Y";
                }
            }
            break;
        default:
            break;
    }
    


    return code;
}

export const convertDigitalToBerlinTime = (time) => {
    const body = {};
    let code = "";

    const digitalTime = time;

    body.s = populateDigitalCode(digitalTime, "s", 1);
    body.h5 = populateDigitalCode(digitalTime, "h5", 4);
    body.h1 = populateDigitalCode(digitalTime, "h1", 4);
    body.m5 = populateDigitalCode(digitalTime, "m5", 11);
    body.m1 = populateDigitalCode(digitalTime, "m1", 4);


    Object.entries(body).map(i => {
        code += i[1].digital_code.join('');
    })
    return code;
}



