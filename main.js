let chart = document.getElementById('lineChart');
let txt = document.getElementById('txt').innerHTML;
let x =  [25 , 15, 11,  111 ,55 ,31 ,67 ,124, 555];
let lineChart = new Chart(chart , {
    type : "line",
    data : {
        labels: ['aaa' , 'bbb' , 'ccc' ,'aaa' , 'bbb' , 'ccc' ,'aaa' , 'bbb' , 'ccc' ,'aaa' , 'bbb' , 'ccc'],
        datasets : [
            {
                label : "My First DataSet",
                fill : true,
                lineTension : 0.1,
                backgroundColor : "rgba(45,192,192,0.4)",
                borderColor : "rgba(2,192,192,1)",
                burderCapStyle:"butt",
                burderDash :[],
                borderDashOffset : 0.0,
                borderJoinStyle : 'miter',
                pointBorderColor : "rgba(155 , 5 , 255 , 1)",
                pointBackgroundColor : "#f00",
                pointBorderWidth :  1,
                pointHoverRadios : 150,
                pointHoverBackgroundColor : "rgba(75 , 192 , 192 ,1)",
                pointHoverBorderColor : "rgba(220 ,220 ,220, 1)",
                pointHoverBorderWidth : 2,
                pointRadius : 1,
                pointHitRadius : 10,
            }
        ]
    }
});

let btn = document.getElementById('btn');
btn.onclick = function()
{
}