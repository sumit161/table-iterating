//1 info2
var softwarecompany=[
{
	profile:"back-end-developer",
	maxage:50,
	minage:25,
	salary:"50k",
	workinghours:"40/week",
	holidy:"2/week",
},
{
	profile:"front-end-developer",
	maxage:45,
	minage:24,
	salary:"45k",
	workinghours:"35/week",
	holidy:"2/week",
},
{
	profile:"testing",
	maxage:47,
	minage:23,
	salary:"40k",
	workinghours:"47/week",
	holidy:"2/week",
},
{
	profile:"SAP",
	maxage:45,
	minage:22,
	salary:"35k",
	workinghours:"48/week",
	holidy:"1/week",
},
];
var companyinfo=document.getElementById('info2');
result2=" ";
for(var i=0;i<softwarecompany.length;i++){
	result2+="<tr><td>"+(i+1)+"</td><td>"+softwarecompany[i].profile+"</td><td>"+softwarecompany[i].maxage+"</td><td>"+softwarecompany[i].minage+"</td><td>"+softwarecompany[i].salary+"</td><td>"+softwarecompany[i].workinghours+"</td><td>"+softwarecompany[i].holidy+"</td></tr>"
}
companyinfo.innerHTML=result2;

//info3 new example


//2 info
var studentinfo=[
{
	fname:"ganesh",
	lname:"jh",
	nickname:"nmnb",
	contact:908,
},
{
	fname:"umeesh",
	lname:"jh",
	nickname:"nmnb",
    contact:789,
},
{
	fname:"dinesh",
	lname:"jh",
	nickname:"nmnb",
    contact:0987,
},
{
    fname:"jayesh",
	lname:"jh",
	nickname:"nmnb",
	contact:9845,
},

];
//request
var newrequest =document.getElementById('info');

//loop
result5=' ';
for(var i=0; i < studentinfo.length;i++){
	result5+="<tr><td>"+(i+1)+"</td><td>"+studentinfo[i].fname+"</td><td>"+studentinfo[i].lname+"</td><td>"+studentinfo[i].nickname+"</td><td>"+studentinfo[i].contact+"</td><?tr>"

	
}
newrequest.innerHTML=result5;


//new example
//3 info1

var dairyOwaner=[
{
	fname:"sandip",
	lname:"mki",
	farmname:"samrat",
	contact:"1234",
	
},
{
	fname:"pradip",
	lname:"tre",
	farmname:"virrat",
	contact:"2341",
	
},
{
	fname:"jaydip",
	lname:"xvg",
	farmname:"jabrrat",
	contact:"8904",
	
},
{
	fname:"Nandadip",
	lname:"abc",
	farmname:"sairat",
	contact:"06534",
	
},

]
var dairyinfo=document.getElementById('info1');
var result6=' ';
for(var i=0;i < dairyOwaner.length;i++){
result6+="<tr><td>"+(i+1)+"</td><td>"+dairyOwaner[i].fname+"</td><td>"+dairyOwaner[i].lname+"</td><td>"+dairyOwaner[i].farmname+"</td><td>"+dairyOwaner[i].contact+"</td></tr>"
//result6+="<tr>"
//result6+="<td>"+(i+1)+"</td>"
//result6+="<td>"+dairyOwaner[i].fname+"</td>"
//result6+="<td>"+dairyOwaner[i].lname+"</td>"
//result6+="<td>"+dairyOwaner[i].farmname+"</td>"
//result6+="<td>"+dairyOwaner[i].contact+"</td>"
//result6+="</tr>"

}
dairyinfo.innerHTML=result6
	

//district
cl=console.log;
i=9;
cl(i);
var punediv=[
{
	famous:"<a href='https://www.dreamstime.com/royalty-free-stock-photo-shaniwar-wada-palace-pune-india-image15001285'><img src='https://thumbs.dreamstime.com/b/shaniwar-wada-palace-pune-india-15001285.jpg' alt='shaniwar wada' title='shaniwar wada'>",
	District:"Pune",
	Population:10466643,
	Taluka:15,
	Area:15643,
	Biggesttaluka:"Shirur",
	x:"punetahasil",
	web:"<a href='https://en.m.wikipedia.org/wiki/Pune_district'>punewikipedia"

},
{
	famous:"<a href='https://www.google.com/search?q=solapur+famous+places+images&tbm=isch&chips=q:solapur+famous+places,online_chips:pandharpur:y0YJcAgavL0%3D&rlz=1C1CHBF_enIN1031IN1031&hl=en&sa=X&ved=2ahUKEwjPlsj907n7AhVqjtgFHTRlBy8Q4lYoA3oECAEQKg&biw=1519&bih=754#imgrc=9cttW_PKmdvzgM'><img src='data:image/jpeg;base64,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' alt='vitthal temple' title='temple'",
	District:"solapur",
	Population:4317756,
	Taluka:11,
	Area:14895,
	Biggesttaluka:"karmala",
	x:"north solapur",
	web:"<a href='https://en.m.wikipedia.org/wiki/Solapur_district'>solapuewikipedia"
},
{
	famous:"<a href ='https://www.google.com/search?q=kolhapur+mahalakshmi&rlz=1C1CHBF_enIN1031IN1031&sxsrf=ALiCzsZKrH1QDie_eL1gwpeV392tswi-oA:1668841163054&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZjdfl1bn7AhWe4nMBHbXTBwcQ_AUoAXoECAIQAw&biw=1536&bih=754&dpr=1.25'><img src='data:image/jpeg;base64,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' alt='mahalakshmi temple' title='mahalakshmi temple'",
	District:"kolhapur",
	Population:3874015,
	Taluka:12,
	Area:7692,
	Biggesttaluka:"shahuwadi",
	x:"Bavada",
	web:"<a href='https://en.m.wikipedia.org/wiki/Kolhapur_district'>kolhapurwikipedia"

},
{
	famous:"<a href='https://www.google.com/search?q=sangali+famous+images&rlz=1C1CHBF_enIN1031IN1031&oq=sangali+famous+imag&aqs=chrome.1.69i57j33i10i160.21248j0j9&sourceid=chrome&ie=UTF-8#imgrc=qdqJuh8ekNyuoM'><img src='https://www.nativeplanet.com/photos/560x292/2018/09/photo-91-164238-4.jpg'>",
	District:"sangali",
	Population:2822143,
	Taluka:10,
	Area:8572,
	Biggesttaluka:"jat",
	x:"palus",
	web:"<a href='https://en.m.wikipedia.org/wiki/Sangli_district'>sangaliwikipedia"
	
},
{
	famous:"<a href='https://www.google.com/search?gs_ssp=eJzj4tTP1TcwK7I0yjNg9BLLzs_JSCwoLVIozkjMKFXITcxILErMAgDA9Au0&q=kolhapur+shahu+maharaj&rlz=1C1CHBF_enIN1031IN1031&oq=kolhapur+shahu+maha&aqs=chrome.1.0i355i512j46i512j0i512l2j69i57j46i175i199i512j0i512l2j0i22i30l2.13281j0j9&sourceid=chrome&ie=UTF-8#imgrc=tI9YEGpPHbmaaM'><img src='https://static.india.com/wp-content/uploads/2021/06/pjimage-2021-06-26T075042.902.jpg' alt='maharaj' title='shahu maharaj'",
	District:"satara",
	Population:3003741,
	Taluka:11,
	Area:10480,
	Biggesttaluka:"patan",
	x:"khandala",
	web:"<a href='https://en.m.wikipedia.org/wiki/Satara_district'>satarawikipedia"
},
];

var request=document.getElementById('info3');
cl(request);
result=" ";
for(var i=0;i < punediv.length;i++){
	result+="<tr><td>"+(i+1)+"</td><td>"+punediv[i].famous+"</td><td>"+punediv[i].District+"</td><td>"+punediv[i].Population+"</td><td>"+punediv[i].Taluka+"</td><td>"+punediv[i].Area+"</td><td>"+punediv[i].Biggesttaluka+"</td><td>"+punediv[i].x+"</td><td>"+punediv[i].web+"</td></tr>"
};
cl(result);
request.innerHTML=result