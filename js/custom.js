function fillTables(fname){
    $.getJSON(fname+'.json', function(jd) {
        processJSON(jd.cars);
    });
}

function processJSON(jd){
    var tables = ['car-table-large','car-table-small'];
    for (tname of tables){
        var tbody = document.getElementsByClassName(tname)[0].children[1];
        for (car of jd){
            tr = tbody.insertRow();
            for (col in car){
                var info = car[col]
                if (col != 'comment'){
                    td = tr.insertCell();
                    info = (col != 'Price') ? info : '$' + info;
                    td.innerHTML = info;
                }
            }
        }
    }
}

fillTables('cars');
// processJSON(dict.cars);