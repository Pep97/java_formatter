

var editor1 = ace.edit("editor1");
editor1.setTheme("ace/theme/monokai");
editor1.session.setMode("ace/mode/html"); // when you change the mode you're changing the programming language
editor1.setValue("<!-- Write here your HTML code -->\n\n<p>Example</p>");
var editor2 = ace.edit("editor2");
editor2.setTheme("ace/theme/monokai");
editor2.session.setMode("ace/mode/java"); // when you change the mode you're changing the programming language
editor2.setValue("");

function updateEditor2() {
    var htmlCode = editor1.getValue();
    console.log(htmlCode);
    var javaCode = htmlCode.replace(/"/g, "'"); // /g is regex, so it replaces all the occurrences
    var javaCodeArray = javaCode.split("\n");
    var newJavaCode = "";

    javaCodeArray.forEach((element, index) => {
        if (index === javaCodeArray.length - 1) {  // last element
            newJavaCode += "+ " + "\"" + element + "\";";
        } else if (index === 0) { // first element
            newJavaCode += "\"" + element + "\"\n";
        } else {
            newJavaCode += "+ " + "\"" + element + "\"\n";
        }
    });


    editor2.setValue(newJavaCode);
};
