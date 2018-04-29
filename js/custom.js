function fillTables(fname){
    $.getJSON(fname+'.json', function(jd) {
        processJSON(jd.cars);
    });
}

function processJSON(jd){
    for (data of jd){
        $(".car-table-large").mirandajs(data);
    }
}

fillTables('cars');
