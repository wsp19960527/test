import Mock from 'mockjs'
let videoIndex = 0
const videos = [{
    src: 'https://qn-community.233leyuan.com/community/post/078711272a4a4ee0b9f5f8fa54426854_497898814.mp4',
    cover: 'https://community.233leyuan.com/community/post/25e15376a6434618ac05ff6e45fddefd_497898815.webp'
}, {
    cover: "https://community.233leyuan.com/community/post/5e33be3e4a6e4e29a0756dee8613a781_503601619.webp",
    src: 'https://community.233leyuan.com/community/post/7c16933e8f0a43d393ad6d8d1675ed57_503601618.mp4'
}, {
    cover: 'https://community.233leyuan.com/community/post/f118cc3b8e7f4ca886bb4e5e1aa893ad_496365499.webp',
    src: 'https://community.233leyuan.com/community/post/8fd8f70e5dbc4011992883862427ab5d_496365498.mp4',
}, {
    cover: 'https://community.233leyuan.com/community/post/7def8f06ffba466bb894b133a4b4f7aa_498249180.webp',
    src: 'https://qn-community.233leyuan.com/community/post/e8215b6226604aacbc10ea35ac31c7b1_498249179.mp4'
}
]
// 依次从 videos 中取一个视频对象
function getNextVideo() {
    const video = videos[videoIndex]
    videoIndex = (videoIndex + 1) % videos.length // 更新索引并循环
    return video
}

export function generateMockData(count = 10) {
    return Array.from({length: count}).map(() => {
        const isVideo = Math.random() > 0.7

        let obj = {
            id: Mock.mock('@guid'),
            likes: Mock.mock('@natural(10, 1000)'),
            title: Mock.mock('@ctitle(15, 30)'),
        }
        if (isVideo) {
            // 随机从 videos 中取一个视频对象
            const randomVideo = getNextVideo()

            obj = Object.assign(obj, {
                type: 'video',
                cover: randomVideo.cover,
                src: randomVideo.src,
            })
        } else {
            // 生成随机宽高的图片
            const width = Mock.mock('@natural(200, 250)')
            const height = Mock.mock('@natural(200, 300)')
            obj = Object.assign(obj, {
                type: 'image',
                cover: `https://picsum.photos/${width}/${height}.webp`,
                height,
                width
            })
        }
        return obj
    })
}