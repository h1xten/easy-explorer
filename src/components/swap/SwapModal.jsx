import React, {useState} from 'react'
import { Button, Modal } from 'antd';
import Swap from './Swap';
import './Swap.css'


const SwapModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
        <Button className='hyphen_btn' type="primary" onClick={() => setModalVisible(true)}>
            Hyphen Bridge
        </Button>
        <Modal
            className='swap_modal'
            visible={modalVisible}
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            closable = {true}
            footer = {null}
            centered ={true}
      >
        <Swap modalVisible={modalVisible} />
      </Modal>
    </div>
  )
}

export default SwapModal