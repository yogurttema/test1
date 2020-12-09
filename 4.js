function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('1.js', function(script) {

    console.log(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

    loadScript('2.js', function(script) {
        console.log(`Здорово, второй скрипт загрузился`);
    });

});