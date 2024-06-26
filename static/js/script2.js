document.getElementById('iaReportBtn').addEventListener('click', function () {
    let userConfirmation = confirm("Do you want to download this file?");
    if (userConfirmation) { 
        let a = document.createElement('a');
        // a.href = '../data1/comparison_report.xlsx'; 
        //a.download = 'Impact Analysis Report'; 
        a.href = "/download/Impact_Analysis_Report.xlsx";
         document.body.appendChild(a);
          a.click(); 
          document.body.removeChild(a); 
        } 
        else { 
            alert("Download canceled.");
         }
});

document.getElementById('testCasesBtn').addEventListener('click', function () {
    let userConfirmation = confirm("Do you want to download this file?");
    if (userConfirmation) { let a = document.createElement('a'); 
        //a.href = '../data1/OldNewData.xlsx';
        //a.download = 'Test Cases'; 
        a.href = "/download/Test_Scenarios.xlsx";
         document.body.appendChild(a); 
         a.click();
          document.body.removeChild(a); 
        } 
        else { 
            alert("Download canceled."); 
        }
});