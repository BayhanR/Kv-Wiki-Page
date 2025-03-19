(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_bolumler_page_jsx_72efa2._.js", {

"[project]/app/bolumler/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const Bolumler = ()=>{
    _s();
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVideo, setSelectedVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Seçilen videoyu tutmak için state
    const [watchedVideos, setWatchedVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // İzlenen videoları takip etmek için
    const [currentVideoIndex, setCurrentVideoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Geçerli videonun index'i
    const API_KEY = "AIzaSyBJWIiiFONCriad3-ZREyXCa_aiYa0vicU";
    const PLAYLIST_ID = "PLN6a-WhvxvGJEdiaoCuF3wAHi5TL9Tif9";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bolumler.useEffect": ()=>{
            const fetchVideos = {
                "Bolumler.useEffect.fetchVideos": async ()=>{
                    try {
                        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`);
                        const data = await response.json();
                        setVideos(data.items);
                    } catch (error) {
                        console.error("Error fetching videos:", error);
                    }
                }
            }["Bolumler.useEffect.fetchVideos"];
            fetchVideos();
        }
    }["Bolumler.useEffect"], []);
    const handleVideoClick = (videoId, index)=>{
        setSelectedVideo(videoId);
        setCurrentVideoIndex(index); // Videonun index'ini güncelle
        // Eğer video izlenmemişse, izlenen videolar listesine ekle
        if (!watchedVideos.includes(index)) {
            setWatchedVideos([
                ...watchedVideos,
                index
            ]);
        }
    };
    const handleNext = ()=>{
        if (currentVideoIndex < videos.length - 1) {
            const nextIndex = currentVideoIndex + 1;
            setSelectedVideo(videos[nextIndex].snippet.resourceId.videoId);
            setCurrentVideoIndex(nextIndex);
            // Eğer video izlenmemişse, izlenen videolar listesine ekle
            if (!watchedVideos.includes(nextIndex)) {
                setWatchedVideos([
                    ...watchedVideos,
                    nextIndex
                ]);
            }
        }
    };
    const handlePrevious = ()=>{
        if (currentVideoIndex > 0) {
            const prevIndex = currentVideoIndex - 1;
            setSelectedVideo(videos[prevIndex].snippet.resourceId.videoId);
            setCurrentVideoIndex(prevIndex);
            // Eğer video izlenmemişse, izlenen videolar listesine ekle
            if (!watchedVideos.includes(prevIndex)) {
                setWatchedVideos([
                    ...watchedVideos,
                    prevIndex
                ]);
            }
        }
    };
    const toggleWatchedStatus = (index)=>{
        if (watchedVideos.includes(index)) {
            // Eğer video izlenmişse, izlenmedik olarak işaretle
            setWatchedVideos(watchedVideos.filter((videoIndex)=>videoIndex !== index));
        } else {
            // Eğer video izlenmemişse, izlenmiş olarak işaretle
            setWatchedVideos([
                ...watchedVideos,
                index
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 bg-fixed bg-cover bg-center bg-[url('../public/korcancay.jpg')] h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-indigo-900 mb-6",
                children: "Bölümler"
            }, void 0, false, {
                fileName: "[project]/app/bolumler/page.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            selectedVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-indigo-900 mb-4",
                        children: [
                            currentVideoIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "Oynatılıyor: "
                            }, void 0, false, {
                                fileName: "[project]/app/bolumler/page.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this),
                            videos[currentVideoIndex]?.snippet.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/bolumler/page.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-4xl mx-auto h-[300px] mb-60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "500",
                            src: `https://www.youtube.com/embed/${selectedVideo}`,
                            title: "Video",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true
                        }, void 0, false, {
                            fileName: "[project]/app/bolumler/page.jsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/bolumler/page.jsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/bolumler/page.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mt-10 mb-16",
                children: videos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center space-x-4 p-2 border rounded bg-white cursor-pointer ${watchedVideos.includes(index) ? "bg-green-200" : ""} ${currentVideoIndex === index ? "bg-blue-200" : ""}`,
                        onClick: ()=>handleVideoClick(video.snippet.resourceId.videoId, index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-9 bg-gray-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: video.snippet.thumbnails.medium.url,
                                    alt: video.snippet.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/bolumler/page.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/bolumler/page.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: [
                                            video.snippet.title,
                                            currentVideoIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600 ml-2",
                                                children: "(Oynatılıyor)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/bolumler/page.jsx",
                                                lineNumber: 123,
                                                columnNumber: 7
                                            }, this) // Oynatılıyor yazısı
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/bolumler/page.jsx",
                                        lineNumber: 119,
                                        columnNumber: 3
                                    }, this),
                                    watchedVideos.includes(index) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: "(İzlendi)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/bolumler/page.jsx",
                                        lineNumber: 127,
                                        columnNumber: 5
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: "(İzlenmedi)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/bolumler/page.jsx",
                                        lineNumber: 129,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/bolumler/page.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            currentVideoIndex !== index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-blue-500 text-white px-4 py-2 rounded",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    toggleWatchedStatus(index);
                                },
                                children: watchedVideos.includes(index) ? "İzlenmedi Yap" : "İzlendi Yap"
                            }, void 0, false, {
                                fileName: "[project]/app/bolumler/page.jsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this)
                        ]
                    }, video.id, true, {
                        fileName: "[project]/app/bolumler/page.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/bolumler/page.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            selectedVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-4 fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrevious,
                        className: "bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:bg-gray-300",
                        disabled: currentVideoIndex === 0,
                        children: "Önceki Bölüm"
                    }, void 0, false, {
                        fileName: "[project]/app/bolumler/page.jsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:bg-gray-300",
                        disabled: currentVideoIndex === videos.length - 1,
                        children: "Sonraki Bölüm"
                    }, void 0, false, {
                        fileName: "[project]/app/bolumler/page.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/bolumler/page.jsx",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/bolumler/page.jsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
};
_s(Bolumler, "QJXpjeoERnnFDCXFp1wRwxzacMI=");
_c = Bolumler;
const __TURBOPACK__default__export__ = Bolumler;
var _c;
__turbopack_refresh__.register(_c, "Bolumler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/bolumler/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_bolumler_page_jsx_72efa2._.js.map