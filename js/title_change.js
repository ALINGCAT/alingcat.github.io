document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == 'hidden') {
        origin_title = document.title;
        document.title = origin_title + " - Zzz...";
    } else document.title = origin_title;
});