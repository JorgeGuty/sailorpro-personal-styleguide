
/**
 * If you are to render a calendar that start on a wednesday, you need some days from the past month. As well at the end.
 * This function gets you all the days to render for a month
 * @param {integer} month - 1 to 12
 * @param {integer} year - 4 digit number
 * 
 * @returns {Date[]}
 */
export function getMonthWeeksWithAdjacentDays(month, year) {
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numDays = lastDayOfMonth.getDate();

    // Add days from next month if necessary
    let dayOfPastMonth = new Date(year, month, 0)
    
    if (dayOfPastMonth.getDay() != 0) {        
        while (dayOfPastMonth.getDay() != 0) {
            let dayToUnshift = new Date(dayOfPastMonth)
            days.unshift(dayToUnshift)
            dayOfPastMonth.setDate(dayOfPastMonth.getDate() - 1)
        }
    }

    // Add days from current month
    for (let i = 1; i <= numDays; i++) {
        const day = new Date(year, month, i);
        
        days.push(day);
    }

    // Add days from next month if necessary
    let dayOfNextMonth = new Date(year, month + 1, 1)
    if (dayOfNextMonth.getDay() != 1) {        
        while (dayOfNextMonth.getDay() != 1) {            
            let dayToPush = new Date(dayOfNextMonth)
            days.push(dayToPush)
            dayOfNextMonth.setDate(dayOfNextMonth.getDate() + 1)
        }
    }

    const matrix = [];
    for (let i = 0; i < days.length; i += 7) {
      const row = days.slice(i, i + 7);
      matrix.push(row);
    }
    return matrix;

    return days;
}
  
export function getMonthName(year, month) {
    const date = new Date(year, month, 1);    
    const monthName = date.toLocaleString('ES', { month: 'long' });
    return `${monthName.toLowerCase()} de ${date.getFullYear()}`;
}

export const turnDateToUTC = (date) => {
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    return new Date(now_utc)
}

export function formatTime(hours, minutes) {
    let period = 'AM';
    if (hours > 12) {
      period = 'PM';
    }
    if (hours > 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function getPeriod(hour) {
    if (hour <= 12) {
       return 'AM';
    } else {
        return 'PM';
    }
}