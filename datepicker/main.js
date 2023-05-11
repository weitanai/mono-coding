(function(){
    let datepicker =window.datepicker;
    if(!datepicker) return;
    var  monthData;
    var $datepickerWrapper;
    datepicker.buildUi = (year, month)=>{
        monthData = datepicker.getMonthData(year, month);

        let html ='<div class="ui-datepicker-header">'+
        '<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>'+
        '<span>'+ monthData.year + ' - '  + monthData.month + '</span>'+
        '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>'+
        '</div>'+
        '<div class="ui-datepicker-body">' + 
        '<table>'+
           '<thead>'+
               '<tr>'+
                    '<th>一</th>'+
                    '<th>二</th>'+
                    '<th>三</th>'+
                    '<th>四</th>'+
                    '<th>五</th>'+
                    '<th>六</th>'+
                    '<th>日</th>'+
                '</tr>'+
            '</thead>'+
            '<tbody>';
                for(let i = 0 ; i<monthData.retDate.length; i++) {
                    const item = monthData.retDate[i];
                    if(i%7 === 0) {
                        html += '<tr>'
                    }
                    html +=  '<td data-date ="' + item.date + '">' + item.showDate + '</td>';
                    if ( i% 7 === 6) {
                        html += '</tr>'
                    }
                }
                html + '</tbody>'+
            '</table>'+
        '</div>';

         return html;
    }
    datepicker.render = (direction)=>{
        var year;
        var month;
        if(monthData) {
            year = monthData.year;
            month = monthData.month
        }
        if(direction==='pre') month--;
        if(direction==='next') month++;
        console.log(year, month, '---');
        const html = datepicker.buildUi(year, month);
    
        if(!$datepickerWrapper) {
            $datepickerWrapper = document.createElement('div');
            document.body.appendChild($datepickerWrapper);
            $datepickerWrapper.className = 'ui-datepicker-wrap';
        }
        $datepickerWrapper.innerHTML = html;
    }
    datepicker.init = ($inputClass)=>{
        datepicker.render();
        const showElement = document.querySelector($inputClass);
        let isShow = false;
        
        showElement.addEventListener('click', ()=>{
            if(isShow) {
                // $datepickerWrapper.style.display = 'none';
                $datepickerWrapper.classList.remove('ui-datepicker-wrap-show');
                isShow = false
            }else {
                // $datepickerWrapper.style.display = 'block';
                $datepickerWrapper.classList.add('ui-datepicker-wrap-show');
                const position = $datepickerWrapper.getBoundingClientRect();
                const top = position && position.top;
                const left = position && position.left;
                console.log(position,top, left);
                $datepickerWrapper.style.top = top;
                $datepickerWrapper.style.left = left;
                isShow = true;
            }
        }, false);
        
        // next month event 事件代理
        $datepickerWrapper.addEventListener('click', (e)=>{
            const $target = e. target;

            //click pre month
            if($target.classList.contains('ui-datepicker-prev-btn')){
                datepicker.render('pre');
            }
            if($target.classList.contains('ui-datepicker-next-btn')){
                datepicker.render('next');
            }
        }, false);

        $datepickerWrapper.addEventListener('click', (e)=>{
            const clickELe = e.target;
            if(!clickELe.tagName.toLowerCase() ==='td') return;
            const clickDate = new Date(monthData.year, monthData.month-1, clickELe.dataset.date);
            // const nowDate = new Date();
            // if(nowDate.getTime() > clickDate.getTime()){
            //     alert('not click');
            // }
            let formatRes= '';
            formatRes += clickDate.getFullYear() + '-';
            formatRes += clickDate.getMonth() + 1 + '-';
            formatRes += clickDate.getDate();
            showElement.value = formatRes;
        }, false);
    }
   
})()
