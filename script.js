document.getElementById('playButton').addEventListener('click', function() {
    const audioUrl = document.getElementById('audioUrl').value;
    const audioElement = document.getElementById('audio');
    const audioLink = document.getElementById('audioLink');
    const linkOutput = document.getElementById('linkOutput');

    // تغيير مصدر الملف الصوتي
    audioElement.src = audioUrl;
    
    // تشغيل الملف الصوتي
    audioElement.play();

    // عرض الرابط
    audioLink.href = audioUrl;
    linkOutput.style.display = 'block';
});
