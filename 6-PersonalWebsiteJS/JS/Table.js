function setTask(e){
    e.preventDefault();
    var date = $("#date").val();
    var timeStart = $("#tStart").val();
    var timeEnd = $("#tEnd").val();
    var activity = $("#act").val();
    var place = $("#place").val();
    var type = $("#type").val();
    var notes = $("#aNote").val();
    var free = $("#cbox").prop("checked");

    var Row = $("<tr>");

    Row.append("<td>" + date + "</td>");
    Row.append("<td>" + timeStart + "</td>");
    Row.append("<td>" + timeEnd + "</td>");
    Row.append("<td>" + activity + "</td>");
    Row.append("<td>" + place + "</td>");
    Row.append("<td>" + type + "</td>");
    Row.append("<td>" + notes + "</td>");
    Row.append("<td>" + (free ? "Free" : "Busy") + "</td>");

    $("#schedule tbody").append(Row);
}

$("#Activity").on("submit", setTask);
