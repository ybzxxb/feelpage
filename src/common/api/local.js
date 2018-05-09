import fecth from 'utils/fecth.js'
import store from 'store'
import Global from 'common/js/global.js'
export function localJson (url, index = 0) {
	return new Promise((resolve, reject) => {
		fecth.get(url).then((res) => {
			let imageInfo = {
				type: 'bing',
				url: 'www.bing.com' + res.data.url,
				title: res.data.title,
				disc: res.data.disc,
				date: Global.utils.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
				index: index
			}
			store.dispatch({
				type: 'set_FixedImageInfo',
				data: imageInfo
			})
			localStorage.setItem('fixedImageBg', JSON.stringify(imageInfo))
			resolve(imageInfo)
		}, (err) => {
			alert(err)
			reject(err)
		})
	})
}

