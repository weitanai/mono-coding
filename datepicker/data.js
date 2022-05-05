(function(){
    var datepicker = {};

    datepicker.getMonthData = (year, month) => {
        var retDate = [];
        if(!year || !month) {
            const today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        let firstDate = new Date(year, month-1, 1);

        let firstDayWeekDay= firstDate.getDay();
        // sunday value 0 set value 7
        if(firstDayWeekDay === 0) firstDayWeekDay = 7;

        year = firstDate.getFullYear();
        month = firstDate.getMonth() + 1;
        
        // 一个月最后一天
        let lastDayOfLastMonth = new Date(year, month-1, 0);
        let lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        let preMonthDayCount = firstDayWeekDay - 1;

        let lastDay = new Date(year, month, 0);
        let lastDate = lastDay.getDate();

        // 为了方便取6行
        for(let i = 0; i<7*6; i++) {
            let date = i +1 - preMonthDayCount;
            let showDate = date;
            let thisMonth = month;
            
            // last month 
            if(date <= 0){
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            }else if(date > lastDate) {
                // next month
                thisMonth = month + 1;
                showDate = date - lastDate;
            }

            if(thisMonth === 0) thisMonth = 12;
            if(thisMonth === 13) thisMonth = 1;
            retDate.push({
                month: thisMonth,
                showDate,
                date,
            });
        }
        return {year, month, retDate};
        console.log(year, month,'---geda');
     }

    window.datepicker = datepicker;
})()