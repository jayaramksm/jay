










import { ExportToCsv } from 'export-to-csv';

var data = [
  { FirstName: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]1',Id: 1 ,lastname:"hello"},
      {Id: 1 ,  FirstName: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]1',lastname:"hello"},
      {  FirstName: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]1', Id: 1 ,lastname:"hello"},
  
]
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    // showTitle: true,
    // title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    // useKeysAsHeaders: true,
    headers: ['hello jayaram', '__id','surname'] 
  };

const csvExporter = new ExportToCsv(options);
function React_csvComponent (){

 const csvhandleclick = ()=>{
  csvExporter.generateCsv(data);
 }
 return(
   <div>
     <button onClick={csvhandleclick}>csv file</button>
   </div>
 )
}



export default React_csvComponent








// import { CSVLink, CSVDownload } from "react-csv";

// import CsvDownloader from 'react-csv-downloader';
//  import React from 'react';

// const headers = [
//     { label: "First Name", key: "firstname" },
//     { label: "Last Name", key: "id" },
//     // { label: "Email", key: "email" }
//   ];
   
// // const  data =`firstname,lastname,email
// // Ahmed,Tomi
// // Raed,Labes
// // Yezzi,Min l3b
// // `;
//   const item = [
// //     { firstname: "Ahmed", lastname: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]', email: "ah@smthing.co.com" },
// //     { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
// //     { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
//   { firstname: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]1', id: 1 },
//     {  firstname: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]1', id: 1 },
//     {  firstname: '[{"type":"jay","text":"hi"},{"type":"geetha","text":"phani"},{"type":"sita","text":"goodmrng"}]1', id: 1 },
//   ];


// const columns = [{
//     id: 'first',
//     displayName: 'First column'
//   }, {
//     id: 'second',
//     displayName: 'Second column'
//   }];
 
//   const datas = [{
//     first:  '[{"type":"text","text":"hi"},{"type":"text","text":"phani"},{"type":"text","text":"goodmrng"}]1',
//     second: 'bar'
//   }, {
//     first: 'foobar',
//     second: 'foobar'
//   }];
   
// function React_csvComponent (){
//     return(
//         <div>
         
 

// // <CSVLink data={item}
// //   headers={headers}
// // separator={"'"}
// //   >Download me</CSVLink>;
// // {/* // or
// // <CSVDownload data={csvData} headers={headers} target="_blank" />; */}

// // <div>
// //       <CsvDownloader
// //         filename="myfile"
// //         separator=";"
// //         wrapColumnChar="'"
// //         columns={columns}
// //         datas={datas}
// //         text="DOWNLOAD" />
// //     </div>
// //         </div>
// //     )
// // }Dear sir, 

    

// Due to my brother marriage on 17-12-2020 I will not be able to attend to office . Please consider and grant me a leave on 17-12-2020 and 18-12-2020  

 

 

// Thanks & Regards, 

// kasim jayaram, 

// 9640645520. 

 


// export default React_csvComponent