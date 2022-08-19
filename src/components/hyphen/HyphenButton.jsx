import React from 'react'
import { Button} from 'antd';
import './Hyphen.css'
import { useNavigate } from 'react-router-dom';


const HyphenButton = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Button className='hyphen_btn' type="primary" onClick={() => navigate('/hyphen-bridge')}>
            Hyphen Bridge
        </Button>
    </div>
  )
}

export default HyphenButton