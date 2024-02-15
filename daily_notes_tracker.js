```dataviewjs
let month_number = dv.func.dateformat(dv.date('today'), 'M');
let year_number = dv.func.dateformat(dv.date('today'), 'y');
//if you want the name of the month in the title, uncomment line 5 and 9 and comment line 10
//let month = dv.func.dateformat(dv.date('today'), 'MMMM');

let notes = dv.pages('"Notes/'+year_number+'/'+month_number+'\"');

//dv.span("## Statistics from "+ month + " 🗓️");
dv.span("## Statistics of current month 🗓️");

dv.span("<br>");

let done_days = notes.length;
let study_days = notes.file.tasks.where(page => page.text == "Study:" && page.status == "x").length;
let productive_days = notes.file.tasks.where(page => page.text == "Productive:" && page.status == "x").length;

//-------------------------------------------------------------------

dv.el("b", "Study: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
dv.el("b", "Productive: <br>");

dv.span("  <progress max=" + done_days + " value="+study_days+"></progress> " + study_days + "/" + done_days +"");

dv.span("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");

dv.span("<progress max=" + done_days + " value="+productive_days+"></progress> " + productive_days + "/" + done_days +" <br>");

dv.span("<br>");

```

