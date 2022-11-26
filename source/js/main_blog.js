

//运行时间
var BootDate = new Date("2022/04/1 00:00:00");
function ShowRunTime(id) {
        var NowDate = new Date();
        var RunDateM = parseInt(NowDate - BootDate);
        var RunDays = Math.floor(RunDateM / (24 * 3600 * 1000));
        var RunHours = Math.floor(RunDateM % (24 * 3600 * 1000) / (3600 * 1000));
        var RunMinutes = Math.floor(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000));
        var RunSeconds = Math.round(RunDateM % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000);
        var RunTime = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
        document.getElementById(id).innerHTML = "本站已艰难地运行：" + RunTime;
}
setInterval("ShowRunTime('RunTime')", 1000);
