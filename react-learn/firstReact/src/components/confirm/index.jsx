
import React, { Component, useEffect } from 'react'
import ReactDom from 'react-dom'
import './index.css'

function Confirm(option) {
  // 默认处理
  let opt = {
    message: '确定此操作',
    onConfirm: () => { },
    onCancel: () => { },
    tipText: '提示',
    confirmText: '确定',
    cancelText: '取消',
    showConfirmText: true,
    showCancelText: true
  }
  if (toString.call(option) === '[object String]') {
    opt.message = option
  } else if (toString.call(option) === '[object Object]') {
    Object.assign(opt, option)
  }

  return new Promise((resolve, reject) => {
    // 创建真实dom
    let dom = createTempNode()
    let str = <div className='confirm-contianer'>
      <h4 className='confirm-header'>{opt.tipText}</h4>
      <p>{opt.message}</p>
      <div className='confirm-footer'>
        {opt.showConfirmText &&
          <button className='confirm-button' onClick={() => {
            opt.onConfirm()
            deleteTempNode() // 删除confirm
          }}>{opt.confirmText}</button>}
        {opt.showCancelText &&
          <button className='confirm-button' onClick={() => {
            opt.onCancel()
            deleteTempNode() // 删除confirm
          }}>{opt.cancelText}</button>}
      </div>
    </div>

    try {
      ReactDom.render(str, dom)
      resolve(true)
    } catch (e) {
      reject(e)
    }
  })


}
//  为confirm添加节点
function createTempNode() {
  let div = document.createElement('div', null, null)
  div.id = 'confirm-container'
  return document.body.appendChild(div)
}
//  删除confirm节点
function deleteTempNode() {
  let div = document.getElementById('confirm-container')
  return document.body.removeChild(div)
}

// class Confirm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tipText: '提示',
//       message: '确定此操作 ?',
//       confirmText: '确定',
//       cancelText: '取消',
//       showConfirmText: true,
//       showCancelText: true

//     }
//   }
//   render() {
//     const { onConfirm = () => { }, onCancel = () => { }, tipText = '提示', message = '确定此操作',
//       confirmText = '确定', cancelText = '取消', showConfirmText = true,
//       showCancelText = true } = this.props
//     return <div className='confirm-contianer'>
//       <h4 className='confirm-header'>{tipText}</h4>
//       <p>{message}</p>
//       <div className='confirm-footer'>
//         {showConfirmText &&
//           <button className='confirm-button' onClick={() => {
//             onConfirm()
//           }}>{confirmText}</button>}
//         {showCancelText &&
//           <button className='confirm-button' onClick={() => onCancel()}>{cancelText}</button>}
//       </div>
//     </div>
//   }
//   componentDidMount() {
//   }
// }

export default Confirm