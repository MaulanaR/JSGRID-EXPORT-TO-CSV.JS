//Special Thanks to 
//https://gist.github.com/georgeu2000/29b4d17168708208266e44ff5c197f4f

//Call this function to perform export data to csv 
//example : ExportToCsv("idJsGridTable","Employee Reports") 
function ExportToCsv(idTable, ExpFileName) {
    JSONToCSVConvertor(createJSON(idTable), ExpFileName, true)
}

function JSONToCSVConvertor(JSONData, Label, ShowLabel) {
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';
    CSV += Label + '\r\n\n';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData[0]) {
            row += index + ',';

        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        for (var index in arrData[i]) {

            row += '"' + arrData[i][index] + '",';

        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }
    if (CSV == '') {
        alert("Invalid data");
        return;
    }
    var fileName = Label;

    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([CSV], {
        type: "application/octet-stream"
    }));
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
}

function headerValues(id) {
    return $('#' + id).data('JSGrid')
        .fields
        .map(function(d) {
            return d
        })
}

function dataObjects(id) {
    return $('#' + id).data('JSGrid').data
}

function createJSONForSingle(object, id) {
    var hash = {};
    headerValues(id).map(function(key) {
        hash[key.title] = object[key.name]
    });
    return hash;
}

function createJSON(id) {
    objects = dataObjects(id).map(function(o) {
        return createJSONForSingle(o, id)
    });
    return JSON.stringify(objects, null, 2);
}