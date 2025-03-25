setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000);

setInterval(function () {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time with leading zeros
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Update the digital clock
    document.getElementById('time').textContent = timeString;
    document.getElementById('format').textContent = period;
}, 1000);
