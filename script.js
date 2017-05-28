/**
 * Created by jeewendrakumar on 5/28/2017.
 */
function loadXmlData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseXML);
            var i;
            var xmlDoc = this.responseXML;
            var table="<tr><th>Name</th><th>Age</th><th>Salary</th></tr>";
            var x = xmlDoc.getElementsByTagName("Employee");
            for (i = 0; i <x.length; i++) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("Age")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("Salary")[0].childNodes[0].nodeValue +
                    "</td></tr>";
            }
            document.getElementById("employee-details").innerHTML = table;
        }
    };
    xhttp.open("GET", "employees.xml", true);
    xhttp.send();
}