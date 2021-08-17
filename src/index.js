const _ = require('lodash')
import { home } from './components/home/Home'
import './style.css'
import wall from './asset/test.png'
import rabbit from './components/home/img/1.jpg'


window.onload = main()


function linkDetect() {
    console.log("innnnnn index.js");
    home()
}


function main(){
	linkDetect()

	const root = document.querySelector('.root')
	console.log(root)

	const imgWall = document.createElement('img')
	imgWall.src = wall
	imgWall.classList.toggle('pic')

	const imgRabbit = document.createElement('img')
	imgRabbit.src = rabbit
	imgRabbit.classList.toggle('pic')

	root.appendChild(imgWall)
	root.appendChild(imgRabbit)

}