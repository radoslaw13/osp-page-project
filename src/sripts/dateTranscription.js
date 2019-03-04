export function dateTranscription(date) {
    let day = date.getDate();
    let year = date.getFullYear();
    let month = "";
    switch(date.getMonth()){
        case 0 : month = "stycznia"; break;
        case 1 : month = "lutego"; break;
        case 2 : month = "marca"; break;
        case 3 : month = "kwietnia"; break;
        case 4 : month = "maja"; break;
        case 5 : month = "czerwca"; break;
        case 6 : month = "lipca"; break;
        case 7 : month = "sierpnia"; break;
        case 8 : month = "września"; break;
        case 9 : month = "października"; break;
        case 10 : month = "listopada"; break;
        case 11 : month = "grudnia"; break;
        default: month = "nieznany";
    };
    return day + " " + month + " " + year;
};

export function dateFormat(data) {
    var date = new Date(data);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();

    return [year, '-',
        (month>9 ? '' : '0') + month, '-',
        (day>9 ? '' : '0') + day, 'T',
        (hour>9 ? '' : '0') + hour, ':',
        (minute>9 ? '' : '0') + minute,
       ].join('');
}