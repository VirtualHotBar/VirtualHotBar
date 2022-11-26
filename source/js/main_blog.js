
document.getElementsByTagName("footer")[0].innerHTML=`
<div  style="text-align: center;background: var(--code-background);margin: 0px 0px 0px 0px" >
        <br/>

        <a href="https://icp.gov.moe/?keyword=20220247" target="_blank" class="class-link"  rel="noopener" >萌ICP备20220247号</a>
        <br/>
        本网站由 <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" class="class-link"  rel="noopener" >又拍云</a> 提供CDN加速/云存储服务
        <br/>       
        本网站由 <a href="https://www.lingshulian.com/" target="_blank" class="class-link"  rel="noopener" >棱束链</a> 提供高速直链服务
        <br/>
        <span id="RunTime" style=""></span>
        <br/>
    
        <span >访问人数<span id="busuanzi_value_site_uv"></span></span>
        <span >总访问量&nbsp;<span id="busuanzi_value_site_pv"></span></span>

        <div style="border-top: 1px solid rgba(0, 0, 0, 0.1);padding: 10px 10px 10px;text-align: center;">
                © 2019-Present <a href="https://www.loser.plus/" target="_blank" class="class-link"  rel="noopener" >VirtualHotBar</a>
        </div>
</div>`


//运行时间
var BootDate = new Date("2022/04/1 00:00:00");
function ShowRunTime(id) {
var NowDate = new Date();
var RunDateM = parseInt(NowDate - BootDate);
var RunDays = Math.floor(RunDateM/(24*3600*1000));
var RunHours = Math.floor(RunDateM%(24*3600*1000)/(3600*1000));
var RunMinutes = Math.floor(RunDateM%(24*3600*1000)%(3600*1000)/(60*1000));
var RunSeconds = Math.round(RunDateM%(24*3600*1000)%(3600*1000)%(60*1000)/1000);
var RunTime = RunDays + "天" + RunHours + "时" + RunMinutes + "分" + RunSeconds + "秒";
document.getElementById(id).innerHTML = "本站已艰难地运行：" + RunTime;
}
setInterval("ShowRunTime('RunTime')", 1000);
