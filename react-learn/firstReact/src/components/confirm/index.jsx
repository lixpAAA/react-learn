
import React, { Component } from 'react'
import './index.css'


function Confirm(message = '确定此操作', onConfirm = () => { }, onCancel = () => { },
  tipText = '提示', confirmText = '确定',
  cancelText = '取消', showConfirmText = true,
  showCancelText = true) {


  return <div className='confirm-contianer'>
    <h4 className='confirm-header'>{tipText}</h4>
    <p>{message}</p>
    <div className='confirm-footer'>
      {showConfirmText &&
        <button className='confirm-button' onClick={() => {
          new Promise((resolve, reject) => {
            onConfirm()
            resolve(true)
          })

        }}>{confirmText}</button>}
      {showCancelText &&
        <button className='confirm-button' onClick={() => {
          new Promise((resolve, reject) => {
            onCancel()
            reject()
          })
        }}>{cancelText}</button>}
    </div>
  </div>
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