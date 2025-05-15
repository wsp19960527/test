import { generateMockData } from '@/utils/mock'

export function fetchDiscoverData(page = 1, format = 'json') {
    const data = generateMockData(10)
    if (format === 'xml') {
        // 模拟返回 xml 格式
        return new Blob([`<items>${data.map(d => `<item><title>${d.title}</title></item>`).join('')}</items>`], { type: 'application/xml' })
    }
    return Promise.resolve(data)
}